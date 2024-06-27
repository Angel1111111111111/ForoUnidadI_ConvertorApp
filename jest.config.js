module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/jest/styleMock.js',
  },
  testEnvironment: 'jest-environment-jsdom',
};
