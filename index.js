module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    plugins: [
      'babel',
      'react',
      'react-native',
      'jsx-a11y',
      'local'
    ],
  
    settings: {
      react: {
        pragma: 'React',
        version: '16.3'
      },
      'import/resolver': {
        'babel-module': {}
      }
    },
  
    env: {
      jest: true
    },
  
    rules: {
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'double'],
      semi: ['error', 'always'],
      'no-dupe-keys': 'error',
      'global-require': 'off',
      'object-curly-newline': 'off',
      'no-nested-ternary': 'error', // Really, don"t do this.
  
      // override default options for rules from base configurations
      'comma-dangle': ['error', {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'ignore',
        exports: 'ignore',
        functions: 'ignore'
      }],
      'no-cond-assign': ['error', 'always'],
      'no-underscore-dangle': 'off',
  
      'no-else-return': 'off', // This is a terrible linter rule
  
      'prefer-destructuring': 'off', // Sometimes, but the linter applies this even for single values, which is
      //   unnecessary and makes code harder to read. Better left off.
  
      indent: ['error', 2, { // What twisted mind thinks that "switch" and "case" should be on the
        SwitchCase: 1 //   same indent level?
      }],
  
      'react/prefer-stateless-function': 'off',
      'consistent-return': 'off',
  
      // disable rules from base configurations
      'no-console': 'off',
      'no-use-before-define': 'off',
      'import/extensions': 'off',
      'array-bracket-spacing': 'off',
      'react/sort-comp': 'off',
      'class-methods-use-this': 'off',
      'no-mixed-operators': 'off',
      'default-case': 'off',
      'react/jsx-no-bind': 'off',
      'no-prototype-builtins': 'off',
      'no-restricted-syntax': 'off',
      'guard-for-in': 'error',
      'no-return-assign': 'error',
      'arrow-parens': 'off',
      'arrow-body-style': 'off',
      'function-paren-newline': ['error', 'consistent'],
      'padded-blocks': 'off',
      'import/no-named-default': 'off',
      'import/prefer-default-export': 'off',
      'no-unused-expressions': 'off',
  
  
      // no .jsx in react native - use .js instead
      'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
  
      'react/forbid-prop-types': 'off', // We"re stuck with object proptypes, so don"t make this an error
  
      'no-param-reassign': 'off',
      'react/prop-types': 'error',
      'max-len': ['error', 160],
      'no-constant-condition': 'error',
      'import/no-extraneous-dependencies': ['error', { devDependencies: [
        './app/**/*.story.js',
        './storybook/**/*.js',
        '**/*.test.js',
        '**/*.spec.js',
        './config/jest/**/*.js'
      ] }],
  
      // Custom rules
      'local/prefer-simpletrip-text': 'error'
    }
  };
  