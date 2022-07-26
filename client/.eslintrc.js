const { namingConvention } = require('./naming');

const noUnusedVars = ['warn', { ignoreRestSiblings: true, argsIgnorePattern: '^_.*$' }];
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  extends: ['next', 'prettier', 'plugin:sonarjs/recommended'],
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'simple-import-sort', 'sonarjs'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/naming-convention': ['warn', ...namingConvention],
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unused-vars': noUnusedVars,
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'curly': 'warn',
    'max-lines': ['warn', { max: 200, skipBlankLines: true, skipComments: true }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-return-await': 'warn',
    'no-unused-vars': noUnusedVars,
    'prefer-template': 'warn',
    'react/display-name': 'off',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'off',
    'require-await': 'warn',
    'simple-import-sort/imports': 'warn',
    'sonarjs/cognitive-complexity': ['warn', 20],
    'sonarjs/no-duplicated-branches': 'warn',
    'sonarjs/no-duplicate-string': 'warn',
    'sonarjs/no-identical-expressions': 'warn',
    'sonarjs/no-nested-switch': 'warn',
    'sonarjs/no-small-switch': 'warn',
    'sonarjs/prefer-immediate-return': 'warn',
    'spaced-comment': ['warn', 'always'],
  },
};
