use chess_engine::{Color, Game, GameAction, GameError, GameOver};
use chess_openapi::models::{game_move::Action, ChessGame, GameMove, GameStatus, PieceColor};
use std::result::Result;

use crate::error::ChessApiError;

pub fn make_move(
    chess_game: &mut ChessGame,
    user: &String,
    game_move: GameMove,
) -> Result<Option<GameStatus>, ChessApiError> {
    if user != player_to_move(&chess_game)?.as_str() {
        return Err(ChessApiError::NotYourTurn {});
    }
    let action = parse_action(&game_move)?;
    let mut game: Game = load_game(&chess_game)?;
    match game.make_move(&action) {
        Ok(result) => {
            chess_game.moves.push(game_move);
            (chess_game.status, chess_game.turn) = match result {
                Some(over) => (Some(parse_status(&over)), None),
                None => (None, Some(next_turn(&chess_game))),
            };
            Ok(chess_game.status)
        }
        Err(error) => Err(match error {
            GameError::AmbiguousMove => ChessApiError::AmbiguousMove {},
            _ => ChessApiError::InvalidMove {},
        }),
    }
}

fn load_game(game: &ChessGame) -> Result<Game, ChessApiError> {
    let draw_offered = match game.moves.last() {
        Some(GameMove {
            action: Action::OfferDraw,
            r#move: _,
        }) => match next_turn(game) {
            PieceColor::Black => Some(Color::White),
            PieceColor::White => Some(Color::Black),
        },
        _ => None,
    };
    match Game::from_fen(game.fen.as_str(), draw_offered, None) {
        Ok(game) => Ok(game),
        _ => Err(ChessApiError::LoadError {}),
    }
}

fn next_turn(game: &ChessGame) -> PieceColor {
    match game.moves.len() % 2 {
        1 => PieceColor::Black,
        _ => PieceColor::White,
    }
}

fn parse_action(value: &GameMove) -> Result<GameAction, ChessApiError> {
    if let Some(game_move) = &value.r#move {
        match value.action {
            Action::OfferDraw => Ok(GameAction::OfferDraw(game_move.to_string())),
            Action::Move => Ok(GameAction::MakeMove(game_move.to_string())),
            _ => Err(ChessApiError::ParseError {}),
        }
    } else {
        match value.action {
            Action::AcceptDraw => Ok(GameAction::AcceptDraw),
            Action::Resign => Ok(GameAction::Resign),
            _ => Err(ChessApiError::ParseError {}),
        }
    }
}

fn parse_status(value: &GameOver) -> GameStatus {
    match value {
        GameOver::BlackCheckmates => GameStatus::BlackWin,
        GameOver::BlackResigns => GameStatus::BlackResign,
        GameOver::DrawAccepted => GameStatus::Draw,
        GameOver::Stalemate => GameStatus::Stalemate,
        GameOver::WhiteCheckmates => GameStatus::WhiteWin,
        GameOver::WhiteResigns => GameStatus::WhiteResign,
    }
}

fn player_to_move(game: &ChessGame) -> Result<String, ChessApiError> {
    if game.status.is_some() {
        return Err(ChessApiError::GameOver {});
    }
    match next_turn(game) {
        PieceColor::Black => Ok(game.player2.clone()),
        PieceColor::White => Ok(game.player1.clone()),
    }
}
