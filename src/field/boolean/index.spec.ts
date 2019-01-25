import { expect } from 'chai';
import bool, { Bool } from './index';

describe('BoolField', () => {
  it('Check TypeKey of field and default properties', () => {
    const example = bool();
    expect(example).to.have.property('type', Bool.Type);
    expect(example).to.have.property('value', Bool.DefaultValue);
  });

  it('Simple construct', () => {
    const example = bool(false);
    expect(example).to.have.property('value', false);
  });

  it('Check toPrimitve', () => {
    const example = bool(true);
    expect(example.toPrimitive()).eq(true);
  });
});
