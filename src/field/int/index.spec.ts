import { expect } from 'chai';
import * as f from './fp';
import int, { Int } from './index';

describe('IntField', () => {
  it('Check TypeKey of field and default properties', () => {
    const example = int();
    expect(example).to.have.property('type', Int.Type);
    expect(example).to.have.property('value', Int.DefaultValue);
    const ex = f.extract(f.hash({ t: f.hash({ t: f.int(1) }), z: f.array(f.int(2)) }));
    expect(ex).to.deep.eq({
      t: [{ t: 1 }],
    });
  });

  it('Simple construct', () => {
    const example = int(1);
    expect(example).to.have.property('value', 1);
  });

  it('Check toPrimitve', () => {
    const example = int(1024);
    expect(example.toPrimitive()).eq(1024);
  });
});
