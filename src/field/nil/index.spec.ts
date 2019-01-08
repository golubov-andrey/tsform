import { expect } from 'chai';
import * as Nil from './index';

describe('NilField', () => {

  it('Check field TypeKey and default properties', () => {
    const example = Nil.default();
    expect(example).to.have.property('type', Nil.Field.Type);
    expect(example).to.have.property('value', Nil.Field.DefaultValue);
  });

  it('Check toPrimitive', () => {
    const example = Nil.default();
    expect(example.toPrimitive()).to.eq(null);
  });
});
