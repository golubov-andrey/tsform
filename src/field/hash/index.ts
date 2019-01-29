//import { Arr } from '../array';
import ComplexField, { Extract } from '../complex';
import f, { Combine, Primitive } from '../index';

export type TypeKey = 'Hash';
// tslint:disable-next-line:max-line-length
export type Type<T> = { [K in keyof T]: T[K] extends Primitive ? T[K] : T[K] extends IType<any> ? IType<T[K]['value']> : never };
export interface IType<T> extends Hash<T> { }

/**
 * Complex `HashField`
 */
export class Hash<V extends Record<string, any>> extends ComplexField<Type<V>, TypeKey> {
  /**
   * Typekey of `HashField`
   */
  public static Type: TypeKey = 'Hash';
  /**
   * TypeKey of `HashField`
   */
  public readonly type: TypeKey = 'Hash';
  /**
   * Returned complex `HashField`
   * @param value `imutable` value of `HashField`
   */
  constructor(
      readonly value: Type<V>,
  ) { super(); }
  /**
   * Returned new `HashField` with values from `primitive`
   * ```
   * import f from 'tsform/field';
   *
   * const entity = f.hash({
   *   someStr: f.str(),
   * }).from({
   *   someStr: 'some text',
   * });
   * /// => f.hash({ someStr: f.str('some text') })
   * ```
   * @param primitive `any` record
   */
  public createFrom(primitive: any): IType<V> {
    return hash((Object.keys(this.value) as Array<keyof Type<V>>).reduce((acc, key) => {
      const primitiveValue = primitive[key];
      const field = this.value[key] as Combine;
      if (typeof primitiveValue === 'undefined') { return acc; }
      switch (field.type) {
        case 'Bool': acc[key] = f.bool(primitiveValue); break;
        case 'Datetime': acc[key] = f.datetime(primitiveValue); break;
        case 'Float': acc[key] = f.float(primitiveValue); break;
        case 'Hash': acc[key] = field.createFrom(primitiveValue); break;
        case 'Int': acc[key] = f.int(primitiveValue); break;
        case 'Nil': acc[key] = f.nil(); break;
        case 'Str': acc[key] = f.str(primitiveValue); break;
        case 'Text': acc[key] = f.text(primitiveValue); break;
      }
      return acc;
    }, {} as any));
  }
  /**
   * Returned primitive `record` from `HashField`
   * ```
   * import f from 'tsform/field';
   *
   * const primitive = f.hash({
   *  someStr: f.text('some long text'),
   * }).extract();
   * /// => { someStr: 'some long text' }
   * ```
   */
  public extract(): Extract<V> {
    return (Object.keys(this.value) as Array<keyof Type<V>>).reduce((acc, key) => {
      switch (this.value[key].type) {
        case 'Array':
        case 'Hash': acc[key] = (this.value[key] as ComplexField<any>).extract(); break;
        default: acc[key] = this.value[key].toPrimitive();
      }
      return acc;
    }, {} as any) as Extract<V>;
  }
}

/**
 * Returned new complex `HashField` with record of primitives or other complexes
 * ```
 * import f from 'tsform/field';
 *
 * const entity = f.hash({
 *   text: f.text('Some long text'),
 *   ping: f.hash({
 *     pong: f.int(1),
 *   }),
 * });
 * ```
 * @param x `any` record
 */
export default function hash<T>(x: Type<T>) {
  return new Hash(x);
}
