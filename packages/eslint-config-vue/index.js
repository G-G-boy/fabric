/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    extends: [
        'plugin:vue/base',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        '@gavin-fabric/eslint-config-typescript',
    ],
    plugins: ['vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        parser: {
            js: 'espree',
            ts: '@typescript-eslint/parser',
            '<template>': 'espree',
        },
    },
};
