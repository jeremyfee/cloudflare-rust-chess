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

import { Challenge } from '../models/Challenge';
import { HttpFile } from '../http/http';

export class ChallengeCollection {
    'challenges': Array<Challenge>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "challenges",
            "baseName": "challenges",
            "type": "Array<Challenge>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ChallengeCollection.attributeTypeMap;
    }

    public constructor() {
    }
}
