const basic = require('@gavin-fabric/eslint-config-basic');

const tsconfigPath = './tsconfig.json';

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    extends: ['@gavin-fabric/eslint-config-basic', 'plugin:@typescript-eslint/recommended'],
    settings: {
        'import/resolver': {
            typescript: {
                project: tsconfigPath,
            },
        },
    },
    overrides: [
        {
            files: ['*.d.ts'],
            rules: {
                'import/no-duplicates': 'off',
            },
        },
        ...basic.overrides,
    ],
    rules: {
        'no-useless-constructor': 'off',

        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};

module.exports = config;
