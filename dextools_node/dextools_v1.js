const axios = require('axios');

class DextoolsAPI {
    constructor(api_key, useragent = "API-Wrapper/1.0") {
        this.url = 'https://api.dextools.io/v1';
        this._api_key = api_key;
        this._useragent = useragent;
        this._headers = {
            'X-API-Key': this._api_key,
            'accept': 'application/json',
            'User-Agent': this._useragent
        };
    }

    async getPair(chain, address) {
        let endpoint = '/pair';
        let response = await axios({
            method: 'GET',
            url: endpoint,
            baseURL: this.url,
            params: { chain: chain, address: address },
            headers: this._headers
        });
        return response.data;
    }

    async getToken(chain, address, page = undefined, pageSize = undefined) {
        let endpoint = '/token';
        let response = await axios({
            method: 'GET',
            url: endpoint,
            baseURL: this.url,
            params: { chain: chain, address: address, page: page, pageSize: pageSize },
            headers: this._headers
        });
        return response.data;
    }

    async getChainList(page = undefined, pageSize = undefined) {
        let endpoint = '/chain/list';
        let response = await axios({
            method: 'GET',
            url: endpoint,
            baseURL: this.url,
            params: { page: page, pageSize: pageSize },
            headers: this._headers
        });
        return response.data;
    }

    async getExchangeList(chain, page = undefined, pageSize = undefined) {
        let endpoint = '/exchange/list';
        let response = await axios({
            method: 'GET',
            url: endpoint,
            baseURL: this.url,
            params: { chain: chain, page: page, pageSize: pageSize },
            headers: this._headers
        });
        return response.data
    }
}

module.exports = DextoolsAPI;