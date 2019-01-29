import { IArray } from './array';
import f, { Combine, Primitive } from './index';
/**
 * Return basic readonly sturct of field
 * @param type type of field
 * @param value value of field
 */
export function withType<T extends string, V>(type: T, value: V) {
  return Object.freeze(Object.assign({ type }, value));
}

export type Extract<T> =
  T extends Primitive ? T['value'] :
  T extends Combine ? {
    [K in keyof T['value']]: T['value'][K] extends Combine ? Extract<T['value'][K]> : never
  } :
  never;
/**
 * Returned value of `Primitive`
 * @param primitive `Primitive` field
 */
export function extract<T extends Combine>(primitive: T): Extract<T>;
export function extract(primitive: Combine): Extract<Combine> {
  switch (primitive.type) {
    case 'Bool': return Boolean(primitive.value);
    case 'Int': return Number(primitive.value);
    case 'Str': return String(primitive.value);
    case 'Array':
    case 'Hash': return Object.keys(primitive.value).reduce((acc, key) => {
      acc[key] = extract(primitive.value[key]);
      return acc;
    }, {} as Partial<Extract<Combine>>) as Extract<Combine>;
  }
}
/**
 * Returned `Primitve` field with new value
 * @param primitive curren `Primitve` field
 * @param value new value for `Primitve` field
 */
export function from<T extends Combine>(combine: T, value: T extends IArray ? Array<Extract<T>> : Extract<T>): T;
export function from(combine: Combine, value: Extract<Combine>|Array<Extract<Combine>>): Combine {
  switch (combine.type) {
    case 'Bool': {
      if (typeof value === 'boolean') {
        return f.bool(value);
      }
    }
    case 'Int': {
      if (typeof value === 'number') {
        return f.int(value)
      }
    }
    case 'Str': {
      if (typeof value === 'string') {
        return f.str(value);
      }
    }
    case 'Hash': {
      if (value && typeof value === 'object') {
        return f.hash(Object.keys(combine.value).reduce((acc, key) => {
          acc[key] = from(combine.value[key], value[key]);
          return acc;
        }, {}));
      }
    }
    case 'Array': {
      if (Array.isArray(value)) {
        return f.array(combine, { store: value.map((v) => from(combine, v)) });
      }
    }
  }
  throw new Error(`Invalid value '${value}' of field '${combine.type}'`);
}
