const basic = require('@gavin-fabric/eslint-config-basic');

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    extends: ['@gavin-fabric/eslint-config-basic', 'plugin:@typescript-eslint/recommended'],
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
    },
};

module.exports = config;
