import { expect } from 'chai';
import int, { Int } from './index';

describe('IntField', () => {
  it('Check TypeKey of field and default properties', () => {
    const example = int();
    expect(example).to.have.property('type', Int.Type);
    expect(example).to.have.property('value', Int.DefaultValue);
  });

  it('Simple construct', () => {
    const example = int(1);
    expect(example).to.have.property('value', 1);
  });

  it('Check toPrimitve', () => {
    const example = int(1024);
    expect(example.toPrimitive()).eq(1024);
  });
});
