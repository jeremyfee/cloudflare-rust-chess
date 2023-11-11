/*
 * Chess API
 *
 * api for chess game
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 * Generated by: https://openapi-generator.tech
 */


/// 
#[derive(Clone, Copy, Debug, Eq, PartialEq, Ord, PartialOrd, Hash, Serialize, Deserialize)]
pub enum GameStatus {
    #[serde(rename = "BLACK_RESIGN")]
    BlackResign,
    #[serde(rename = "BLACK_WIN")]
    BlackWin,
    #[serde(rename = "DRAW")]
    Draw,
    #[serde(rename = "STALEMATE")]
    Stalemate,
    #[serde(rename = "WHITE_RESIGN")]
    WhiteResign,
    #[serde(rename = "WHITE_WIN")]
    WhiteWin,

}

impl ToString for GameStatus {
    fn to_string(&self) -> String {
        match self {
            Self::BlackResign => String::from("BLACK_RESIGN"),
            Self::BlackWin => String::from("BLACK_WIN"),
            Self::Draw => String::from("DRAW"),
            Self::Stalemate => String::from("STALEMATE"),
            Self::WhiteResign => String::from("WHITE_RESIGN"),
            Self::WhiteWin => String::from("WHITE_WIN"),
        }
    }
}

impl Default for GameStatus {
    fn default() -> GameStatus {
        Self::BlackResign
    }
}



