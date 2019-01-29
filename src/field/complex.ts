import { Combine, Primitive } from './index';

// tslint:disable-next-line:max-line-length
export type Extract<T> = { [K in keyof T]: T[K] extends Primitive ? T[K]['value'] : T[K] extends ComplexField<any> ? ReturnType<T[K]['extract']> : never };
/**
 * API primitive field
 */
export default abstract class ComplexField<V = []|{[K in keyof V]: V[K]}, T = string> {
  /**
   * TypeKey of `ComplexField`
   */
  public abstract readonly type: T;
  /**
   * Value of `ComplexField`
   */
  public abstract readonly value: V;
  /**
   * Returned extracted value of `ComplexField`
   */
  public abstract extract(): Extract<V>;
  /**
   * Returned `ComplexField` with values of argument
   */
  public abstract createFrom(primitive: Extract<V>): ComplexField<V, T>;
}
