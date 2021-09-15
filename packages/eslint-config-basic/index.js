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
    extends: ['standard', 'plugin:import/recommended', 'prettier'],
    plugins: ['prettier'],
    settings: {
        'import/resolver': {
            node: {extensions: ['.js', '.ts', '.d.ts']},
        },
    },
    overrides: [
        {
            files: ['*.d.ts'],
            rules: {
                'import/no-duplicates': 'off',
            },
        },
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
    rules: {},
};

module.exports = config;
