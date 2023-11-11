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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id Challenge ID
     */
    public acceptChallengeWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ChessGame>> {
        const result = this.api.acceptChallengeWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id Challenge ID
     */
    public acceptChallenge(id: string, _options?: Configuration): Promise<ChessGame> {
        const result = this.api.acceptChallenge(id, _options);
        return result.toPromise();
    }

    /**
     * @param requestCreateChallenge challenge parameters
     */
    public createChallengeWithHttpInfo(requestCreateChallenge: RequestCreateChallenge, _options?: Configuration): Promise<HttpInfo<Challenge>> {
        const result = this.api.createChallengeWithHttpInfo(requestCreateChallenge, _options);
        return result.toPromise();
    }

    /**
     * @param requestCreateChallenge challenge parameters
     */
    public createChallenge(requestCreateChallenge: RequestCreateChallenge, _options?: Configuration): Promise<Challenge> {
        const result = this.api.createChallenge(requestCreateChallenge, _options);
        return result.toPromise();
    }

    /**
     * @param id Challenge ID
     */
    public getChallengeWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ChallengeCollection>> {
        const result = this.api.getChallengeWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id Challenge ID
     */
    public getChallenge(id: string, _options?: Configuration): Promise<ChallengeCollection> {
        const result = this.api.getChallenge(id, _options);
        return result.toPromise();
    }

    /**
     */
    public getChallengesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ChallengeCollection>> {
        const result = this.api.getChallengesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getChallenges(_options?: Configuration): Promise<ChallengeCollection> {
        const result = this.api.getChallenges(_options);
        return result.toPromise();
    }

    /**
     * @param id Game ID
     */
    public getGameWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ChessGame>> {
        const result = this.api.getGameWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id Game ID
     */
    public getGame(id: string, _options?: Configuration): Promise<ChessGame> {
        const result = this.api.getGame(id, _options);
        return result.toPromise();
    }

    /**
     */
    public getGamesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<GameCollection>> {
        const result = this.api.getGamesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getGames(_options?: Configuration): Promise<GameCollection> {
        const result = this.api.getGames(_options);
        return result.toPromise();
    }

    /**
     * @param id Game ID
     */
    public makeMoveWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<GameMove>> {
        const result = this.api.makeMoveWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id Game ID
     */
    public makeMove(id: string, _options?: Configuration): Promise<GameMove> {
        const result = this.api.makeMove(id, _options);
        return result.toPromise();
    }


}



