const axios = require('axios');

class DextoolsAPIV2 {
    constructor(api_key, useragent = "API-Wrapper/1.0", plan = 'partner') {
        this._api_key = api_key;
        this._useragent = useragent;
        this.plan = undefined;

        this.setPlan(plan)
    }

    setPlan(plan) {
        plan = plan.toLowerCase();
        let plans = ["free", "trial", "standard", "advanced", "pro"];
        if (plans.includes(plan)) {
            this.plan = plan;
            this.url = `http://public-api.dextools.io/${plan}/v2`;
        }
        else if (plan === 'partner') {
            this.plan = plan;
            this.url = `https://api.dextools.io/v2`;
        }
        else {
            throw new Error('Plan not found');
        }

        this._headers = {
            'X-API-Key': this._api_key,
            'accept': 'application/json',
            'User-Agent': this._useragent
        };
    }

    async getBlockchain(chain) {
        let endpoint = '/blockchain/';
        let response = await axios({
            method: 'GET',
            url: endpoint + chain,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data;
    }

    async getBlockchains(order = "asc", sort = "name", page = undefined, pageSize = undefined) {
        let endpoint = '/blockchain';
        let response = await axios({
            method: 'GET',
            url: endpoint,
            baseURL: this.url,
            params: { order: order, sort: sort, page: page, pageSize: pageSize },
            headers: this._headers
        });
        return response.data;
    }

    async getDexFactoryInfo(chain, address) {
        let endpoint = '/dex/';
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/${address}`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getDexes(chain, order = "asc", sort = "name", page = null, pageSize = null) {
        let endpoint = '/dex/'
        let response = await axios({
            method: 'GET',
            url: endpoint + chain,
            baseURL: this.url,
            params: { order: order, sort: sort, page: page, pageSize: pageSize },
            headers: this._headers
        });
        return response.data
    }

    async getPool(chain, address) {
        let endpoint = '/pool/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/${address}`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getPoolLiquidity(chain, address) {
        let endpoint = '/pool/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/${address}/liquidity`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getPoolScore(chain, address) {
        let endpoint = '/pool/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/${address}/score`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getPoolPrice(chain, address) {
        let endpoint = '/pool/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/${address}/price`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getPoolLocks(chain, address) {
        let endpoint = '/pool/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/${address}/locks`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getPools(chain, from_, to, order = "asc", sort = "creationTime", page = undefined, pageSize = undefined) {
        let endpoint = '/pool/'
        let response = await axios({
            method: 'GET',
            url: endpoint + chain,
            baseURL: this.url,
            params: { order: order, sort: sort, from: from_, to: to, page: page, pageSize: pageSize },
            headers: this._headers
        });
        return response.data
    }

    async getToken(chain, address) {
        let endpoint = '/token/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/${address}`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getTokenLocks(chain, address) {
        let endpoint = '/token/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/${address}/locks`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getTokenScore(chain, address) {
        let endpoint = '/token/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/${address}/score`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getTokenInfo(chain, address) {
        let endpoint = '/token/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/${address}/info`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getTokenPrice(chain, address) {
        let endpoint = '/token/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/${address}/price`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getTokenAudit(chain, address) {
        let endpoint = '/token/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/${address}/audit`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getTokens(chain, from_, to, order = "asc", sort = "socialsInfoUpdated", page = undefined, pageSize = undefined) {
        let endpoint = '/token/'
        let response = await axios({
            method: 'GET',
            url: endpoint + chain,
            baseURL: this.url,
            params: { order: order, sort: sort, from: from_, to: to, page: page, pageSize: pageSize },
            headers: this._headers
        });
        return response.data
    }

    async getTokenPools(chain, address, from_, to, order = "asc", sort = "creationTime", page = undefined, pageSize = undefined) {
        let endpoint = '/token/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/${address}/pools`,
            baseURL: this.url,
            params: { order: order, sort: sort, from: from_, to: to, page: page, pageSize: pageSize },
            headers: this._headers
        });
        return response.data
    }

    async getRankingHotPools(chain) {
        let endpoint = '/ranking/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/hotpools`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getRankingGainers(chain) {
        let endpoint = '/ranking/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/gainers`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }

    async getRankingLosers(chain) {
        let endpoint = '/ranking/'
        let response = await axios({
            method: 'GET',
            url: `${endpoint}${chain}/losers`,
            baseURL: this.url,
            headers: this._headers
        });
        return response.data
    }
}

module.exports = DextoolsAPIV2;