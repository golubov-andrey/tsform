import { expect } from 'chai';
import * as jsc from 'jsverify';
import int from './index';

describe('Integer field', () => {
  it('Simple cunstruct', () => {
    const example = int();
    expect(example).to.have.property('type', 'Int');
    expect(example).to.have.property('value', 0);
  });

  it('Consturct with value', () => {
    jsc.checkForall(jsc.nat, (n) => expect(int(n)).to.have.property('value', Math.round(n)));
  });
});
