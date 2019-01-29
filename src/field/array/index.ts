import { Extract, from, withType } from '../helpers';
import { Combine } from '../index';

export interface IArray extends  ReturnType<typeof array> { }
export type Options<T> = Partial<{ store: Array<Extract<T>>, min: number, max: number }>;
/**
 * Return `Arr` field
 * @param value array combine of `Arr` field
 */
export default function array<T extends Combine>(value: T, options?: Options<T>) {
  return withType('Array', {
    options: options ?
      { store: from(value, options.store || []), min: options.min || 0, max: options.max || Infinity } :
      { store: from(value, []), min: 0, max: Infinity }
    ,
    value,
  });
}
