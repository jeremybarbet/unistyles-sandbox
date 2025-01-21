/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@hello-aurora/eslint-config-pretty/react-native'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/no-require-imports': [1, { allow: ['assets/'] }],
    'react/react-in-jsx-scope': 'off',
  },
};
