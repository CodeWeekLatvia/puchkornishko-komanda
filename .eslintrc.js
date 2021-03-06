
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    project: "tsconfig.json",
  },
  rules: {
    'no-console': 'off',
    'no-plusplus': 'off',
  },
  plugins: [
    '@typescript-eslint',
  ],
};
