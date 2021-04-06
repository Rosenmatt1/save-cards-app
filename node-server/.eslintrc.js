module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'import', 'graphql'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'class-methods-use-this': 0,
    'graphql/capitalized-type-name': ['warn', { schemaJson: require('./schema.json') }],
    'graphql/named-operations': ['warn', { schemaJson: require('./schema.json') }],
    'graphql/required-fields': [
      'error',
      { schemaJson: require('./schema.json'), requiredFields: ['id'] },
    ],
    'graphql/template-strings': [
      'error',
      { env: 'apollo', schemaJson: require('./schema.json'), tagName: 'gql' },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': 0,
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
      },
    ],
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['Label', 'CheckboxLabel'],
        labelAttributes: ['description'],
        controlComponents: [
          'StyledInput',
          'Input',
          'InputField',
          'Select',
          'SelectField',
          'Checkbox',
          'CheckboxField',
          'MaskedInputField',
          'PhoneNumberInputField',
          'DateInputField',
        ],
        assert: 'nesting',
      },
    ],
    'jsx-a11y/control-has-associated-label': [
      'error',
      {
        controlComponents: ['Button', 'SubmitButton'],
      },
    ],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
    {
      files: ['*.test.ts', '*.test.tsx', '*.stories.ts', '*.stories.tsx'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 0,
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
