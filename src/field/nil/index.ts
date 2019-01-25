import * as Primitive from '../primitive';

export type TypeKey = 'Nil';
export type Type = null|undefined;

/**
 * Primitive `NilField`
 */
export class Nil extends Primitive.Field<Type, TypeKey> {
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
export default function nil() {
  return new Nil();
}
