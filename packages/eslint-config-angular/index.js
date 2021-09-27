/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    extends: ['@gavin-fabric/eslint-config-typescript'],
    overrides: [
        {
            files: ['*.html'],
            plugins: ['@angular-eslint/template'],
            extends: ['plugin:@angular-eslint/template/recommended'],
        },
        {
            files: ['*.ts'],
            plugins: ['@angular-eslint'],
            extends: [
                'plugin:@angular-eslint/recommended',
                '@gavin-fabric/eslint-config-typescript',
            ],
            rules: {
                // angular-eslint
                '@angular-eslint/no-empty-lifecycle-method': 'off',
            },
        },
    ],
};
