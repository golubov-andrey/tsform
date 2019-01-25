import { expect } from 'chai';
import nil, { Nil } from './index';

describe('NilField', () => {

  it('Check field TypeKey and default properties', () => {
    const example = nil();
    expect(example).to.have.property('type', Nil.Type);
    expect(example).to.have.property('value', Nil.DefaultValue);
  });

  it('Check toPrimitive', () => {
    const example = nil();
    expect(example.toPrimitive()).to.eq(null);
  });
});
