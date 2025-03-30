const DextoolsAPIV2 = require('../dextools_node/dextools_v2');

let dextools;

beforeAll(() => {
    dextools = new DextoolsAPIV2(process.env.DextoolsAPIKey);
});

describe('Blockchains Tests', () => {
    test('Test getBlockchain', async () => {
        let chain = "ether";
        let response = await dextools.getBlockchain(chain);
        
        expect(response).toBeInstanceOf(Object);
        expect(response.statusCode).toBe(200);
        expect(response.data.id).toBe(chain);
    });
    
    test('Test getBlockchains', async () => {
        let response = await dextools.getBlockchains();
        
        expect(response).toBeInstanceOf(Object);
        expect(response.statusCode).toBe(200);
        expect(response.data.results).toBeInstanceOf(Array);
    });
});

describe('Dexes Tests', () => {
    test('Test getDexFactoryInfo', async () => {
        let chain = "ether";
        let factory = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
        let response = await dextools.getDexFactoryInfo(chain, factory);
        
        expect(response.statusCode).toBe(200);
        expect(response.data.factory).toBe(factory.toLowerCase());
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
        
        
    });
    
    test('Test getDexes', async () => {
        let chain = "ether";
        let response = await dextools.getDexes(chain);
        
        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
        expect(response.data.results).toBeInstanceOf(Array);
    });
});

describe('Pools Tests', () => {
    test('Test getPool', async () => {
        let chain = "ether";
        let pool = "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d";
        let name = "DEXTools";
        let symbol = "DEXT";
        let address = "0xfb7b4564402e5500db5bb6d63ae671302777c75a";
        let response = await dextools.getPool(chain, pool);
        
        expect(response.statusCode).toBe(200);
        expect(response.data.mainToken.name).toBe(name);
        expect(response.data.mainToken.symbol).toBe(symbol);
        expect(response.data.mainToken.address).toBe(address.toLowerCase());
        expect(response).toBeInstanceOf(Object);
    });
    
    test('Test getPoolLiquidity', async () => {
        let chain = "ether";
        let pool = "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d";
        let response = await dextools.getPoolLiquidity(chain, pool);
        
        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
        expect(response.data.reserves).toBeInstanceOf(Object);
    });

    test('Test getPoolScore', async () => {
        let chain = "ether";
        let pool = "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d";
        let response = await dextools.getPoolScore(chain, pool);
        
        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
        expect(response.data.votes).toBeInstanceOf(Object);
        expect(response.data.dextScore).toBeInstanceOf(Object);
    });

    test('Test getPoolLocks', async () => {
        let chain = "ether";
        let pool = "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d";
        let response = await dextools.getPoolLocks(chain, pool);
        
        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
    });

    test('Test getPoolPrice', async () => {
        let chain = "ether";
        let pool = "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d";
        let response = await dextools.getPoolPrice(chain, pool);
        
        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
    });

    test('Test getPools sorted by creationTime', async () => {
        let chain = "ether";
        let from_ = "2023-11-14T19:00:00";
        let to = "2023-11-14T23:00:00";
        let response = await dextools.getPools(chain, from_, to);
        
        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
        expect(response.data.results).toBeInstanceOf(Array);
    });

    /* test('Test getPools sorted by creationBlock', async () => { // fails due to creationBlock filter being removed
        let chain = "ether";
        let order = "asc";
        let from_ = "12755070";
        let to = "12755071";
        let sort = "creationBlock";
        let name = "DEXTools";
        let symbol = "DEXT";
        let address = "0xfb7b4564402e5500db5bb6d63ae671302777c75a";
        let response = await dextools.getPools(chain, from_, to, order, sort);
        
        expect(response.statusCode).toBe(200);
        expect(response.data.results[0].creationBlock).toBe(Number(from_));
        expect(response.data.results[0].mainToken.address).toBe(address);
        expect(response.data.results[0].mainToken.name).toBe(name);
        expect(response.data.results[0].mainToken.symbol).toBe(symbol);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
        expect(response.data.results).toBeInstanceOf(Array);
    }); */
});

