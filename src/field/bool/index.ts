import { withType } from '../helpers';

export type Bool = ReturnType<typeof bool>;
/**
 * Returned `Bool` field
 * @param value boolean of `Bool` field
 */
export default function bool(value: boolean = false) {
  return withType('Bool', { value: Boolean(value) });
}
