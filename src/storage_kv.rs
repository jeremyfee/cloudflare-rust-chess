use async_trait::async_trait;
use chess_openapi::models::{Challenge, ChessGame, GameMetadata};
use serde_json::from_value;
use worker::{kv::KvStore, Error, RouteContext};

use crate::storage::{get_game_metadata, ChessStorage};

pub struct ChessStorageKv<'a, T> {
    pub binding: &'a str,
    pub context: &'a RouteContext<T>,
}

impl<'a, T> ChessStorageKv<'a, T> {
    pub fn new(context: &'a RouteContext<T>, binding: &'a str) -> Self {
        Self {
            binding,
            context: &context,
        }
    }

    fn kv_store(&self) -> Result<KvStore, Error> {
        self.context.kv(self.binding)
    }
}

#[async_trait(?Send)]
impl<T> ChessStorage for ChessStorageKv<'_, T> {
    async fn delete_challenge(&self, challenge: Challenge) -> Result<(), Error> {
        let key = &format!("challenge:{}", challenge.id);
        self.kv_store()?.delete(key).await?;
        Ok(())
    }

    async fn read_challenge(&self, id: &str) -> Result<Option<Challenge>, Error> {
        let key = format!("challenge:{}", id);
        let challenge = self.kv_store()?.get(&key).json::<Challenge>().await?;
        Ok(challenge)
    }

    async fn read_challenges(&self) -> Result<Vec<Challenge>, Error> {
        let prefix = format!("challenge:");
        let keys = self
            .kv_store()?
            .list()
            .limit(100)
            .prefix(prefix)
            .execute()
            .await?
            .keys;
        let challenges: Vec<Challenge> = keys
            .into_iter()
            .filter(|key| key.metadata.is_some())
            .map(|key| from_value::<Challenge>(key.metadata.unwrap()).unwrap())
            .collect();
        Ok(challenges)
    }

    async fn write_challenge(&self, challenge: Challenge) -> Result<(), Error> {
        let key = format!("challenge:{}", challenge.id);
        self.kv_store()?
            .put(&key, challenge.clone())?
            .expiration_ttl(7 * 86400)
            .metadata(challenge)?
            .execute()
            .await?;
        Ok(())
    }

    async fn read_game(&self, id: &str) -> Result<Option<ChessGame>, Error> {
        let key = format!("game:{}", id);
        let chess_game = self.kv_store()?.get(&key).json::<ChessGame>().await?;
        Ok(chess_game)
    }

    async fn read_games(&self) -> Result<Vec<GameMetadata>, Error> {
        let prefix = format!("game:");
        let keys = self
            .kv_store()?
            .list()
            .limit(100)
            .prefix(prefix)
            .execute()
            .await?
            .keys;
        let games: Vec<GameMetadata> = keys
            .into_iter()
            .filter(|key| key.metadata.is_some())
            .map(|key| from_value::<GameMetadata>(key.metadata.unwrap()).unwrap())
            .collect();
        Ok(games)
    }

    async fn write_game(&self, game: ChessGame) -> Result<(), Error> {
        let key = format!("game:{}", game.id);
        let metadata: GameMetadata = get_game_metadata(&game);
        self.kv_store()?
            .put(&key, game)?
            .metadata(metadata)?
            .execute()
            .await?;
        Ok(())
    }
}
