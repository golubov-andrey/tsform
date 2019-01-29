import { withType } from '../helpers';

export type Str = ReturnType<typeof str>;
/**
 * Returned `Str` field
 * @param value value of `Str` field
 */
export default function str(value: string = '') {
  return withType('Str', { value: String(value) });
}
