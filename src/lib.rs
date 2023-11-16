mod api;
mod challenge;
mod error;
mod game;
mod storage;
mod storage_kv;

use api::{
    api_accept_challenge, api_cancel_challenge, api_create_challenge, api_get_challenge,
    api_get_challenges, api_get_game, api_get_games, api_make_move, ApiContext,
};
use worker::{event, Context, Env, Request, Response, Result, Router};

#[event(fetch)]
async fn main(request: Request, env: Env, _context: Context) -> Result<Response> {
    let router = Router::with_data(ApiContext::new("RUST_CHESS_V1".to_string()));
    router
        .get_async("/challenges/items", api_get_challenges)
        .post_async("/challenges/items", api_create_challenge)
        .get_async("/challenges/items/:id", api_get_challenge)
        .delete_async("/challenges/items/:id", api_cancel_challenge)
        .patch_async("/challenges/items/:id", api_accept_challenge)
        .get_async("/games/items", api_get_games)
        .get_async("/games/items/:id", api_get_game)
        .patch_async("/games/items/:id", api_make_move)
        .run(request, env)
        .await
}
