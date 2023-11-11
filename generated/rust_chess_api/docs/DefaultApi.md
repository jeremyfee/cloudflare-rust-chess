# \DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accept_challenge**](DefaultApi.md#accept_challenge) | **PATCH** /challenges/items/{id} | 
[**create_challenge**](DefaultApi.md#create_challenge) | **POST** /challenges/items | 
[**get_challenge**](DefaultApi.md#get_challenge) | **GET** /challenges/items/{id} | 
[**get_challenges**](DefaultApi.md#get_challenges) | **GET** /challenges/items | 
[**get_game**](DefaultApi.md#get_game) | **GET** /games/items/{id} | 
[**get_games**](DefaultApi.md#get_games) | **GET** /games/items | 
[**make_move**](DefaultApi.md#make_move) | **PATCH** /games/items/{id} | 



## accept_challenge

> crate::models::ChessGame accept_challenge(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Challenge ID | [required] |

### Return type

[**crate::models::ChessGame**](ChessGame.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_challenge

> crate::models::Challenge create_challenge(request_create_challenge)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**request_create_challenge** | [**RequestCreateChallenge**](RequestCreateChallenge.md) | challenge parameters | [required] |

### Return type

[**crate::models::Challenge**](Challenge.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_challenge

> crate::models::ChallengeCollection get_challenge(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Challenge ID | [required] |

### Return type

[**crate::models::ChallengeCollection**](ChallengeCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_challenges

> crate::models::ChallengeCollection get_challenges()


### Parameters

This endpoint does not need any parameter.

### Return type

[**crate::models::ChallengeCollection**](ChallengeCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_game

> crate::models::ChessGame get_game(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Game ID | [required] |

### Return type

[**crate::models::ChessGame**](ChessGame.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_games

> crate::models::GameCollection get_games()


### Parameters

This endpoint does not need any parameter.

### Return type

[**crate::models::GameCollection**](GameCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## make_move

> crate::models::GameMove make_move(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | Game ID | [required] |

### Return type

[**crate::models::GameMove**](GameMove.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

