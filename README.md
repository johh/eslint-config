# @johh/eslint-config

An opinionated ESLint config based on [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) with support for TypeScript and rules for JSX, React hooks , Jasmine and JSON.

## Usage

First install the package:

```
yarn add --dev @johh/eslint-config
```

```
npm i -D @johh/eslint-config
```

Then add the following `.eslintrc` file to your projects root:

```json
{
    "extends": "@johh/eslint-config"
}
```

By default, ESLint will look for your `tsconfig` at `./tsconfig.eslint.json`. This enables you to run ESLint with a separate `tsconfig`, e.g. one including config files which you want to lint, but exclude from your actual project. 

To override this behaviour, add a `parserOptions.project` entry to your `.eslintrc`, pointing to your desired `tsconfig`:

```json
{
    "extends": "@johh/eslint-config",
    "parserOptions": {
        "project": "./tsconfig.json"
    }
}
```

