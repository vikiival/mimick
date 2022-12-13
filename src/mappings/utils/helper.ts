import * as ss58 from '@subsquid/ss58';
import { decodeHex } from '@subsquid/substrate-processor';
import { NftId, SomethingWithOptionalMeta } from './types';

export function isEmpty(obj: Record<string, unknown>): boolean {
  // eslint-disable-next-line guard-for-in, @typescript-eslint/naming-convention
  for (const _ in obj) { return false; }
  return true;
}

export function addressOf(address: Uint8Array | string): string {
  const value = typeof address === 'string' ? decodeHex(address) : address;
  if (!value) {
    return '';
  }
  return ss58.codec(42).encode(value);
}

export function possibleAddress(address?: Uint8Array | string | null): string {
  return address ? addressOf(address) : ''
}

export function asNftId([collection, nft]: [number, number]): NftId {
  return `${collection}-${nft}`;
}

export function camelCase(str: string): string {
	return str.replace(/([_][a-z])/gi, ($1) => {
		return $1.toUpperCase().replace('_', '')
	})
}

export function metadataOf({ metadata }: SomethingWithOptionalMeta): string {
  return metadata ?? '';
}

export function oneOf<T>(one: T, two: T): T {
  return one || two;
}

export function toPercent(value: number): number {
  return value / 100;
}
