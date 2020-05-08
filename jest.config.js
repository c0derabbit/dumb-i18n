module.exports = {
  rootDir: './',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!jest.config.js',
    '!dist/**',
    '!coverage/**',
  ],
  testPathIgnorePatterns: ['node_modules', '.cache', 'dist'],
  globals: {
    __PATH_PREFIX__: '',
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
};
