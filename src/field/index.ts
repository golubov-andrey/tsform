export type PrimitiveDataTypeKey = 'Any'|'Int'|'Float'|'Str'|'Bool'|'Nil'|'Datetime';
export type PrimitiveDataType = number|string|boolean|null|Date;

export abstract class PrimitiveField<Type extends PrimitiveDataType> {
  public abstract readonly type: PrimitiveDataType;
  public abstract readonly value: Type;
  public toPrimitive(): Type {
    return this.value;
  }
}
