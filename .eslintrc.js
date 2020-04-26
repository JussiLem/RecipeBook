module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'semi': [2, 'never'],
    'arrow-parens': [1, 'as-needed'],
    'react/jsx-tag-spacing': [0, 'never']

  },
  'globals': {
    'fetch': false
  }
}
