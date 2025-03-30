const DextoolsAPI = require('../dextools_node/dextools_v1');

let dextools;

beforeAll(() => {
  dextools = new DextoolsAPI(process.env.DextoolsAPIKey);
});

test('Test getPair', async () => {
  let chain = "ether";
  let pair = "0x9d378c90057bb8f5b7f1a39e55091bb078cd5974";
  let response = await dextools.getPair(chain, pair);
  expect(response).toBeInstanceOf(Object);
  expect(response.statusCode).toBe(200);
  expect(response.data.chain).toBe(chain);
  expect(response.data.address).toBe(pair);
});

test('Test getToken', async () => {
  let chain = "ether";
  let token = "0x97a627177634d839968ca935a79bed1e2c9c06f9";
  let response = await dextools.getToken(chain, token);
  expect(response).toBeInstanceOf(Object);
  expect(response.statusCode).toBe(200);
  expect(response.data.chain).toBe(chain);
  expect(response.data.address).toBe(token);
});

test('Test getChainList', async () => {
  let response = await dextools.getChainList();
  expect(response).toBeInstanceOf(Object);
  expect(response.statusCode).toBe(200);
  expect(response.data).toBeInstanceOf(Array)
});

test('Test getExchangeList', async () => {
  let chain = "ether";
  let response = await dextools.getExchangeList(chain);
  expect(response).toBeInstanceOf(Object);
  expect(response.statusCode).toBe(200);
  expect(response.data).toBeInstanceOf(Array)
});