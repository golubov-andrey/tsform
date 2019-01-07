import * as Primitive from '~/field/primitive';

export type TypeKey = 'Int';
export type TypeValue = number;

/**
 * Primitve `IntField`
 */
export class Field extends Primitive.Field<TypeValue, TypeKey> {
  /**
   * TypeKey of `IntField`
   */
  public static Type: TypeKey = 'Int';
  /**
   * Default value of `IntField`
   */
  public static DefaultValue: TypeValue = 0;
  /**
   * TypeKey of `IntField`
   */
  public readonly type: TypeKey = 'Int';
  /**
   * Primitive `IntField`
   * @param value `imutable` value of `IntField`
   */
  public constructor(
    readonly value: TypeValue = Field.DefaultValue,
  ) { super(); }
}

/**
 * Returns the `IntField` with the value specified in the function argument
 * @param x `imutable` value of `IntField`
 */
export default function(x?: TypeValue) { return new Field(x); }
