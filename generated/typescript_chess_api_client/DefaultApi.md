# .DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptChallenge**](DefaultApi.md#acceptChallenge) | **PATCH** /challenges/items/{id} | 
[**createChallenge**](DefaultApi.md#createChallenge) | **POST** /challenges/items | 
[**getChallenge**](DefaultApi.md#getChallenge) | **GET** /challenges/items/{id} | 
[**getChallenges**](DefaultApi.md#getChallenges) | **GET** /challenges/items | 
[**getGame**](DefaultApi.md#getGame) | **GET** /games/items/{id} | 
[**getGames**](DefaultApi.md#getGames) | **GET** /games/items | 
[**makeMove**](DefaultApi.md#makeMove) | **PATCH** /games/items/{id} | 


# **acceptChallenge**
> ChessGame acceptChallenge()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiAcceptChallengeRequest = {
  // string | Challenge ID
  id: "id_example",
};

apiInstance.acceptChallenge(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Challenge ID | defaults to undefined


### Return type

**ChessGame**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created game |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createChallenge**
> Challenge createChallenge(requestCreateChallenge)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateChallengeRequest = {
  // RequestCreateChallenge | challenge parameters
  requestCreateChallenge: {
    opponent: "opponent_example",
    playAs: "WHITE",
  },
};

apiInstance.createChallenge(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestCreateChallenge** | **RequestCreateChallenge**| challenge parameters |


### Return type

**Challenge**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created challenge |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getChallenge**
> ChallengeCollection getChallenge()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetChallengeRequest = {
  // string | Challenge ID
  id: "id_example",
};

apiInstance.getChallenge(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Challenge ID | defaults to undefined


### Return type

**ChallengeCollection**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get challenge |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getChallenges**
> ChallengeCollection getChallenges()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getChallenges(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ChallengeCollection**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of challenges |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGame**
> ChessGame getGame()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetGameRequest = {
  // string | Game ID
  id: "id_example",
};

apiInstance.getGame(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Game ID | defaults to undefined


### Return type

**ChessGame**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Game |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGames**
> GameCollection getGames()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getGames(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GameCollection**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of chess games |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **makeMove**
> GameMove makeMove()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiMakeMoveRequest = {
  // string | Game ID
  id: "id_example",
};

apiInstance.makeMove(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Game ID | defaults to undefined


### Return type

**GameMove**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated game |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


