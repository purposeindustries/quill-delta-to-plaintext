# quill-delta-to-plaintext [![travis-badge]][travis]

> Convert [Quill][quill] [delta operations][delta] to plaintext

## install

install the [package][pkg] with [`npm`][npm]:

```sh
$ npm install quill-delta-to-plaintext
```

## usage

```js
import toPlaintext from 'quill-delta-to-plaintext';

const q = new Quill(...)
const text = toPlaintext(q.getContents());
```

## api

### `toPlaintext(delta)`

`delta` should be a quill [`Delta`][delta], with `insert` operations.

## license

ISC

[quill]: https://quilljs.com/
[delta]: https://github.com/quilljs/delta/
[pkg]: https://www.npmjs.com/package/quill-delta-to-plaintext
[npm]: https://www.npmjs.com/
[travis]: https://travis-ci.org/purposeindustries/quill-delta-to-plaintext
[travis-badge]: https://travis-ci.org/purposeindustries/quill-delta-to-plaintext.svg?branch=master
