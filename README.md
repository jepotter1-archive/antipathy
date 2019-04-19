
# antipathy
[![NPM](https://nodei.co/npm/antipathy.png)](https://npmjs.org/package/antipathy)

[![Build Status](https://travis-ci.org/jwinnie/antipathy.svg?branch=master)](https://travis-ci.org/jwinnie/antipathy)
[![Coverage Status](https://coveralls.io/repos/github/jwinnie/antipathy/badge.svg?branch=master)](https://coveralls.io/github/jwinnie/antipathy?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

The Node.js `fs` and `path` APIs are needlessly complicated and crude. Antipathy is Node.js filesystem manipulation for humans. Inspired by Python's [pathlib](https://docs.python.org/3/library/pathlib.html).
- [Documentation](https://antipathy.surge.sh)

## Example
```typescript
const p = new Path("/etc/")
p.push("apt.d/sources.list")
p.pop()
p.getAbsolute()       // => /etc/apt.d
p.getRelative("/etc") // => apt.d
```
See `src/main.spec.ts` for more examples.

## Features
- 0 dependencies (can even run on the browser!)
- Written in TypeScript with complete type coverage
- Advanced path resolution algorithms for maximum safety
