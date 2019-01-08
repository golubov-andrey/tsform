import * as Primitive from '~/field/primitive';

export type TypeKey = 'Datetime';
export type Type = Date;

/**
 * Primitve `DatetimeField`
 */
export class Field extends Primitive.Field<Type, TypeKey> {
  /**
   * TypeKey of `DatetimeField`
   */
  public static Type: TypeKey = 'Datetime';
  /**
   * Returned default value of `DatetimeField`
   */
  public static DefaultValue(): Type { return new Date(); }
  /**
   * TypeKey of `DatetimeField`
   */
  public readonly type: TypeKey = 'Datetime';
  /**
   * Returned primitive `DatetimeField`
   * @param value `imutable` value of `DatetimeField` (`default: 'new Date()'`)
   */
  public constructor(
    readonly value: Type = Field.DefaultValue(),
  ) { super(); }
}

/**
 * Returns the `DatetimeField` with the value specified in the function argument
 * @param x `imutable` value of `DatetimeField`
 */
export default function(x?: Type) {
  return new Field(x);
}
