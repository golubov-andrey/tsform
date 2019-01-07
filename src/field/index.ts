export type PrimitiveDataTypeKey = 'Int'|'Float'|'Str'|'Bool'|'Nil'|'Datetime';
export type PrimitiveDataType = number|string|boolean|null|Date;

export abstract class PrimitiveField<Type extends PrimitiveDataType> {
  public readonly type: PrimitiveDataType;
  public readonly value: Type;
  public toPrimitive(): Type {
    return this.value;
  }
}
