import * as Primitive from '~/field/primitive';

export type TypeKey = 'Text';
export type Type = string;

/**
 * Primitive `TextField`
 */
export class Field extends Primitive.Field<Type, TypeKey> {
  /**
   * TypeKey of `TextField`
   */
  public static Type: TypeKey = 'Text';
  /**
   * Default value of `TextField`
   */
  public static DefaultValue: Type = '';
  /**
   * TypeKey of `TextField`
   */
  public readonly type: TypeKey = 'Text';
  /**
   * Returned primitive `TextField`
   * @param value `imutable` value of `TextField` (`default: ''`)
   */
  public constructor(
    readonly value: Type = Field.DefaultValue,
  ) { super(); }
}

/**
 * Returns an instance of the class `TextField` with the values specified
 * @param x string (`default: ''`) `imutable` value of `TextField`
 */
export default function(x?: Type) {
  return new Field(x);
}
