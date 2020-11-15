module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['@react-native-community', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'no-eval': 'off',
  },
}
