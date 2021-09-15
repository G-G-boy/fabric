/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    extends: [
        'plugin:react/recommended',
        '@gavin-fabric/eslint-config-typescript',
        '"plugin:testing-library/react"',
    ],
    plugins: ['react-hooks'],
    settings: {
        react: {
            version: '17.0',
        },
    },
    rules: {
        //react
        'react/jsx-uses-vars': 'warn',
        //react-hooks
        'react-hooks/rules-of-hooks': 'error',
    },
};

module.exports = config;
