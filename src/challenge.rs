use crate::error::ChessApiError;
use chess_engine::Game;
use chess_openapi::models::{Challenge, ChessGame, PieceColor};
use chrono::{DateTime, Utc};
use std::time::{SystemTime, UNIX_EPOCH};

pub fn accept_challenge(challenge: &Challenge, user: &String) -> Result<ChessGame, ChessApiError> {
    let created_by = challenge.created_by.clone();
    if created_by.as_str() != user {
        return Err(ChessApiError::YourChallenge {});
    }
    if let Some(opponent) = challenge.opponent.clone() {
        if user != opponent.as_str() {
            return Err(ChessApiError::NotYourChallenge {});
        }
    }
    let (player1, player2) = get_player_order(challenge, created_by, user.to_string());

    Ok(ChessGame {
        id: iso8601_now(),
        fen: Game::default().to_fen(0, 0).unwrap(),
        moves: vec![],
        player1,
        player2,
        status: None,
        turn: Some(PieceColor::White),
    })
}

pub fn create_challenge(
    created_by: String,
    opponent: Option<String>,
    play_as: Option<PieceColor>,
) -> Challenge {
    let created_at = iso8601_now();
    Challenge {
        id: created_at.clone(),
        created_at,
        created_by,
        opponent,
        play_as,
        game_id: None,
    }
}

fn get_player_order(challenge: &Challenge, player1: String, player2: String) -> (String, String) {
    match challenge.play_as {
        Some(PieceColor::White) => (player1, player2),
        Some(PieceColor::Black) => (player2, player1),
        None => {
            if coin_flip() {
                (player1, player2)
            } else {
                (player2, player1)
            }
        }
    }
}

fn coin_flip() -> bool {
    let millis = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .subsec_millis();
    return millis % 2 == 0;
}

fn iso8601_now() -> String {
    let now: DateTime<Utc> = SystemTime::now().into();
    format!("{}", now.format("%+"))
}
