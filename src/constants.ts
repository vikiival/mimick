import { lookupArchive } from '@subsquid/archive-registry'

export const archive = lookupArchive('shibuya', { release: 'FireSquid' })
export const STARTING_BLOCK = 2_790_000 // 6000 or 1790000 for Prod
export const CONTRACT_ADDRESS =
  '0xce18fa994c9c20b8892ba6dd8c19b108df272f6ac196944b95e664560f94a554'
export const MARKETPLACE_ADDRESS = '0x0000000000000000000000000000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x0000000000000000000000000000000000000000000000000000000000000000'
export const RMRK_CONTRACT_ADDRESS = '0xeaf190cfd509538fef398f13586e105293c70fbc18641943a2457c66274f2d3e'