import { expect } from 'chai';
import float, { Float } from './index';

describe('FloatField', () => {
  it('Check field TypeKey and default properties', () => {
    const example = float();
    expect(example).to.have.property('type', Float.Type);
    expect(example).to.have.property('value', Float.DefaultValue);
    expect(example).to.have.property('precision', Float.DefaultPrecision);
    expect(example).to.have.property('step', Float.DefaultStep);
  });

  it('Simple construct', () => {
    const example = float(1.1);
    expect(example).to.have.property('value', 1.1);
    expect(example).to.have.property('precision', 1);
    expect(example).to.have.property('step', 0.1);
  });

  it('Simple consturct with percision', () => {
    const exmaple = float(1.00214, 4);
    expect(exmaple).to.have.property('value', 1.0021);
    expect(exmaple).to.have.property('precision', 4);
    expect(exmaple).to.have.property('step', 0.0001);
  });

  it('Check toPrimitive', () => {
    const example = float(Math.PI, 6);
    expect(example.toPrimitive()).to.eq(3.141592);
  });
});
