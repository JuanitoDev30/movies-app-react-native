module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-confusing-arrow': 'off',
    'linebreak-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
        endOfLine: 'auto',
      },
    ],
    'no-plusplus': 'off',
  },
};
