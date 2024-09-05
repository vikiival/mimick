export type Chain = 'shibuya' | 'astar'

// https://v2.archive.subsquid.io/network/astar-substrate
// https://v2.archive.subsquid.io/network/aleph-zero-testnet
// https://v2.archive.subsquid.io/network/aleph-zero
// https://v2.archive.subsquid.io/network/shibuya-substrate
export const CHAIN = process.env.CHAIN || 'aleph-zero-testnet'

export const ARCHIVE_URL = `https://v2.archive.subsquid.io/network/${CHAIN}`
export const NODE_URL = 'wss://ws.test.azero.dev'
export const STARTING_BLOCK = 72_000_288 //2_790_000 // 6000 or 1790000 for Prod
export const CONTRACT_ADDRESS = //'5CJsqTAQ3zUYwp2gRpXogaz4YBa2d8gWUUVyu5b6hDFsB1zE'
  '0x0acf072d532793df61671740b9be57621ab743edf43eb0f7f62b820e3e8c07e1'


console.table({
  CHAIN,
  ARCHIVE_URL,
  NODE_URL,
  STARTING_BLOCK,
  CONTRACT: CONTRACT_ADDRESS
  // disabledRPC,
  // environment: isProd ? 'production' : 'development',
})