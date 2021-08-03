// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  roots: ['<rootDir>/__test__', '<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!<rootDir>/src/main/*.js'
  ],
  coverageDirectory: 'coverage',

  testMatch: ['***/src/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)']

}
