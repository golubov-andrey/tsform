import { expect } from 'chai';
import * as jsc from 'jsverify';
import str from './index';

describe('String field', () => {
  it('Simple constuct', () => {
    const example = str();
    expect(example).to.have.property('type', 'Str');
    expect(example).to.have.property('value', '');
  });
  it('Construct with value', () => {
    jsc.checkForall(jsc.asciinestring, (s) => expect(str(s)).to.have.property('value', s));
  });
});
