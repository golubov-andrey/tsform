import array, { IArray } from './array';
import bool, { Bool } from './bool';
import hash, { IHash } from './hash';
import int, { Int } from './int';
import str, { Str } from './str';

export type Primitive = Bool|Int|Str;
export type Complex = IHash|IArray;
export type Combine = Primitive|Complex;

export default {
  array,
  bool,
  hash,
  int,
  str,
};
