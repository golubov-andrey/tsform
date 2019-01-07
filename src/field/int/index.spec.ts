import { expect } from 'chai';
import * as Int from './index';

describe('IntField', () => {
  it('Check TypeKey of field and default properties', () => {
    const example = Int.default();
    expect(example).to.have.property('type', Int.Field.Type);
    expect(example).to.have.property('value', Int.Field.DefaultValue);
  });

  it('Simple construct', () => {
    const example = Int.default(1);
    expect(example).to.have.property('value', 1);
  });

  it('Check toPrimitve', () => {
    const example = Int.default(1024);
    expect(example.toPrimitive()).eq(1024);
  });
});
