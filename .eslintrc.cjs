module.exports = {
    root: true,

    env: {
        browser: true,
        es2021: true,
    },

    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {jsx: true},
    },

    settings: {
        react: {version: 'detect'},
    },

    plugins: ['react', 'react-hooks', 'vitest', 'prettier'],

    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],

    rules: {
        // Prettier takes care of formatting
        'prettier/prettier': ['error'],

        // Modern React
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',

        // Extra security with hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },

    ignorePatterns: ['github/', 'dist/', 'docker/', 'node_modules/', '.eslintrc.cjs'],

    overrides: [
        {
            files: ['**/*.test.js', '**/*.test.jsx'],
            env: {
                jest: true,
            },
        },
    ],
}
