# Design

## Goals

Learn more about Cloudflare Workers using Rust by porting an existing rust/react stack.

- Rust Cloudflare Workers

  https://github.com/cloudflare/workers-rs

- Existing stack
  - backend Rust/WASM deployed to JUNO blockchain
    - https://github.com/jeremyfee/cosmwasm-chess
  - frontend Typescript/React deployed to Cloudflare Pages
    - https://github.com/jeremyfee/cosmwasm-chess-ui
    - https://junochess.pages.dev/

## Plan

cosmwasm-chess already uses Rust/WASM deployment target.  Migrating from JUNO/Cosmos blockchain to Cloudflare requires significant changes to:

- data storage (was provided by blockchain)

  > Cloudflare worker storage options:
  >   - Key/Value: https://developers.cloudflare.com/kv
  >   - Relational: https://developers.cloudflare.com/d1
  >   - Object: https://developers.cloudflare.com/r2
  >
  > Core game logic already decoupled from blockchain interface.

- identity management (was provided by blockchain wallet)

  > Integrate external identity provider using OIDC.