describe('Token Tests', () => {
    test('Test getToken', async () => {
        let chain = "ether";
        let token = "0xfb7b4564402e5500db5bb6d63ae671302777c75a";
        let name = "DEXTools";
        let symbol = "DEXT";
        response = await dextools.getToken(chain, token);

        expect(response.statusCode).toBe(200);
        expect(response.data.address).toBe(token.toLowerCase());
        expect(response.data.name).toBe(name);
        expect(response.data.symbol).toBe(symbol);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
    });

    test('Test getTokenLocks', async () => {
        let chain = "ether";
        let token = "0xfb7b4564402e5500db5bb6d63ae671302777c75a";
        response = await dextools.getTokenLocks(chain, token);

        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
    });

    test('Test getTokenScore', async () => {
        let chain = "ether";
        let token = "0xfb7b4564402e5500db5bb6d63ae671302777c75a";
        response = await dextools.getTokenScore(chain, token);

        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
        expect(response.data.dextScore).toBeInstanceOf(Object);
    });

    test('Test getTokenInfo', async () => {
        let chain = "ether";
        let token = "0xfb7b4564402e5500db5bb6d63ae671302777c75a";
        response = await dextools.getTokenInfo(chain, token);

        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
    });

    test('Test getTokenPrice', async () => {
        let chain = "ether";
        let token = "0xfb7b4564402e5500db5bb6d63ae671302777c75a";
        response = await dextools.getTokenPrice(chain, token);

        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
    });

    test('Test getTokenAudit', async () => {
        let chain = "ether";
        let token = "0xfb7b4564402e5500db5bb6d63ae671302777c75a";
        response = await dextools.getTokenAudit(chain, token);

        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
    });

    test('Test getTokens', async () => {
        let chain = "ether";
        let from_ = "2023-11-14T19:00:00";
        let to = "2023-11-14T23:00:00";
        response = await dextools.getTokens(chain, from_, to);

        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
        expect(response.data.tokens).toBeInstanceOf(Array);
    });

    test('Test getTokens sorted by creationBlock', async () => {
        let chain = "ether";
        let from_ = "18570000";
        let to = "18570500";
        let order = "asc";
        let sort = "creationBlock";
        response = await dextools.getTokens(chain, from_, to, order, sort);

        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
        expect(response.data.tokens).toBeInstanceOf(Array);
    });

    test('Test getTokens sorted by socialsInfoUpdated', async () => {
        let chain = "ether";
        let from_ = "2023-11-14T19:00:00";
        let to = "2023-11-14T23:00:00";
        let order = "asc";
        let sort = "socialsInfoUpdated";
        response = await dextools.getTokens(chain, from_, to, order, sort);

        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
        expect(response.data.tokens).toBeInstanceOf(Array);
    });

    test('Test getToken pools', async () => {
        let chain = "ether";
        let token = "0xfb7b4564402e5500db5bb6d63ae671302777c75a";
        let from_ = "2023-11-14T19:00:00";
        let to = "2023-11-14T23:00:00";
        let response = await dextools.getTokenPools(chain, token, from_, to);

        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
        expect(response.data.results).toBeInstanceOf(Array);
    });

    test('Test getToken pools sorted by creationBlock', async () => {
        let chain = "ether";
        let token = "0xfb7b4564402e5500db5bb6d63ae671302777c75a";
        let from_ = "18570000";
        let to = "18570500";
        let order = "asc";
        let sort = "creationBlock";
        response = await dextools.getTokenPools(chain, token, from_, to, order, sort);

        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Object);
        expect(response.data.results).toBeInstanceOf(Array);
    });
});

describe('Test Ranking', () => {
    test('Test getRankingHotPools', async () => {
        let chain = "ether";
        response = await dextools.getRankingHotPools(chain);

        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Array);
    });

    test('Test getRankingGainers', async () => {
        let chain = "ether";
        response = await dextools.getRankingGainers(chain);

        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Array);
    });

    test('Test getRankingLosers', async () => {
        let chain = "ether";
        response = await dextools.getRankingLosers(chain);

        expect(response.statusCode).toBe(200);
        expect(response).toBeInstanceOf(Object);
        expect(response.data).toBeInstanceOf(Array);
    });
});

describe('Test Plans', () => {
    test('Test Plans', async () => {
        let plans = ["free", "standard", "advanced", "pro"];
        for (let plan of plans) {
            dextools.setPlan(plan);
            expect(dextools.url).toBe(`http://public-api.dextools.io/${plan}/v2`);
            expect(dextools._headers['X-API-Key']).toBe(process.env.DextoolsAPIKey);

        }

        dextools.setPlan('partner');
        expect(dextools.url).toBe(`https://api.dextools.io/v2`);
        expect(dextools._headers['X-API-Key']).toBe(process.env.DextoolsAPIKey);

        expect(() => dextools.setPlan('Invalid plan')).toThrow('Plan not found');

    });
});