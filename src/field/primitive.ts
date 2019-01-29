/**
 * API primitive field
 */
export default abstract class PrimitiveField<Value = number|string|boolean|Date|null, Type = string> {
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
