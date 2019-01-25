import { expect } from 'chai';
import f from '../index';
import { Arr } from './index';

describe('ArrayField', () => {

  it('Simple construct', () => {
    const example1 = f.array([ f.str(), f.bool() ]);
    expect(example1).to.have.property('type', Arr.Type);
    expect(example1).to.have.property('value', [ f.str(), f.bool() ]);

    const example2 = f.array([ f.hash({ str: f.str()}) ]);
    expect(example2).to.have.property('type', Arr.Type);
    expect(example2).to.have.property('value', [ f.hash({ str: f.str() }) ]);

    /// TODO: f.arr of f.arr
    // const primtive3 = [ f.array([]) ];
    // expect(example3).to.have.property('type', Arr.Type);
    // expect(example3).to.have.property('value', [ f.array([]) ]);
  });

  it('Check toPrimitive', () => {
    const primitve1 = [ f.bool(), f.datetime(), f.float(), f.int(), f.nil(), f.str(), f.text() ];
    expect(f.array(primitve1).toPrimitive()).to.deep.eq(primitve1);

    const primitve2 = [ f.hash({ str: f.str() }) ];
    expect(f.array(primitve2).toPrimitive()).to.deep.eq(primitve2);

    /// TODO: f.arr of f.arr
    // const primtive3 = [ f.array([]) ];
    // expect(f.array(primitve3).toPrimitve).to.deep.eq(primitve3);
  });

  it('Check from', () => {
    const primitiveValues1 = [ 1, 2, 3 ];
    expect(f.array([ f.int() ]).from(primitiveValues1)).to.deep.eq(f.array([ f.int(1), f.int(2), f.int(3) ]));

    const primitveValues2 = [ f.hash({ number: f.int()}), f.hash({ number: f.int(2) })];
    expect(f.array([ f.hash({ number: f.int() })]).from(primitveValues2))
      .to.deep.eq(f.array([ f.hash({ number: f.int(0) }), f.hash({ number: f.int(2) })]));
  });

  it('Check extract', () => {
    const example = f.array([ f.hash({ someStr: f.text('text'), int: f.int(1) })]);
    expect(example.extract()).to.deep.eq([ { someStr: 'text', int: 1 }]);
  });

});
