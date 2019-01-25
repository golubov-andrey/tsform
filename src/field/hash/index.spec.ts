import { expect } from 'chai';
import f from '../index';
import { Hash } from './index';

describe('HashField', () => {
  const now = new Date();
  const unixStart = new Date(1);
  const primitiveValues = {
    bool: false,
    datetime: now,
    float: 0,
    hash: {
      bool: true,
      datetime: unixStart,
      float: 1.451,
      int: 2,
      nil: null,
      str: 'text',
      text: 'long text',
    },
    int: 251,
    str: 'Some text',
    text: 'Some long text',
  };

  const primitiveWithValues = {
    bool: f.bool(),
    datetime: f.datetime(now),
    float: f.float(),
    hash: f.hash({
      bool: f.bool(true),
      datetime: f.datetime(unixStart),
      float: f.float(1.451),
      int: f.int(2),
      nil: f.nil(),
      str: f.str('text'),
      text: f.text('long text'),
    }),
    int: f.int(251),
    str: f.str('Some text'),
    text: f.text('Some long text'),
  };

  const primitiveWithoutValues = {
    bool: f.bool(),
    datetime: f.datetime(),
    float: f.float(),
    hash: f.hash({
      bool: f.bool(),
      datetime: f.datetime(),
      float: f.float(),
      int: f.int(),
      nil: f.nil(),
      str: f.str(),
      text: f.text(),
    }),
    int: f.int(),
    str: f.str(),
    text: f.text(),
  };

  it('Simple construct', () => {
    const example = f.hash(primitiveWithoutValues);
    expect(example).to.have.property('type', Hash.Type);
    expect(example).to.have.property('value', primitiveWithoutValues);
  });
  it('Check toPtimitive', () => {
    expect(f.hash(primitiveWithValues).toPrimitive()).to.deep.eq(primitiveWithValues);
  });

  it('Check from', () => {
    expect(f.hash(primitiveWithoutValues).from(primitiveValues)).to.deep.eq(f.hash(primitiveWithValues));
  });

  it('Check extenct', () => {
    expect(f.hash(primitiveWithValues).extract()).to.deep.eq(primitiveValues);
  });
});
