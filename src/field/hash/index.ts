import f, { Primitive as PrimitiveField } from '~/field';
import * as Primitive from '~/field/primitive';

export type TypeKey = 'Hash';
export type Type<T> = { [K in keyof T]: T[K] extends PrimitiveField | IType<T> ? T[K] : undefined };
export interface IType<T> extends Field<T> { }

export class Field<V> extends Primitive.Field<Type<V>, TypeKey> {
  public static Type: TypeKey = 'Hash';
  public readonly type: TypeKey = 'Hash';
  constructor(
      readonly value: Type<V>,
  ) { super(); }
}

export default function hash<T>(x: Type<T>) {
  return new Field(x);
}