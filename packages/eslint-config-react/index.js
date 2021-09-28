/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    extends: ['plugin:react/recommended', '@gavin-fabric/eslint-config-typescript'],
    plugins: ['react-hooks', 'testing-library'],
    settings: {
        react: {
            version: '17.0',
        },
    },
    overrides: [
        {
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
            extends: ['plugin:testing-library/react'],
        },
    ],
    rules: {
        // react
        'react/jsx-uses-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        // react-hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
};

module.exports = config;
