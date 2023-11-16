use crate::challenge::{accept_challenge, create_challenge};
use crate::error::ChessApiError;
use crate::game::make_move;
use crate::storage::ChessStorage;
use crate::storage_kv::ChessStorageKv;
use chess_openapi::models::{
    ChallengeCollection, GameCollection, GameMetadata, GameMove, RequestCreateChallenge,
};
use worker::{Request, Response, Result, RouteContext};

pub struct ApiContext {
    pub binding: String,
}

impl ApiContext {
    pub fn new(binding: String) -> Self {
        Self { binding }
    }
}

pub async fn api_accept_challenge(
    request: Request,
    context: RouteContext<ApiContext>,
) -> Result<Response> {
    let user = match user(&request, &context) {
        Some(user) => user,
        _ => return Response::error("Requires login", 401),
    };
    let id = match request_param(&context, "id") {
        Some(id) => id,
        _ => return Response::error("Bad request", 400),
    };

    let storage = storage(&context);
    let challenge = match storage.read_challenge(&id).await? {
        Some(challenge) => challenge,
        _ => return Response::error("Not found", 404),
    };
    match accept_challenge(&challenge, &user.into()) {
        Ok(game) => {
            storage.write_game(game.clone()).await?;
            storage.delete_challenge(challenge).await?;
            Response::from_json(&game)
        }
        Err(error) => Response::error(error.to_string(), 400),
    }
}

pub async fn api_cancel_challenge(
    request: Request,
    context: RouteContext<ApiContext>,
) -> Result<Response> {
    let user = match user(&request, &context) {
        Some(user) => user,
        _ => return Response::error("Requires login", 401),
    };
    let id = match request_param(&context, "id") {
        Some(id) => id,
        _ => return Response::error("Bad request", 400),
    };

    let storage = storage(&context);
    let challenge = match storage.read_challenge(&id).await? {
        Some(challenge) => challenge,
        _ => return Response::error("Not found", 404),
    };
    if challenge.created_by != user {
        return Response::error("Not your challenge", 403);
    }
    storage.delete_challenge(challenge).await?;
    Response::ok("Challenge cancelled")
}

pub async fn api_create_challenge(
    mut request: Request,
    context: RouteContext<ApiContext>,
) -> Result<Response> {
    let user = match user(&request, &context) {
        Some(user) => user,
        _ => return Response::error("Requires login", 401),
    };
    let request = request_body::<RequestCreateChallenge>(&mut request).await?;
    let challenge = create_challenge(user, request.opponent.unwrap_or_default(), request.play_as);
    storage(&context).write_challenge(challenge.clone()).await?;
    Response::from_json(&challenge)
}

pub async fn api_get_challenge(
    _request: Request,
    context: RouteContext<ApiContext>,
) -> Result<Response> {
    let id = match request_param(&context, "id") {
        Some(id) => id,
        _ => return Response::error("Bad request", 400),
    };

    let challenge = match storage(&context).read_challenge(&id).await? {
        Some(challenge) => challenge,
        _ => return Response::error("Not found", 404),
    };
    Response::from_json(&challenge)
}

pub async fn api_get_challenges(
    _request: Request,
    context: RouteContext<ApiContext>,
) -> Result<Response> {
    let challenges = storage(&context).read_challenges().await?;
    let collection = ChallengeCollection::new(challenges);
    Response::from_json(&collection)
}

pub async fn api_get_game(
    _request: Request,
    context: RouteContext<ApiContext>,
) -> Result<Response> {
    let id = match request_param(&context, "id") {
        Some(id) => id,
        _ => return Response::error("Bad request", 400),
    };

    let game = match storage(&context).read_game(&id).await? {
        Some(game) => game,
        _ => return Response::error("Not found", 404),
    };
    Response::from_json(&game)
}

pub async fn api_get_games(
    _request: Request,
    context: RouteContext<ApiContext>,
) -> Result<Response> {
    let games: Vec<GameMetadata> = storage(&context).read_games().await?;
    let collection = GameCollection::new(games);
    Response::from_json(&collection)
}

pub async fn api_make_move(
    mut request: Request,
    context: RouteContext<ApiContext>,
) -> Result<Response> {
    let user = match user(&request, &context) {
        Some(user) => user,
        _ => return Response::error("Requires login", 401),
    };
    let id = match request_param(&context, "id") {
        Some(id) => id,
        _ => return Response::error("Bad request", 400),
    };
    let game_move = request_body::<GameMove>(&mut request).await?;

    let storage = storage(&context);
    let mut game = match storage.read_game(&id).await? {
        Some(game) => game,
        _ => return Response::error("Not found", 404),
    };
    match make_move(&mut game, &user, game_move) {
        Ok(_) => {
            storage.write_game(game.clone()).await?;
            Response::from_json(&game)
        }
        Err(ChessApiError::NotYourTurn {}) => Response::error("Not your turn", 403),
        Err(ChessApiError::ParseError {}) => Response::error("Error parsing move", 400),
        _ => return Response::error("Internal error", 500),
    }
}

fn storage<'a>(context: &'a RouteContext<ApiContext>) -> impl ChessStorage + 'a {
    ChessStorageKv::<ApiContext>::new(context, context.data.binding.as_str())
}

async fn request_body<T>(request: &mut Request) -> Result<T>
where
    T: serde::de::DeserializeOwned,
{
    request.json::<T>().await
}

fn request_param(context: &RouteContext<ApiContext>, key: &str) -> Option<String> {
    context.param(key).map(|value| value.to_string())
}

fn user(_request: &Request, _context: &RouteContext<ApiContext>) -> Option<String> {
    None
}
