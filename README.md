# fabric

my prettier, eslint and stylelint config preset

| package                                |            |
| -------------------------------------- | ---------- |
| @gavin-fabric/eslint-config-basic      | JavaScript |
| @gavin-fabric/eslint-config-typescript | TypeScript |
| @gavin-fabric/eslint-config-react      | React      |
| @gavin-fabric/eslint-config-vue        | Vue        |
| @gavin-fabric/eslint-config-angular    | Angular    |

eslint

```shell
npm i -D @gavin-fabric/eslint-config-react
```

```js
//.eslintrc.js
module.exports = {
  extends: ['@gavin-fabric/eslint-config-react'],
};
```

prettier

```shell
npm i -D @gavin-fabric/prettier
```

```js
//.prettierrc.js
module.exports = require('@gavin-fabric/prettier');
```

stylelint

```shell
npm i -D @gavin-fabric/stylelint
```

```js
//.stylelintrc.js
module.exports = {
  extends: ['@gavin-fabric/stylelint'],
};
```
