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
