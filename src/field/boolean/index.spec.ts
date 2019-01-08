import { expect } from 'chai';
import * as Bool from './index';

describe('BoolField', () => {
  it('Check TypeKey of field and default properties', () => {
    const example = Bool.default();
    expect(example).to.have.property('type', Bool.Field.Type);
    expect(example).to.have.property('value', Bool.Field.DefaultValue);
  });

  it('Simple construct', () => {
    const example = Bool.default(false);
    expect(example).to.have.property('value', false);
  });

  it('Check toPrimitve', () => {
    const example = Bool.default(true);
    expect(example.toPrimitive()).eq(true);
  });
});
