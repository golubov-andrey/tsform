import * as Primitive from '~/field/primitive';

export type TypeKey = 'Str';
export type Type = string;

/**
 * Primitive `StrField`
 */
export class Field extends Primitive.Field<Type, TypeKey> {
  /**
   * TypeKey of `StrField`
   */
  public static Type: TypeKey = 'Str';
  /**
   * Default value of `StrField`
   */
  public static DefaultValue: Type = '';
  /**
   * TypeKey of `StrField`
   */
  public readonly type: TypeKey = 'Str';
  /**
   * Returned primitive `StrField`
   * @param value `imutable` value of `StrField` (`default: ''`)
   */
  public constructor(
    readonly value: Type = Field.DefaultValue,
  ) { super(); }
}

/**
 * Returns an instance of the class `StrField` with the values specified
 * @param x string (`default: ''`) `imutable` value of `StrField`
 */
export default function(x?: Type) {
  return new Field(x);
}
