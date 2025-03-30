const { DextoolsAPI } = require('dextools-node');

const api_key = 'YOUR_API_KEY';

const main = async () => {
  // Initiate DextoolsAPI instance object by passing your "API Key":
  const dextools = new DextoolsAPI(api_key);

  // Initiate DextoolsAPI instance object by passing your "API Key", and an optional "User Agent":
  const dextoolsWithUserAgent = new DextoolsAPI(api_key, "User-Agent");
  
  // Get pair of a token, pass a "chain slug" and a "pair address":
  let pair = await dextools.getPair("ether", "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d");
  console.log(pair);

  // Get token details, pass a "chain slug", and a "token address":
  let token = await dextools.getToken("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
  console.log(token);

  // Get token details, pass a "chain slug", "token address", and optional "page" and "pageSize" parameters:
  token = await dextools.getToken("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a", 1, 50);
  console.log(token);

  // Get chain list:
  let chain_list = await dextools.getChainList();
  console.log(chain_list);

  // Get chain list, passing optional "page" and "pageSize" parameters:
  chain_list = await dextools.getChainList(1, 50);
  console.log(chain_list);

  let exchange_list = await dextools.getExchangeList("ether");
  console.log(exchange_list);

  // You can also pass the `page` and `pageSize` parameters:
  exchange_list = await dextools.getExchangeList("ether", 1, 50);
  console.log(exchange_list);
}

main();