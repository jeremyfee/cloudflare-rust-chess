import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * @param id Challenge ID
     */
    public acceptChallengeWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ChessGame>> {
        const requestContextPromise = this.requestFactory.acceptChallenge(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.acceptChallengeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id Challenge ID
     */
    public acceptChallenge(id: string, _options?: Configuration): Observable<ChessGame> {
        return this.acceptChallengeWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ChessGame>) => apiResponse.data));
    }

    /**
     * @param requestCreateChallenge challenge parameters
     */
    public createChallengeWithHttpInfo(requestCreateChallenge: RequestCreateChallenge, _options?: Configuration): Observable<HttpInfo<Challenge>> {
        const requestContextPromise = this.requestFactory.createChallenge(requestCreateChallenge, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createChallengeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param requestCreateChallenge challenge parameters
     */
    public createChallenge(requestCreateChallenge: RequestCreateChallenge, _options?: Configuration): Observable<Challenge> {
        return this.createChallengeWithHttpInfo(requestCreateChallenge, _options).pipe(map((apiResponse: HttpInfo<Challenge>) => apiResponse.data));
    }

    /**
     * @param id Challenge ID
     */
    public getChallengeWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ChallengeCollection>> {
        const requestContextPromise = this.requestFactory.getChallenge(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChallengeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id Challenge ID
     */
    public getChallenge(id: string, _options?: Configuration): Observable<ChallengeCollection> {
        return this.getChallengeWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ChallengeCollection>) => apiResponse.data));
    }

    /**
     */
    public getChallengesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ChallengeCollection>> {
        const requestContextPromise = this.requestFactory.getChallenges(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChallengesWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getChallenges(_options?: Configuration): Observable<ChallengeCollection> {
        return this.getChallengesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ChallengeCollection>) => apiResponse.data));
    }

    /**
     * @param id Game ID
     */
    public getGameWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ChessGame>> {
        const requestContextPromise = this.requestFactory.getGame(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGameWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id Game ID
     */
    public getGame(id: string, _options?: Configuration): Observable<ChessGame> {
        return this.getGameWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ChessGame>) => apiResponse.data));
    }

    /**
     */
    public getGamesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<GameCollection>> {
        const requestContextPromise = this.requestFactory.getGames(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGamesWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getGames(_options?: Configuration): Observable<GameCollection> {
        return this.getGamesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GameCollection>) => apiResponse.data));
    }

    /**
     * @param id Game ID
     */
    public makeMoveWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<GameMove>> {
        const requestContextPromise = this.requestFactory.makeMove(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.makeMoveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id Game ID
     */
    public makeMove(id: string, _options?: Configuration): Observable<GameMove> {
        return this.makeMoveWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<GameMove>) => apiResponse.data));
    }

}
