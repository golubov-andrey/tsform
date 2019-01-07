/**
 * API primitive field
 */
export abstract class Field<Value, Type> {
  /**
   * TypeKey of `PrimitiveField`
   */
  public abstract readonly type: Type;
  /**
   * Value of `PrimitiveField`
   */
  public abstract readonly value: Value;
  /**
   * Returned value of `PrimitiveField`
   */
  public toPrimitive() { return this.value; }
}
