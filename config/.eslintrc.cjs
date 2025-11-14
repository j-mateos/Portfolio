module.exports = {
    extends: ['standard'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'space-before-function-paren': ['error', 'always'],
        indent: ['error', 4]
    },
    overrides: [
        {
            files: ['**/*.test.js', '**/*.test.jsx'],
            globals: {
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly'
            }
        }
    ]
}
