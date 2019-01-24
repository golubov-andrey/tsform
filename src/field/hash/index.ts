import { Primitive as PrimitiveField } from '../index';
import * as Primitive from '../primitive';

export type TypeKey = 'Hash';
export type Type<T> = { [K in keyof T]: T[K] extends PrimitiveField | IType<T> ? T[K] : never };
export interface IType<T> extends Field<T> { }

export class Field<V> extends Primitive.Field<Type<V>, TypeKey> {
  public static Type: TypeKey = 'Hash';
  public readonly type: TypeKey = 'Hash';
  constructor(
      readonly value: Type<V>,
  ) { super(); }

  // tslint:disable-next-line:max-line-length
  public extract(): { [K in keyof V]: V[K] extends PrimitiveField ? V[K]['value'] : V[K] extends IType<V> ? ReturnType<V[K]['extract']> : never } {
    return {} as any;
  }
}

export default function hash<T>(x: Type<T>) {
  return new Field(x);
}
