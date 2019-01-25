import { expect } from 'chai';
import text, { Text } from './index';

describe('TextField', () => {

  it('Check field TypeKey and default properties', () => {
    const example = text();
    expect(example).to.have.property('type', Text.Type);
    expect(example).to.have.property('value', Text.DefaultValue);
  });

  it('Simple construct', () => {
    const example = text(`Hello typecheking`);
    expect(example).to.have.property('value', 'Hello typecheking');
  });

  it('Check toPrimitive', () => {
    const example = text('Some string');
    expect(example.toPrimitive()).to.eq('Some string');
  });
});
