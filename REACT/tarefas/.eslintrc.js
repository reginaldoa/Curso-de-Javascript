module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest:true,
    node:true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    "react/state-in-constructor":0,
    "Missing semicolon": "off",
    "react/forbid-prop-types":0,
  },
};
