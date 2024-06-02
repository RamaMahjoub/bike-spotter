module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    "plugin:prettier/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "react", "prettier"],
  settings: {
    react: {
      version: 'detect'
    },
  },
  rules: {
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "always",
        "bracketSpacing": true,
        "jsxBracketSameLine": false,
        "requirePragma": false,
        "semi": false,
        "singleQuote": true,
        "tabWidth": 4,
        "trailingComma": "none",
        "singleAttributePerLine": true
      }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/jsx-sort-props": ["error", {
      "callbacksLast": true,
      "shorthandFirst": true,
      "noSortAlphabetically": false,
      "reservedFirst": true
    }],
    "react/function-component-definition": ["error", {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }],
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-fragments": ["error", "syntax"],
    "react/no-array-index-key": "error",
  },
}