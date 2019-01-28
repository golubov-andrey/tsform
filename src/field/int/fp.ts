export function int(value: number) {
  return Object.freeze({ type: 'Int' as 'Int', value });
}

export function float(value: number, step: number = 0.1) {
  return Object.freeze({ type: 'Float' as 'Float', value });
}

export function hash<T extends Record<string, Combine>>(value: T) {
  return Object.freeze({ type: 'Hash' as 'Hash', value });
}

export function array<T extends Combine>(
  value: T,
  store: Array<T extends Primitive ? T['value'] : T extends IHash ? Extract<T> : never> = [],
) {
  return Object.freeze({ type: 'Array' as 'Array', value, store });
}

export type Int = ReturnType<typeof int>;
export type Float = ReturnType<typeof float>;
export type Primitive = Int|Float;
export interface IHash extends ReturnType<typeof hash> { }
export interface IArray extends ReturnType<typeof array> { }
export type Combine = Int|Float|IHash|IArray;

export type Extract<T extends Combine> =
  T extends Primitive ? T['value'] :
  T extends IHash ? {
    [K in keyof T['value']]: T['value'][K] extends Primitive|IHash|IArray ? Extract<T['value'][K]> : never
  } :
  T extends IArray ? T['store'] : never;

export function extract<T extends Combine>(combine: T): Extract<T>;
export function extract(combine: Combine): Extract<Combine> {
  switch (combine.type) {
    case 'Int':
    case 'Float':
      return combine.value;
    case 'Array':
    case 'Hash':
      return Object.keys(combine.value).reduce((acc, key) => {
        const property = acc[key] as Combine;
        switch (property.type) {
          case 'Int':
          case 'Float':
            return Object.assign(acc, {[key]: property.value});
          case 'Array':
          case 'Hash':
            return Object.assign(acc, {[key]: extract(property)}) as any;
        }
      }, combine.value) as any;
  }
  return {} as any;
}

export const z = hash({
  someA: array(hash({ t: int(1), z: hash({ t: float(1) }) })),
  someInt: int(1),
  someT: hash({ someFloat: float(1.2) }),
});

extract(z);
