module.exports = {
  roots: ['<rootDir>'],
  globals: {
    'ts-jest': {
      packageJson: 'package.json', // This is required for codebuild agents with symlinked node_modules
    },
  },
  testEnvironment: 'node', // Suggested by mongoose https://mongoosejs.com/docs/jest.html
  transform: {
    '^.+\\.ts?$': 'ts-jest', // Required for typescript
  },
  resetMocks: true,
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testRegex: '(/tests/.*|(.|/)).spec.ts?$', // Look for tests only on .spec.ts files
  coveragePathIgnorePatterns: ['node_modules', 'test', 'tests'], // Don't include anything else in coverage
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
