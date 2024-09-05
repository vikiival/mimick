import { create } from '@kodadot1/metasquid/entity'
import md5 from 'md5'
import { CollectionEntity as CE, CollectionType, Interaction } from '../../model'
import { CHAIN, CONTRACT_ADDRESS } from '../../constants'



export function toMap(
  name: string,
  symbol: string,
  max: number,
  issuer: string,
  meta: string,
  type: CollectionType = CollectionType.ERC721,
): Partial<CE> {
  return {
    name,
    symbol,
    max,
    type,
    metadata: meta || undefined,
    currentOwner: issuer,
    issuer,
    updatedAt: new Date(),
    createdAt: new Date(),
    distribution: 0,
    floor: BigInt(0),
    highestSale: BigInt(0),
    nftCount: 0,
    ownerCount: 0,
    supply: 0,
    volume: BigInt(0),
    version: 721,
  };
}


const OPERATION = 'CREATE' //Interaction.CREATE
const BASE_URI = `https://dyndata.deno.dev/${CHAIN}/content/`

export const ContractsMap: Record<string, any> = {
  [CONTRACT_ADDRESS]: toMap(
    "Vortices",
    "VTX",
    128,
    "5FFG7GHAR2F2xCb5bqaLQrdgNGdtEL64tYgZimRBHDjuxVuA",
    "ipfs://bafkreicthpidyo3gznp3uuezvweiur7xcbo5qcwgw3x4teui2psoqxxbgq",
  ),
}

export const contractList: string[] = Object.keys(ContractsMap);

export function forceCollectionCreate(collection: string): CE | undefined {
  const cache =  ContractsMap[collection];
  const baseUri = BASE_URI + collection + '/'

  if (cache) {
    return create(CE, collection, {...cache, hash: md5(collection), baseUri })
  }

  return undefined
}