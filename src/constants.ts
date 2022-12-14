import { lookupArchive } from '@subsquid/archive-registry'

export const archive = lookupArchive('shibuya', { release: 'FireSquid' })
export const STARTING_BLOCK = 2_790_000 // 6000 or 1790000 for Prod