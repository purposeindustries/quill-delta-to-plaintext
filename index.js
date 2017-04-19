module.exports = function toPlaintext(delta) {
  return delta.reduce(function (text, op) {
    if (!op.insert) throw new TypeError('only `insert` operations can be transformed!');
    if (typeof op.insert !== 'string') return text + ' ';
    return text + op.insert;
  }, '');
};
