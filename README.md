
# antipathy
[![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Welcome to sane Node.js filesystem paths, inspired by Python's [pathlib](https://docs.python.org/3/library/pathlib.html).

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
- 100% test coverage
- 0 dependencies (can even run on the browser!)
- Written in TypeScript
- Advanced path resolution algorithms for maximum safety