import { expect } from 'chai';
import * as Text from './index';

describe('TextField', () => {

  it('Check field TypeKey and default properties', () => {
    const example = Text.default();
    expect(example).to.have.property('type', Text.Field.Type);
    expect(example).to.have.property('value', Text.Field.DefaultValue);
  });

  it('Simple construct', () => {
    const example = Text.default(`Hello typecheking`);
    expect(example).to.have.property('value', 'Hello typecheking');
  });

  it('Check toPrimitive', () => {
    const example = Text.default('Some string');
    expect(example.toPrimitive()).to.eq('Some string');
  });
});
