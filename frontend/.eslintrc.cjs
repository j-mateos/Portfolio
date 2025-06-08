module.exports = {
    extends: ['standard'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'space-before-function-paren': ['error', 'always'],
        indent: ['error', 4],
        'no-unused-imports/no-unused-imports': 'off'
    }
}
