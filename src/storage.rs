use async_trait::async_trait;
use chess_openapi::models::{Challenge, ChessGame, GameMetadata};
use std::result::Result;
use worker::Error;

#[async_trait(?Send)]
pub trait ChessStorage<E = Error> {
    async fn delete_challenge(&self, challenge: Challenge) -> Result<(), E>;

    async fn read_challenge(&self, id: &str) -> Result<Option<Challenge>, E>;

    async fn read_challenges(&self) -> Result<Vec<Challenge>, E>;

    async fn write_challenge(&self, api_challenge: Challenge) -> Result<(), E>;

    async fn read_game(&self, id: &str) -> Result<Option<ChessGame>, E>;

    async fn read_games(&self) -> Result<Vec<GameMetadata>, E>;

    async fn write_game(&self, api_game: ChessGame) -> Result<(), E>;
}

pub fn get_game_metadata(game: &ChessGame) -> GameMetadata {
    GameMetadata {
        id: game.id.clone(),
        fen: game.fen.clone(),
        player1: game.player1.clone(),
        player2: game.player2.clone(),
        status: game.status,
        turn: game.turn,
    }
}
