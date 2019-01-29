import { withType } from '../helpers';
import { Combine } from '../index';
export interface IHash extends ReturnType<typeof hash> { }
/**
 * Returned `Hash` field
 * @param value record primitives of `Hash` field
 */
export default function hash<T extends Record<string, Combine>>(value: T) {
  return withType('Hash', { value });
}
