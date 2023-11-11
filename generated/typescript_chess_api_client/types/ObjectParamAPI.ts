import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Challenge } from '../models/Challenge';
import { ChallengeCollection } from '../models/ChallengeCollection';
import { ChessGame } from '../models/ChessGame';
import { GameCollection } from '../models/GameCollection';
import { GameMetadata } from '../models/GameMetadata';
import { GameMove } from '../models/GameMove';
import { GameStatus } from '../models/GameStatus';
import { PieceColor } from '../models/PieceColor';
import { RequestAcceptChallenge } from '../models/RequestAcceptChallenge';
import { RequestCreateChallenge } from '../models/RequestCreateChallenge';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiAcceptChallengeRequest {
    /**
     * Challenge ID
     * @type string
     * @memberof DefaultApiacceptChallenge
     */
    id: string
}

export interface DefaultApiCreateChallengeRequest {
    /**
     * challenge parameters
     * @type RequestCreateChallenge
     * @memberof DefaultApicreateChallenge
     */
    requestCreateChallenge: RequestCreateChallenge
}

export interface DefaultApiGetChallengeRequest {
    /**
     * Challenge ID
     * @type string
     * @memberof DefaultApigetChallenge
     */
    id: string
}

export interface DefaultApiGetChallengesRequest {
}

export interface DefaultApiGetGameRequest {
    /**
     * Game ID
     * @type string
     * @memberof DefaultApigetGame
     */
    id: string
}

export interface DefaultApiGetGamesRequest {
}

export interface DefaultApiMakeMoveRequest {
    /**
     * Game ID
     * @type string
     * @memberof DefaultApimakeMove
     */
    id: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public acceptChallengeWithHttpInfo(param: DefaultApiAcceptChallengeRequest, options?: Configuration): Promise<HttpInfo<ChessGame>> {
        return this.api.acceptChallengeWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public acceptChallenge(param: DefaultApiAcceptChallengeRequest, options?: Configuration): Promise<ChessGame> {
        return this.api.acceptChallenge(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createChallengeWithHttpInfo(param: DefaultApiCreateChallengeRequest, options?: Configuration): Promise<HttpInfo<Challenge>> {
        return this.api.createChallengeWithHttpInfo(param.requestCreateChallenge,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createChallenge(param: DefaultApiCreateChallengeRequest, options?: Configuration): Promise<Challenge> {
        return this.api.createChallenge(param.requestCreateChallenge,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getChallengeWithHttpInfo(param: DefaultApiGetChallengeRequest, options?: Configuration): Promise<HttpInfo<ChallengeCollection>> {
        return this.api.getChallengeWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getChallenge(param: DefaultApiGetChallengeRequest, options?: Configuration): Promise<ChallengeCollection> {
        return this.api.getChallenge(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getChallengesWithHttpInfo(param: DefaultApiGetChallengesRequest = {}, options?: Configuration): Promise<HttpInfo<ChallengeCollection>> {
        return this.api.getChallengesWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getChallenges(param: DefaultApiGetChallengesRequest = {}, options?: Configuration): Promise<ChallengeCollection> {
        return this.api.getChallenges( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getGameWithHttpInfo(param: DefaultApiGetGameRequest, options?: Configuration): Promise<HttpInfo<ChessGame>> {
        return this.api.getGameWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getGame(param: DefaultApiGetGameRequest, options?: Configuration): Promise<ChessGame> {
        return this.api.getGame(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getGamesWithHttpInfo(param: DefaultApiGetGamesRequest = {}, options?: Configuration): Promise<HttpInfo<GameCollection>> {
        return this.api.getGamesWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getGames(param: DefaultApiGetGamesRequest = {}, options?: Configuration): Promise<GameCollection> {
        return this.api.getGames( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public makeMoveWithHttpInfo(param: DefaultApiMakeMoveRequest, options?: Configuration): Promise<HttpInfo<GameMove>> {
        return this.api.makeMoveWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public makeMove(param: DefaultApiMakeMoveRequest, options?: Configuration): Promise<GameMove> {
        return this.api.makeMove(param.id,  options).toPromise();
    }

}
