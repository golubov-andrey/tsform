import PrimitiveField from '../primitive';

export type TypeKey = 'Text';
export type Type = string;

/**
 * Primitive `TextField`
 */
export class Text extends PrimitiveField<Type, TypeKey> {
  /**
   * TypeKey of `TextField`
   */
  public static Type: TypeKey = 'Text';
  /**
   * Default value of `TextField`
   */
  public static DefaultValue: Type = '';
  /**
   * TypeKey of `TextField`
   */
  public readonly type: TypeKey = 'Text';
  /**
   * Returned primitive `TextField`
   * @param value `imutable` value of `TextField` (`default: ''`)
   */
  public constructor(
    readonly value: Type = Text.DefaultValue,
  ) { super(); }
}

/**
 * Returns an instance of the class `TextField` with the values specified
 * @param x string (`default: ''`) `imutable` value of `TextField`
 */
export default function text(x?: Type) {
  return new Text(x);
}
