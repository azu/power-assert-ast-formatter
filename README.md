# power-assert-ast-formatter

power-assert output AST as code.

## Installation

```
npm install
```

## Usage

```
npm test
```

Result:

```
  1) test is test:
     AssertionError:   # /Users/azu/Dropbox/workspace/JavaScript/project/power-assert-ast-formatter/test/test.js:23

  assert.deepEqual(xAST, yAST)
                   |     |
                   |     var n = 2;
  var y;
                   var n = 1;
  var x;
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT