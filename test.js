const toPlaintext = require('./');
const assert = require('assert');

const insert = insert => ({insert});
const delta = (...ops) => ({ops: ops.map(insert), reduce: (fn, init) => ops.map(insert).reduce(fn, init)});

const tests = [
  [delta('foo'), 'foo'],
  [delta('foo', 'bar'), 'foobar'],
  [delta('foo', { embed: 'qux' }, 'bar'), 'foo bar'],
];

describe('quill-delta-to-plaintext', function () {
  for (const [delta, result] of tests) {
    it('should render as ' + result, function () {
      assert.equal(toPlaintext(delta), result);
    });
  }
  it('should throw with delete ops', function () {
    assert.throws(function () {
      toPlaintext({
        ops: [
          {insert: 'foo'},
          {delete: 3},
        ],
      });
    });
  });
  it('should throw with retain ops', function () {
    assert.throws(function () {
      toPlaintext({
        ops: [
          {insert: 'foo'},
          {retain: 3},
        ],
      });
    });
  });
});
