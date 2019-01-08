import * as Primitive from '~/field/primitive';

export type TypeKey = 'Nil';
export type Type = null|undefined;

/**
 * Primitive `NilField`
 */
export class Field extends Primitive.Field<Type, TypeKey> {
  /**
   * TypeKey of `NilField`
   */
  public static Type: TypeKey = 'Nil';
  /**
   * Default value of `NilField`
   */
  public static DefaultValue: Type = null;
  /**
   * TypeKey of `NilField`
   */
  public readonly type: TypeKey = 'Nil';
  /**
   * Value of `NilField`
   */
  public readonly value: Type = null;
}

/**
 * Returns an instance of the class `NilField`
 */
export default function() {
  return new Field();
}
