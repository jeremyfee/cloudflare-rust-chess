/**
 * Chess API
 * api for chess game
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export enum GameStatus {
    BlackResign = 'BLACK_RESIGN',
    BlackWin = 'BLACK_WIN',
    Draw = 'DRAW',
    Stalemate = 'STALEMATE',
    WhiteResign = 'WHITE_RESIGN',
    WhiteWin = 'WHITE_WIN'
}
