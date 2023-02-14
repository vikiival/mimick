import { create } from '@kodadot1/metasquid/entity'
import { logger } from '@kodadot1/metasquid/logger'
import { CollectionEntity } from '../../model'
import { Context, MetaEvent } from '../utils/types'

export async function handleCollectionCreate(context: Context, events: MetaEvent<CollectionEntity>[]): Promise<void> {
  const collections: CollectionEntity[] = [] 
  for (const e of events) {
    const collection = create(CollectionEntity, e.id, e.state)
    collections.push(collection)
  }

  await context.store.save(collections)
  logger.info(`[Collection]: ${events.length} collections created`)
}