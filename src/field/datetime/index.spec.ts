import { expect } from 'chai';
import * as Datetime from './index';

describe('DatetimeField', () => {
  it('Check TypeKey of field and default properties', () => {
    const example = Datetime.default();
    expect(example).to.have.property('type', Datetime.Field.Type);
    expect(example.value).to.instanceOf(Date);
  });

  it('Simple construct', () => {
    const now = new Date();
    const example = Datetime.default(now);
    expect(example).to.have.property('value', now);
  });

  it('Check toPrimitve', () => {
    const now = new Date(1);
    const example = Datetime.default(now);
    expect(example.toPrimitive()).eq(now);
  });
});
