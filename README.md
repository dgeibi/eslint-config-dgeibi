# eslint-config-dgeibi

ESLint Config base on `eslint-config-airbnb-base` without style rules.

## Install

### Common projects

Install `eslint-config-dgeibi` and its peer dependencies:

```
$ npm i -D eslint eslint-config-airbnb-base eslint-plugin-import eslint-config-dgeibi babel-eslint
```

For common projects, add this to your `.eslintrc`

``` json
{
  "extends": ["dgeibi"]
}
```

For legacy projects:

``` json
{
  "extends": ["dgeibi/legacy"]
}
```

### (p)react projects

The configs are copying from eslint-config-standard-react and eslint-config-standard-preact.

Need to install `eslint-plugin-react`:

```
$ npm i -D eslint-plugin-react
```

add this to `.eslintrc`

``` json
{
  "extends": ["dgeibi/react"]
}
```

extends `dgeibi/preact` instead for preact projects.

## LICENSE

[MIT](LICENSE)
