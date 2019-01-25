import * as Primitive from '../primitive';

export type TypeKey = 'Bool';
export type Type = boolean;

/**
 * Primitve `BoolField`
 */
export class Bool extends Primitive.Field<Type, TypeKey> {
  /**
   * TypeKey of `BoolField`
   */
  public static Type: TypeKey = 'Bool';
  /**
   * Default value of `BoolField`
   */
  public static DefaultValue: Type = false;
  /**
   * TypeKey of `BoolField`
   */
  public readonly type: TypeKey = 'Bool';
  /**
   * Returned primitive `BoolField`
   * @param value `imutable` value of `BoolField` (`default: false`)
   */
  public constructor(
    readonly value: Type = Bool.DefaultValue,
  ) { super(); }
}

/**
 * Returns the `BoolField` with the value specified in the function argument
 * @param x `imutable` value of `BoolField` (`default: false`)
 */
export default function bool(x?: Type) {
  return new Bool(x);
}
