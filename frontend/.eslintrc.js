// .eslintrc.js hoặc thêm vào package.json

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    localStorage: true,
    ga: true,
    fetch: true,
    window: true,
    document: true,
    Raven: true,
    ENV: true,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        endOfLine: 'lf',
        tabWidth: 2,
        useTabs: false,
        printWidth: 120,
      },
    ],
  },
};
