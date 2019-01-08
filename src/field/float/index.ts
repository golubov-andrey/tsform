import * as Primitive from '~/field/primitive';

export type TypeKey = 'Float';
export type Type = number;
export type Precision = number;
export type Step = number;

/**
 * Primitve `FloatField`
 */
export class Field extends Primitive.Field<Type, TypeKey> {
  /**
   * TypeKey of `FloatField`
   */
  public static Type: TypeKey = 'Float';
  /**
   * Default value of `FloatField`
   */
  public static DefaultValue: Type = 0;
  /**
   * Default precision of `FloatField`
   */
  public static DefaultPrecision: Precision = 2;
  /**
   * Default step of `FloatField`
   */
  public static DefaultStep: Step = 0.01;
  /**
   * Typekey of `FloatField`
   */
  public readonly type: TypeKey = 'Float';
  /**
   * Number of char after point in `FloatField` value
   */
  public readonly precision: Precision = Field.DefaultPrecision;
  /**
   * Step of `FloatField`
   */
  public readonly step: Step = Field.DefaultStep;
  /**
   * Primitive `FloatField`
   * @param value `imutable` value of `FloatField` (`default: 0`)
   * @param precision `imutable` precision of `FloatField` (`default: 2`) with property is not round value, but slice
   */
  public constructor(
    readonly value: Type = Field.DefaultValue,
    precision?: Precision,
  ) {
    super();
    const searchPoint = value.toString().split('.');

    if (searchPoint.length === 2 && typeof precision === 'undefined') {
      this.precision = searchPoint[1].length;
    }

    if (typeof precision === 'number') {
      this.precision = precision;
    }

    const convertor = Math.pow(10, this.precision);
    // tslint:disable-next-line:no-bitwise
    this.value = ~~(this.value * convertor) / convertor;
    this.step = 1 / convertor;
  }
}

/**
 * Returns an instance of the class `FloatField` with the values specified.
 * @param x floating point number (`default: 0`) of `imutable` value in `FloatField`
 * @param precision `imutable` precision of `FloatField` (`default: 2`) with property is not round value, but slice
 */
export default function(x?: Type, precision?: Precision) {
  return new Field(x, precision);
}
