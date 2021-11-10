/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    ignorePatterns: ['**/node_modules/*'],
    extends: ['standard', 'plugin:import/recommended', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 2021,
    },
    settings: {
        'import/resolver': {
            node: {extensions: ['.js', '.ts', '.tsx', '.d.ts', '.vue', '.json']},
        },
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
    rules: {
        'no-unused-vars': 'off',
        'no-var': 'error',
        'prefer-arrow-callback': 'warn',
    },
};

module.exports = config;
