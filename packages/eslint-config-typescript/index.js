const basic = require('@gavin-fabric/eslint-config-basic');

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    extends: ['@gavin-fabric/eslint-config-basic', 'plugin:@typescript-eslint/recommended'],
    overrides: basic.overrides,
    rules: {
        'no-useless-constructor': 'off',
    },
};

module.exports = config;
