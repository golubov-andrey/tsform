import { expect } from 'chai';
import datetime, { Datetime } from './index';

describe('DatetimeField', () => {
  it('Check TypeKey of field and default properties', () => {
    const example = datetime();
    expect(example).to.have.property('type', Datetime.Type);
    expect(example.value).to.instanceOf(Date);
  });

  it('Simple construct', () => {
    const now = new Date();
    const example = datetime(now);
    expect(example).to.have.property('value', now);
  });

  it('Check toPrimitve', () => {
    const now = new Date(1);
    const example = datetime(now);
    expect(example.toPrimitive()).eq(now);
  });
});
