import * as Primitive from '~/field/primitive';

export type TypeKey = 'Int';
export type Type = number;

/**
 * Primitve `IntField`
 */
export class Field extends Primitive.Field<Type, TypeKey> {
  /**
   * TypeKey of `IntField`
   */
  public static Type: TypeKey = 'Int';
  /**
   * Default value of `IntField`
   */
  public static DefaultValue: Type = 0;
  /**
   * TypeKey of `IntField`
   */
  public readonly type: TypeKey = 'Int';
  /**
   * Returned primitive `IntField`
   * @param value `imutable` value of `IntField` (`default: 0`)
   */
  public constructor(
    readonly value: Type = Field.DefaultValue,
  ) { super(); }
}

/**
 * Returns the `IntField` with the value specified in the function argument
 * @param x `imutable` value of `IntField` (`default: 0`)
 */
export default function(x?: Type) {
  return new Field(x);
}
