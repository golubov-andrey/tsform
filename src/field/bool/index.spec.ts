import { expect } from 'chai';
import * as jsc from 'jsverify';
import bool from './index';

describe('Boolean field', () => {
  it('Simple construct', () => {
    const example = bool();
    expect(example).to.have.property('type', 'Bool');
    expect(example).to.have.property('value', false);
  });
  it('Construct with value', () => {
    jsc.checkForall(jsc.bool, (b) => expect(bool(b)).to.have.property('value', b));
  });
});
