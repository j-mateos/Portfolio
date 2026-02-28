module.exports = {
    root: true,

    ignorePatterns: ['github/', 'dist/', 'docker/', 'node_modules/', '.eslintrc.cjs'],

    overrides: [
        {
            files: ['**/*.js', '**/*.jsx'],

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
                'prettier/prettier': ['error'],
                'react/react-in-jsx-scope': 'off',
                'react/prop-types': 'off',
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'warn',
            },
        },
        {
            files: ['**/*.test.js', '**/*.test.jsx'],
            env: {
                jest: true,
            },
        },
    ],
}
