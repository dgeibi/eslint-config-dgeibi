## Install

### Common

```
$ npm i -D eslint-config-airbnb-base eslint-plugin-no-async-without-await eslint-plugin-import dgeibi/eslint-config-dgeibi
```

For common projects, add this to your `.eslintrc`

```
{
  "extends": ["dgeibi"]
}
```

### Preact projects

```
$ npm i -D eslint-config-standard-preact eslint-plugin-react
```

add this to `.eslintrc`

```
{
  "extends": ["dgeibi/preact"]
}
```

### React projects

```
$ npm i -D eslint-config-standard-react eslint-plugin-react
```

add this to `.eslintrc`

```
{
  "extends": ["dgeibi/react"]
}
```
