module.exports = {
    extends: ['standard'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    ignorePatterns: [
        'github/',
        'docker/',
        'node_modules/'
    ],
    rules: {
        'space-before-function-paren': ['error', 'always'],
        indent: ['error', 4]
    },
    plugins: ['vitest'],
    overrides: [
        {
            files: ['**/*.test.js', '**/*.test.jsx'],
            env: {
                browser: true,
                es2021: true
            },
            globals: {
                describe: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                vi: 'readonly'
            }
        }
    ]
}
