module.exports = {
    testEnvironment: 'node',
    verbose: true,
    testMatch: [
        '**/tests/**/*.test.js',
        '**/*.e2e.test.js'
    ],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
}