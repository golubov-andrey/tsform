import { expect } from 'chai';
import * as jsc from 'jsverify';
import * as h from '../helpers';
import f from '../index';
import hash from './index';

describe('Hash field', () => {
  it('Simple constuct', () => {
    const example = hash({});
    expect(example).to.have.property('type', 'Hash');
    expect(example.value).to.deep.eq({});
  });
  it('Construct with value');
});
