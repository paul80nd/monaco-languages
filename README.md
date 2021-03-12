# Monaco Languages [![Build Status](https://github.com/paul80nd/monaco-languages/workflows/Node%20CI/badge.svg)](https://github.com/paul80nd/monaco-languages/actions)

Colorization and configuration supports for Relay Computer Assembly languages for the Monaco Editor:
based on [microsoft/monaco-languages](https://github.com/microsoft/monaco-languages))

## Installing

This npm module is bundled and distributed in the [monaco-editor](https://github.com/paul80nd/monaco-editor) npm module.

## Dev: cheat sheet

-   initial setup with `npm install .`
-   compile with `npm run watch`
-   test with `npm run test`
-   bundle with `npm run prepublishOnly`

## Dev: Adding a new language

-   create `$/src/myLang/myLang.contribution.ts`
-   create `$/src/myLang/myLang.ts`
-   create `$/src/myLang/myLang.test.ts`
-   edit `$/src/monaco.contribution.ts` and register your new language

```js
import './myLang/myLang.contribution';
```

## License

[MIT](https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md)
