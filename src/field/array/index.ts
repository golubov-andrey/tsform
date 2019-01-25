import { Hash } from '../hash';
import f, { Complex, Primitive } from '../index';
import { Field } from '../primitive';

export type TypeKey = 'Array';
// tslint:disable-next-line:max-line-length
export type Type<V> = { [K in keyof V]: V[K] extends Primitive ? V[K] : V[K] extends IType<any> ? V[K]['value'] : V[K] extends Hash<any> ? Hash<V[K]['value']> : never };
export interface IType<V> extends Arr<V> { }
// tslint:disable-next-line:max-line-length
export type Extract<V> = { [K in keyof V]: V[K] extends Primitive ? V[K]['value'] : V[K] extends Complex<any> ? ReturnType<V[K]['extract']> : never };

export class Arr<V> extends Field<Type<V>, TypeKey> {
  public static Type: TypeKey = 'Array';
  public readonly type: TypeKey = 'Array';

  public constructor(
    readonly value: Type<V>,
  ) { super(); }

  public from(primitive: any): IType<V> {
    return f.array((Object.keys(this.value) as Array<keyof Type<V>>).reduce((acc, key) => {
      const item = (this.value[key] as Primitive|Complex<V[typeof key]>);
      const primitiveValue = primitive[key];
      if (typeof item === 'undefined' || typeof primitiveValue === 'undefined') { return acc; }

      switch (item.type) {
        case 'Array':
        case 'Hash':
          acc.push(item.from(primitiveValue)); break;
        case 'Bool': acc.push(f.bool(primitiveValue)); break;
        case 'Datetime': acc.push(f.datetime(primitiveValue)); break;
        case 'Float': acc.push(f.float(primitiveValue)); break;
        case 'Int': acc.push(f.int(primitiveValue)); break;
        case 'Nil': acc.push(f.nil()); break;
        case 'Str': acc.push(f.str(primitiveValue)); break;
        case 'Text': acc.push(f.text(primitiveValue)); break;
      }

      return acc;
    }, [] as any[])) as any;
  }

  public extract(): Extract<V> {
    return (Object.keys(this.value) as Array<keyof Type<V>>).reduce((acc, key) => {
      const item = (this.value[key] as Primitive|Complex<V[typeof key]>);
      if (typeof item === 'undefined') { return acc; }

      switch (item.type) {
        case 'Array':
        case 'Hash':
          acc.push(item.extract()); break;
        default:
          acc.push(item.value);
      }
      return acc;
    }, [] as any[]) as any;
  }
}

export default function array<T>(x: Type<T>) {
  return new Arr(x);
}
