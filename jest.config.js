module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  moduleDirectories: [
    'node_modules/',
    'src/',
  ],
  setupFilesAfterEnv: [
    './src/__setup__/setupTests.ts',
  ],
  moduleNameMapper: {
    '^\\/(.*)': '$1',
  },
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!normalize)',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
    'src/**/*.{jsx,tsx}': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    '**/__styled__/**': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
