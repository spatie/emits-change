# emits-change

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/spatie/emits-change.svg?style=flat-square)](https://travis-ci.org/spatie/emits-change)
[![Code Climate](https://img.shields.io/codeclimate/github/spatie/emits-change.svg?style=flat-square)](https://img.shields.io/codeclimate/github/spatie/emits-change.svg)
[![npm](https://img.shields.io/npm/dt/emits-change.svg?style=flat-square)]()

Plug-and-play node.js events integration to emit change events.

## Installation

```bash
npm install emits-change
```

This package uses the [node.js events API](https://nodejs.org/api/events.html). Make sure your javascript bundler can handles importing core node modules (e.g. Browserify does this).

## Usage

Calling `emitsChange` on an object will add node's EventEmitter, a `listen`, an `unlisten` and an `emitChange` function to the prototype.

```es6
import emitsChange from 'emits-change'

class Emitter {
    constructor() {
        emitsChange(this)
    }
}

let emitter = new Emitter

function doSomethingOnChange() {
    console.log('hodor')
}

emitter.listen(doSomethingOnChange)

emitter.emitChange()
// => hodor

emitter.unlisten(doSomethingOnChane)

emitter.emitChange()
// => *nothing*
```

## Testing

You can run the tests (ESLint & Mocha) with:

```bash
npm run test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email [freek@spatie.be](mailto:freek@spatie.be) instead of using the issue tracker.

## Credits

- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

## About Spatie

Spatie is a webdesign agency in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
