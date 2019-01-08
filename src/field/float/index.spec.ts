import { expect } from 'chai';
import * as Float from './index';

describe('FloatField', () => {
  it('Check field TypeKey and default properties', () => {
    const example = Float.default();
    expect(example).to.have.property('type', Float.Field.Type);
    expect(example).to.have.property('value', Float.Field.DefaultValue);
    expect(example).to.have.property('precision', Float.Field.DefaultPrecision);
    expect(example).to.have.property('step', Float.Field.DefaultStep);
  });

  it('Simple construct', () => {
    const example = Float.default(1.1);
    expect(example).to.have.property('value', 1.1);
    expect(example).to.have.property('precision', 1);
    expect(example).to.have.property('step', 0.1);
  });

  it('Simple consturct with percision', () => {
    const exmaple = Float.default(1.00214, 4);
    expect(exmaple).to.have.property('value', 1.0021);
    expect(exmaple).to.have.property('precision', 4);
    expect(exmaple).to.have.property('step', 0.0001);
  });

  it('Check toPrimitive', () => {
    const example = Float.default(Math.PI, 6);
    expect(example.toPrimitive()).to.eq(3.141592);
  });
});
