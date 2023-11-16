use thiserror::Error;

#[derive(Error, Debug)]
pub enum ChessApiError {
    #[error("ambiguous move")]
    AmbiguousMove {},
    #[error("game over")]
    GameOver {},
    #[error("invalid move")]
    InvalidMove {},
    #[error("load error")]
    LoadError {},
    #[error("not your challenge")]
    NotYourChallenge {},
    #[error("not your turn")]
    NotYourTurn {},
    #[error("parse error")]
    ParseError {},
    #[error("your challenge")]
    YourChallenge {},
}
