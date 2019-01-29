import { withType } from '../helpers';

export type Int = ReturnType<typeof int>;
/**
 * Returned `Int` field
 * @param value number of `Int` field
 */
export default function int(value: number = 0) {
  return withType('Int', { value: Math.round(value) });
}
