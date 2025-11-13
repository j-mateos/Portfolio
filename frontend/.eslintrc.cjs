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
            env: {
                'vitest-globals/env': true
            }
        }
    ]
}
