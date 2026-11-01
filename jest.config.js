module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.[jt]sx?$': ['ts-jest', { tsconfig: { allowJs: true, module: 'commonjs' } }],
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/test/database-tool.test.ts'],
};
