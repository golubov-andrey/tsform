//import array, { Arr } from './array';
import bool, { Bool } from './boolean';
import datetime, { Datetime } from './datetime';
import float, { Float } from './float';
import hash, { Hash } from './hash';
import int, { Int } from './int';
import nil, { Nil } from './nil';
import str, { Str } from './str';
import text, { Text } from './text';

export type Primitive = Bool|Datetime|Float|Int|Nil|Str|Text;
export type Complex<T> = Hash<T>//|Arr<T>;
export type Combine<T = any> = Primitive|Complex<T>;

export abstract class Field<V, T> {
  public abstract type: T;
  public abstract value: V;
  public abstract instance: new(value: V) => Field<V, T>;

  public extract(): V { return this.value; }
  public from(primitive: V): Field<V, T> {
    return new this.instance(primitive);
  }
}


export default {
  //array,
  bool,
  datetime,
  float,
  hash,
  int,
  nil,
  str,
  text,
};
