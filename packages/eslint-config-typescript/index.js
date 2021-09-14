const basic = require('@gavin/eslint-config-basic');

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    extends: ['@gavin/eslint-config-basic', 'plugin:@typescript-eslint/recommended'],
    overrides: basic.overrides,
    rules: {
        'no-useless-constructor': 'off',
    },
};

exports.module = config;
