import * as Bool from './boolean';
import * as Datetime from './datetime';
import * as Float from './float';
import * as Hash from './hash';
import * as Int from './int';
import * as Nil from './nil';
import * as Str from './str';
import * as Text from './text';

export type Primitive = Bool.Field|Datetime.Field|Float.Field|Int.Field|Nil.Field|Str.Field|Text.Field;
export type Nontrivial<T> = Primitive|Hash.Type<T>;

export default {
  bool: Bool.default,
  datetime: Datetime.default,
  float: Float.default,
  int: Int.default,
  nil: Nil.default,
  str: Str.default,
  text: Text.default,
};
