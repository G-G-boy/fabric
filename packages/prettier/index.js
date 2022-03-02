/**
 * @type {import('prettier').Options}
 */
const options = {
    trailingComma: 'all',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    printWidth: 100,
    bracketSpacing: false,
    endOfLine: 'lf',
    vueIndentScriptAndStyle: true,
    overrides: [
        {
            files: '*.md',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ['.prettierrc', '.eslintrc', '.stylelintrc'],
            options: {
                parser: 'json',
            },
        },
    ],
};

module.exports = options;
