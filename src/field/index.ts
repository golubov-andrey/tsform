import bool, { Bool } from './boolean';
import datetime, { Datetime } from './datetime';
import float, { Float } from './float';
import hash from './hash';
import int, { Int } from './int';
import nil, { Nil } from './nil';
import str, { Str } from './str';
import text, { Text } from './text';

export type Primitive = Bool|Datetime|Float|Int|Nil|Str|Text;

export default {
  bool,
  datetime,
  float,
  hash,
  int,
  nil,
  str,
  text,
};
