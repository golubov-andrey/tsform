import f, { Primitive as PrimitiveField } from '../index';
import * as Primitive from '../primitive';

export type TypeKey = 'Hash';
// tslint:disable-next-line:max-line-length
export type Type<T> = { [K in keyof T]: T[K] extends PrimitiveField ? T[K] : T[K] extends IType<any> ? IType<T[K]['value']> : never };
export interface IType<T> extends Hash<T> { }
// tslint:disable-next-line:max-line-length
export type Extract<V> =  { [K in keyof V]: V[K] extends PrimitiveField ? V[K]['value'] : V[K] extends IType<any> ? ReturnType<V[K]['extract']> : never };

export class Hash<V> extends Primitive.Field<Type<V>, TypeKey> {
  public static Type: TypeKey = 'Hash';
  public readonly type: TypeKey = 'Hash';
  constructor(
      readonly value: Type<V>,
  ) { super(); }

  public from(primitive: any): IType<V> {
    return hash((Object.keys(this.value) as Array<keyof Type<V>>).reduce((acc, key) => {
      const primitiveValue = primitive[key];
      if (typeof primitiveValue === 'undefined') { return acc; }

      switch (this.value[key].type) {
        case 'Bool': acc[key] = f.bool(primitiveValue); break;
        case 'Datetime': acc[key] = f.datetime(primitiveValue); break;
        case 'Float': acc[key] = f.float(primitiveValue); break;
        case 'Hash': acc[key] = (this.value[key] as IType<any>).from(primitiveValue); break;
        case 'Int': acc[key] = f.int(primitiveValue); break;
        case 'Nil': acc[key] = f.nil(); break;
        case 'Str': acc[key] = f.str(primitiveValue); break;
        case 'Text': acc[key] = f.text(primitiveValue); break;
      }
      return acc;
    }, {} as any));
  }

  public extract(): Extract<V> {
    return (Object.keys(this.value) as Array<keyof Type<V>>).reduce((acc, key) => {
      switch (this.value[key].type) {
        case 'Hash': acc[key] = (this.value[key] as IType<any>).extract(); break;
        default: acc[key] = this.value[key].toPrimitive();
      }
      return acc;
    }, {} as any) as Extract<V>;
  }
}

export default function hash<T>(x: Type<T>) {
  return new Hash(x);
}
