# eslint-config-dgeibi

ESLint Config base on `eslint-config-airbnb-base` and `eslint-config-prettier`

## Install

### Common projects

Install `eslint-config-dgeibi` and eslint:

```
$ npm i -D eslint eslint-config-dgeibi
```

If you want to format your source code, just install `prettier`

```
$ npm i -D prettier
```

and create a `.prettierrc`, for example:

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

For common es6 projects, add this to your `.eslintrc`

```json
{
  "extends": ["dgeibi"]
}
```

For node, use `dgeibi/node`

For legacy projects:

```json
{
  "extends": ["dgeibi/legacy"]
}
```

### (p)react projects

The configs are copying from eslint-config-standard-react and eslint-config-standard-preact.

add this to `.eslintrc`

```json
{
  "extends": ["dgeibi/react"]
}
```

extends `dgeibi/preact` instead for preact projects.

## LICENSE

[MIT](LICENSE)
