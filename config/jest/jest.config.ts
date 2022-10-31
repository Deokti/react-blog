import path from 'path';

export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  rootDir: '../../',
  moduleNameMapper: {
    // eslint-disable-next-line max-len
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'JestMockSvg.tsx'),
  },
};
