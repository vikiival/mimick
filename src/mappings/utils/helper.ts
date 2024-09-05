import * as ss58 from '@subsquid/ss58'
import { decodeHex } from '@subsquid/substrate-processor'
import { ArchiveCallWithOptionalValue, Optional } from '@kodadot1/metasquid/types'

const codec = 1

/**
 * Check if an object is empty
 * @param obj - the object to check
**/
export function isEmpty(obj: Record<string, unknown>): boolean {
  // eslint-disable-next-line guard-for-in, @typescript-eslint/naming-convention, no-unreachable-loop
  for (const _ in obj) {
    return false
  }
  return true
}

/**
 * Export the value from the archive object { __kind, value }
 * @param call - the call to extract the value from
**/
export function onlyValue(call: ArchiveCallWithOptionalValue): string {
  return call?.value
}

/**
 * Check if a value is a hex string
 * @param value - the value to check
**/
export function isHex(value: unknown): value is string {
  return typeof value === 'string' && value.length % 2 === 0 && /^0x[\da-f]*$/i.test(value)
}

/**
 * Decode an ss58 address from the value
 * @param address - the address to decode
**/
export function addressOf(address: Uint8Array | string | undefined): string {
  if (!address) {
    return ''
  }

  const value = isHex(address) ? decodeHex(address) : address
  if (!value) {
    return ''
  }
  return ss58.codec(codec).encode(value)
}

export function isAddress(value: Optional<string>): value is string {
  if (!value) {
    return false
  }

  try {
    ss58.decode(value)
    return true
  } catch {
    return false
  }
}

/**
 * Decode a hex value
 * @param value - the value to decode
**/
export function unHex<T>(value: T): T | string {
  return isHex(value) ? decodeHex(value).toString() : value
}

/**
 * create a token uri from the base uri and the token id
 * @param baseUri - base uri from the collection
 * @param tokenId - the token id
**/
export function tokenUri(baseUri: Optional<string>, tokenId: Optional<string>): string {
  if (!baseUri || !tokenId) {
    return ''
  }
  
  const uri = baseUri.endsWith('/') ? baseUri : `${baseUri}/`
  return `${uri}${tokenId}`
}


export function tokenName(baseName: Optional<string>, tokenId: Optional<string>): string {
  if (!baseName || !tokenId) {
    return ''
  }
  return `${baseName} #${tokenId}`
}

export function toPercent(value: number): number {
  return value / 100
}
