module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'mocha',
  ],
  ignorePatterns: [
    'dist/',
  ],
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
    'quote-props': [
      'error',
      'as-needed',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: false,
      },
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'no-trailing-spaces': [
      'warn',
    ],
  },
  overrides: [{
    files: ['*.js', '*.cjs', '*.mjs'],
    rules: {
      'no-unused-vars': [
        'warn',
      ],
    },
  }, {
    files: ['*.ts'],
    extends: [
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
      ],
    },
  }, {
    files: ['test/**/*.*js'],
    extends: [
      'plugin:mocha/recommended',
    ],
  }],
};
