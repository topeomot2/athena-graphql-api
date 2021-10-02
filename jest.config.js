module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/tests/**',
    '!**/data/**',
    '!**/tmp/**',
    '!**/src/config/**',
    '!**/scripts/**',
    '!**/dist/**',
    '!<rootDir>/src/server.ts',
    '!<rootDir>/jest.config.js',
  ],
  coverageDirectory: '<rootDir>/tmp/coverage',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '**/tests/**/*.spec.(ts|js)',
    '**/tests/**/*.test.(ts|js)',
    '**/__tests__/**/*.spec.(ts|js)',
    '**/__tests__/**/*.test.(ts|js)',
  ],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
};
