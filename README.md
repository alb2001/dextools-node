![Image](https://raw.githubusercontent.com/alb2001/dextools-node/main/assets/dextools-node.png)

# DEXTools Node
[![Node.js CI](https://github.com/alb2001/dextools-node/actions/workflows/node.js.yml/badge.svg)](https://github.com/alb2001/dextools-node/actions/workflows/node.js.yml)
[![NPM Downloads](https://img.shields.io/npm/dm/dextools-node)](https://npm-stat.com/charts.html?package=dextools-node)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![NPM Version](https://img.shields.io/npm/v/dextools-node)](https://www.npmjs.com/package/dextools-node)

A simple NodeJS API wrapper for DEXTools.
Supports [Dextools API v1](https://api.dextools.io/docs) and [Dextools API v2](https://developer.dextools.io/docs/start)

1. [Installation](#installation)
2. [Obtaining API Key](#obtaining-api-key)
3. [Getting Started](#getting-started)
    1. [Version 1](#version-1)
    2. [Version 2](#version-2)
        1. [Available plans - Setting your plan](#available-plans---setting-your-plan)
4. [Version 1 Queries](#version-1-queries)
    1. [Get pairs of a token](#get-pairs-of-a-token)
    2. [Get token details](#get-token-details)
    3. [Get chain list](#get-chain-list)
    4. [Get exchange list](#get-exchange-list)
5. [Version 2 Queries](#version-2-queries)
    1. [Blockchain](#blockchain)
        1. [Get blockchain info](#get-blockchain-info)
        2. [Get blockchains sorted by default settings](#get-blockchains-sorted-by-default-settings)
        3. [Get blockchains sorted by default settings and descending order](#get-blockchains-sorted-by-default-settings-and-descending-order)
    2. [Exchange](#exchange)
        1. [Get dex factory info](#get-dex-factory-info)
        2. [Get dexes on a specific chain](#get-dexes-on-a-specific-chain)
        3. [Get dexes on a specific chain sorted by name and descending order](#get-dexes-on-a-specific-chain-sorted-by-name-and-descending-order)
    3. [Pool](#pool)
        1. [Get pool info](#get-pool-info)
        2. [Get pool liquidity](#get-pool-liquidity)
        3. [Get pool score](#get-pool-score)
        4. [Get pool price](#get-pool-price)
        5. [Get pool locks](#get-pool-locks)
        6. [Get pools](#get-pools)
        7. [Get pools sorted by `creationBlock` and descending order and providing block numbers instead](#get-pools-sorted-by-creationblock-and-descending-order-and-providing-block-numbers-instead)
    4. [Token](#token)
        1. [Get token](#get-token)
        2. [Get token locks](#get-token-locks)
        3. [Get token score](#get-token-score)
        4. [Get token info](#get-token-info)
        5. [Get token price](#get-token-price)
        6. [Get token audit](#get-token-audit)
        7. [Get tokens](#get-tokens)
        8. [Get tokens sorted by `creationBlock` and descending order and providing block numbers instead in descending order](#get-tokens-sorted-by-creationblock-and-descending-order-and-providing-block-numbers-instead-in-descending-order)
        8. [Get tokens sorted by `socialsInfoUpdated` and descending order and datetimes in descending order](#get-tokens-sorted-by-socialsinfoupdated-and-descending-order-and-datetimes-in-descending-order)
        9. [Get token pools](#get-token-pools)
        10. [Get token pools sorted by `creationBlock` and descending order and providing block numbers instead in descending order](#get-token-pools-sorted-by-creationblock-and-descending-order-and-providing-block-numbers-instead-in-descending-order)
    5. [Rankings](#rankings)
        1. [Get hot pools](#get-hot-pools)
        2. [Get gainers](#get-gainers)
        3. [Get losers](#get-losers)
6. [Page and PageSize arguments](#page-and-pagesize-arguments)
7. [Examples](#examples)
8. [Testing](#testing)
9. [Supported Blockchains](#supported-blockchains)
10. [Authors](#authors)
11. [More information](#more-information)


## Installation

```
npm install dextools-node
```

## Obtaining API Key
To obtain an API key, head to the [Developer Portal](https://developer.dextools.io/) and choose your plan.


## Getting Started
There are 2 versions of the Dextools API. [Dextools API v1](https://api.dextools.io/docs) and [Dextools API v2](https://developer.dextools.io/docs/start)

### Version 1
To get started, import the package, and initiate a `DextoolsAPI` instance object by passing your API key:
```
const { DextoolsAPI } = require('dextools-node');
const dextools = new DextoolsAPI(api_key);
```

You can also pass an optional user agent:
```
const dextools = new DextoolsAPI(api_key, "User-Agent");
```

### Version 2
To get started, import the package, and initiate a `DextoolsAPIV2` instance object by passing your API key and your plan:
```
const { DextoolsAPIV2 } = require('dextools-node');
const dextools = new DextoolsAPIV2(api_key, "trial");
```

You can also pass an optional user agent:
```
const dextools = new DextoolsAPIV2(api_key, "User-Agent", "trial");
```

If you don't specify any plan when instantiating the object, it will default to "partner" plan

#### Available plans - Setting your plan
You can setup your plan when setting the object instance by providing the `plan` argument in the constructor. If no `plan` is specified, it will default to "partner" plan

To set your plan after the object is created, you can use the `setPlan("your_plan")` method
```
dextools.setPlan("standard");
```

Available values: `"free"`, `"trial"`, `"standard"`, `"advanced"`, `"pro"`, and `"partner"`


## Version 1 Queries
Below are a set of queries supported by the [Dextools API v1](https://api.dextools.io/docs). All data is returned as a JavaScript object for easy data handling.

### Get pairs of a token
To get the pairs of a token, pass a `chain id` and a `pair address`:
```
let pair = await dextools.getPair("ether", "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d");
console.log(pair);
```

### Get token details
To get token details, pass a `chain id`, and a `token address`:
```
let token = await dextools.getToken("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
console.log(token);
```

You can also pass the `page` and `pageSize` parameters:
```
let token = await dextools.getToken("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a", 1, 50);
console.log(token);
```

### Get chain list
To get the chain list:
```
let chain_list = await dextools.getChainList();
console.log(chain_list);
```

You can also pass the `page` and `pageSize` parameters:
```
let chain_list = await dextools.getChainList(1, 50);
console.log(chain_list);
```

### Get exchange list
To get the exchange list, pass a `chain id`:
```
let exchange_list = await dextools.getExchangeList("ether");
console.log(exchange_list);
```

You can also pass the `page` and `pageSize` parameters:
```
let exchange_list = await dextools.getExchangeList("ether", 1, 50);
console.log(exchange_list);
```

## Version 2 Queries
Below are a set of queries supported by the [Dextools API v2](https://developer.dextools.io/docs/start). All data is returned as a JavaScript object for easy data handling.

### Blockchain
#### Get blockchain info
```
let blockchain = await dextools.getBlockchain("ether");
console.log(blockchain);
```

#### Get blockchains sorted by default settings
```
let blockchains = await dextools.getBlockchains();
console.log(blockchains);
```

#### Get blockchains sorted by default settings and descending order
```
let blockchains = await dextools.getBlockchains("desc", "name");
console.log(blockchains);
```

### Exchange
#### Get dex factory info
```
let factory = await dextools.getDexFactoryInfo("ether", "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f");
console.log(factory);
```

#### Get dexes on a specific chain
```
let dexes = await dextools.getDexes("ether");
console.log(dexes);
```

#### Get dexes on a specific chain sorted by name and descending order
```
let dexes = await dextools.getDexes("ether", "desc", "name");
console.log(dexes);
```

### Pool
#### Get pool info
```
let pool = await dextools.getPool("ether", "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d");
console.log(pool);
```

#### Get pool liquidity
```
let pool_liquidity = await dextools.getPoolLiquidity("ether", "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d");
console.log(pool_liquidity);
```

#### Get pool score
```
let pool_score = await dextools.getPoolScore("ether", "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d");
console.log(pool_score);
```

#### Get pool price
```
let pool_price = await dextools.getPoolPrice("ether", "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d");
console.log(pool_price);
```

#### Get pool locks
```
let pool_locks = await dextools.getPoolLocks("ether", "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d");
console.log(pool_locks);
```

#### Get pools
```
let pools = await dextools.getPools("ether", from_="2023-11-14T19:00:00", to="2023-11-14T23:00:00");
console.log(pools);
```

#### Get pools sorted by `creationBlock` and descending order and providing block numbers instead
```
let pools = await dextools.getPools("ether", "12755070", "12755071", "desc", "creationBlock");
console.log(pools);
```

### Token
#### Get token
```
let token = await dextools.getToken("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
console.log(token);
```

#### Get token locks
```
let token_locks = await dextools.getTokenLocks("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
console.log(token_locks);
```

#### Get token score
```
let token_score = await dextools.getTokenScore("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
console.log(token_score);
```

#### Get token info
```
let token_info = await dextools.getTokenInfo("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
console.log(token_info);
```

#### Get token price
```
let token_price = await dextools.getTokenPrice("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
console.log(token_price);
```

#### Get token audit
```
let token_audit = await dextools.getTokenAudit("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
console.log(token_audit);
```

#### Get tokens
```
let tokens = await dextools.getTokens("ether", "2023-11-14T19:00:00", "2023-11-14T23:00:00");
console.log(tokens);
```

#### Get tokens sorted by `creationBlock` and descending order and providing block numbers instead in descending order
```
let tokens = await dextools.getTokens("ether", "18570000", "18570500", "desc", "creationBlock");
console.log(tokens);
```

#### Get tokens sorted by `socialsInfoUpdated` and descending order and datetimes in descending order
```
let tokens = await dextools.getTokens("ether", "2023-11-14T19:00:00", "2023-11-14T23:00:00", "desc", "socialsInfoUpdated");
console.log(tokens);
```

#### Get token pools
```
let token_pools = await dextools.getTokenPools("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a", "2023-11-14T19:00:00", "2023-11-14T23:00:00");
console.log(token_pools);
```

#### Get token pools sorted by `creationBlock` and descending order and providing block numbers instead in descending order
```
let token_pools = await dextools.getTokenPools("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a", "18570000", "18570500", "desc", "creationBlock");
console.log(token_pools);
```

### Rankings
#### Get hot pools
```
let hot_pools = await dextools.getRankingHotPools("ether");
console.log(hot_pools);
```

#### Get gainers
```
let gainers = await dextools.getRankingGainers("ether");
console.log(gainers);
```

#### Get losers
```
let losers = await dextools.getRankingLosers("ether");
console.log(losers);
```

## Page and PageSize arguments
Some methods support the `page` and `pageSize` arguments. Check out the API documentation for more information.

## Examples
Check out the `examples` folder for some synchronous and asynchronous example scripts.

## Testing
A set of tests have been included inside `tests` folder. You will need to set an environment variable as `DextoolsAPIKey` using your API key.

## Supported Blockchains
Dextools adds support for new blockchains from time to time. `dextools.getBlockchains()` to get a list of supported blockchains and their IDs

## Authors
* [alb2001](https://github.com/alb2001)


## More information
* [dextools-node on npm](https://www.npmjs.com/package/dextools-node)
* [DEXTools](https://www.dextools.io)
* [Dextools API v1](https://api.dextools.io/docs)
* [Dextools API v2](https://developer.dextools.io/docs/start)
* [Developer Portal](https://developer.dextools.io/)
* [dextools-python](https://github.com/alb2001/dextools-python)