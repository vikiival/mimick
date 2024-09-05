import 'dotenv/config'
import { ARCHIVE_URL, CONTRACT_ADDRESS, NODE_URL, STARTING_BLOCK } from './constants'

import {
  BlockHeader,
  DataHandlerContext,
  SubstrateBatchProcessor,
  SubstrateBatchProcessorFields,
  Call as _Call,
  Event as _Event,
  Extrinsic as _Extrinsic
} from '@subsquid/substrate-processor'
import { fieldSelection } from './mappings/utils/types'
import { Store } from '@subsquid/typeorm-store'

export const processor = new SubstrateBatchProcessor()
  .setGateway(ARCHIVE_URL)
  .setBlockRange({ from: STARTING_BLOCK })
  .setRpcEndpoint({
    // Set via .env for local runs or via secrets when deploying to Subsquid Cloud
    // https://docs.subsquid.io/deploy-squid/env-variables/
    url: NODE_URL,
    // More RPC connection options at https://docs.subsquid.io/substrate-indexing/setup/general/#set-data-source
    rateLimit: 10
  })
  .addContractsContractEmitted({
    contractAddress: [CONTRACT_ADDRESS],
    extrinsic: true
  })
  .setFields(fieldSelection)

  // .setFields({
  //   block: {
  //       timestamp: true
  //   },
  //   extrinsic: {
  //       hash: true
  //   }
  // })

export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type Process = DataHandlerContext<Store, Fields>