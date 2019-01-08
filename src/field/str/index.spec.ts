import { expect } from 'chai';
import * as Str from './index';

describe('StrField', () => {

  it('Check field TypeKey and default properties', () => {
    const example = Str.default();
    expect(example).to.have.property('type', Str.Field.Type);
    expect(example).to.have.property('value', Str.Field.DefaultValue);
  });

  it('Simple construct', () => {
    const example = Str.default(`Hello typecheking`);
    expect(example).to.have.property('value', 'Hello typecheking');
  });

  it('Check toPrimitive', () => {
    const example = Str.default('Some string');
    expect(example.toPrimitive()).to.eq('Some string');
  });
});
