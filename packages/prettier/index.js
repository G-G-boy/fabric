/**
 * @type {import('prettier').Options}
 */
const options = {
    trailingComma: 'all',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    endOfLine: 'auto',
    printWidth: 100,
    bracketSpacing: false,
    endOfLine: 'lf',
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
            files: '.prettierrc',
            options: {
                parser: 'json',
            },
        },
    ],
};

module.exports = options;
