const { DextoolsAPIV2 } = require('dextools-node');

const api_key = 'YOUR_API_KEY';

const main = async () => {
  const dextools = new DextoolsAPIV2(api_key);

  // Setting your plan after creating the object
  dextools.setPlan("partner");

  // Blockchain
  // Get blockchain info
  let blockchain = await dextools.getBlockchain("ether");
  console.log(blockchain);

  // Get blockchains sorted by default settings
  let blockchains = await dextools.getBlockchains();
  console.log(blockchains);

  // Get blockchains sorted by default settings and descending order
  blockchains = await dextools.getBlockchains("desc", "name");
  console.log(blockchains);

  // Exchange
  // Get dex factory info
  let factory = await dextools.getDexFactoryInfo("ether", "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f");
  console.log(factory);

  // Get dexes on a specific chain
  let dexes = await dextools.getDexes("ether");
  console.log(dexes);

  // Get dexes on a specific chain sorted by name and descending order
  dexes = await dextools.getDexes("ether", "desc", "name");
  console.log(dexes);

  // Pool
  // Get pool info
  let pool = await dextools.getPool("ether", "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d");
  console.log(pool);

  // Get pool liquidity
  let pool_liquidity = await dextools.getPoolLiquidity("ether", "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d");
  console.log(pool_liquidity);
  
  // Get pool score
  let pool_score = await dextools.getPoolScore("ether", "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d");
  console.log(pool_score);
  
  // Get pool price
  let pool_price = await dextools.getPoolPrice("ether", "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d");
  console.log(pool_price);
  
  // Get pool locks
  let pool_locks = await dextools.getPoolLocks("ether", "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d");
  console.log(pool_locks);

  // Get pools
  let pools = await dextools.getPools("ether", from_="2023-11-14T19:00:00", to="2023-11-14T23:00:00");
  console.log(pools);
  
  // Get pools sorted by `creationBlock` and descending order and providing block numbers instead
  pools = await dextools.getPools("ether", "12755070", "12755071", "desc", "creationBlock");
  console.log(pools);

  // Token
  // Get token
  let token = await dextools.getToken("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
  console.log(token);

  // Get token locks
  let token_locks = await dextools.getTokenLocks("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
  console.log(token_locks);

  // Get token score
  let token_score = await dextools.getTokenScore("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
  console.log(token_score);

  // Get token info
  let token_info = await dextools.getTokenInfo("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
  console.log(token_info);

  // Get token price
  let token_price = await dextools.getTokenPrice("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
  console.log(token_price);

  // Get token audit
  let token_audit = await dextools.getTokenAudit("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a");
  console.log(token_audit);

  // Get tokens
  let tokens = await dextools.getTokens("ether", "2023-11-14T19:00:00", "2023-11-14T23:00:00");
  console.log(tokens);

  // Get tokens sorted by `creationBlock` and descending order and providing block numbers instead in descending order
  tokens = await dextools.getTokens("ether", "18570000", "18570500", "desc", "creationBlock");
  console.log(tokens);

  // Get tokens sorted by `socialsInfoUpdated` and descending order and datetimes in descending order
  tokens = await dextools.getTokens("ether", "2023-11-14T19:00:00", "2023-11-14T23:00:00", "desc", "socialsInfoUpdated");
  console.log(tokens);

  // Get token pools
  let token_pools = await dextools.getTokenPools("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a", "2023-11-14T19:00:00", "2023-11-14T23:00:00");
  console.log(token_pools);

  // Get token pools sorted by `creationBlock` and descending order and providing block numbers instead in descending order
  token_pools = await dextools.getTokenPools("ether", "0xfb7b4564402e5500db5bb6d63ae671302777c75a", "18570000", "18570500", "desc", "creationBlock");
  console.log(token_pools);

  // Rankings
  // Get hot pools
  let hot_pools = await dextools.getRankingHotPools("ether");
  console.log(hot_pools);

  // Get gainers
  let gainers = await dextools.getRankingGainers("ether");
  console.log(gainers);

  // Get losers
  let losers = await dextools.getRankingLosers("ether");
  console.log(losers);

}

main();