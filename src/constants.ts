import { lookupArchive } from '@subsquid/archive-registry'

export const archive = lookupArchive('shibuya', { release: 'FireSquid' })
export const STARTING_BLOCK = 2_790_000 // 6000 or 1790000 for Prod
export const CONTRACT_ADDRESS =
  '0xce18fa994c9c20b8892ba6dd8c19b108df272f6ac196944b95e664560f94a554'
