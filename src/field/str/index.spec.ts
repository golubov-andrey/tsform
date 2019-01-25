import { expect } from 'chai';
import str, { Str } from './index';

describe('StrField', () => {

  it('Check field TypeKey and default properties', () => {
    const example = str();
    expect(example).to.have.property('type', Str.Type);
    expect(example).to.have.property('value', Str.DefaultValue);
  });

  it('Simple construct', () => {
    const example = str(`Hello typecheking`);
    expect(example).to.have.property('value', 'Hello typecheking');
  });

  it('Check toPrimitive', () => {
    const example = str('Some string');
    expect(example.toPrimitive()).to.eq('Some string');
  });
});
