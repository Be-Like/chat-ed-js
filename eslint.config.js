import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import jsdoc from 'eslint-plugin-jsdoc'
import pluginCypress from 'eslint-plugin-cypress/flat'

import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname })

export default [
  // js.configs.recommended, // TODO: reimplement this once done configuring all the rules - in case new rules become reommended with future updates
  ...pluginVue.configs['flat/essential'],
  ...compat.extends('@vue/eslint-config-prettier/skip-formatting'),
  pluginCypress.configs.recommended,
  {
    files: [
      '**/*.js',
      '**/*.vue',
      '**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
      'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
      'cypress/support/**/*.{js,ts,jsx,tsx}'
    ],
    ignores: ['.gitignore'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      jsdoc
    },
    rules: {
      // Standard ESLint Rules
      'array-callback-return': ['error', {
        allowImplicit: false,
        checkForEach: false,
        allowVoid: false
      }],
      'constructor-super': 'error',
      'for-direction': 'error',
      'getter-return': ['error', { allowImplicit: false }],
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': ['error', 'except-parens'],
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'error',
      'no-constant-condition': ['error', {
        checkLoops: 'allExceptWhileTrue'
      }],
      'no-constructor-return': 'off',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': ['error', {
        includeExports: true
      }],
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-ex-assign': 'error',
      'no-fallthrough': ['error', {
        allowEmptyCase: true,
      }],
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'off',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-object-calls': 'error',
      'no-promise-executor-return': 'off',
      'no-prototype-builtins': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-setter-return': 'error',
      'no-sparse-arrays': 'error',


      // // @stylistic eslint rules
      // // '@stylistic/array-bracket-spacing': ["error", "always", { "arrayInArrays": false}],
      //
      // // JSDoc rules
      // 'jsdoc/check-access': 1,
      // 'jsdoc/check-alignment': 1,
      // // Turn on after https://github.com/eslint/eslint/issues/14745 resolved
      // 'jsdoc/check-examples': 0,
      // 'jsdoc/check-indentation': 0,
      // 'jsdoc/check-line-alignment': [
      //   1,
      //   'always',
      //   {
      //     'tags': [
      //       'arg',
      //       'argument',
      //       'callback',
      //       'param',
      //       'property',
      //       'prop',
      //       'returns',
      //       'return'
      //     ],
      //     'customSpacings': {
      //       'postDelimiter': 1,
      //       'postTag': 1,
      //       'postType': 1,
      //       'postName': 2
      //     }
      //   }
      // ],
      // 'jsdoc/check-param-names': 1,
      // 'jsdoc/check-property-names': 1,
      // 'jsdoc/check-syntax': 1,
      // 'jsdoc/check-tag-names': 1,
      // 'jsdoc/check-types': 1,
      // 'jsdoc/check-values': 1,
      // 'jsdoc/empty-tags': 1,
      // 'jsdoc/implements-on-classes': 1,
      // 'jsdoc/match-description': 1,
      // 'jsdoc/no-bad-blocks': 1,
      // 'jsdoc/no-defaults': 1,
      // 'jsdoc/no-types': 0,
      // 'jsdoc/no-undefined-types': 1,
      // 'jsdoc/require-description': 1,
      // 'jsdoc/require-description-complete-sentence': 0,
      // 'jsdoc/require-example': 0,
      // 'jsdoc/require-file-overview': 1,
      // 'jsdoc/require-hyphen-before-param-description': 0,
      // 'jsdoc/require-jsdoc': [
      //   1,
      //   {
      //     publicOnly: {
      //       ancestorsOnly: false,
      //       cjs: true,
      //       esm: true,
      //       window: true
      //     },
      //     require: {
      //       ArrowFunctionExpression: true,
      //       ClassDeclaration: true,
      //       ClassExpression: true,
      //       FunctionDeclaration: true,
      //       FunctionExpression: true,
      //       MethodDefinition: true
      //     }
      //   }
      // ],
      // 'jsdoc/require-param': 1,
      // 'jsdoc/require-param-description': 1,
      // 'jsdoc/require-param-name': 1,
      // 'jsdoc/require-param-type': 1,
      // 'jsdoc/require-property': 1,
      // 'jsdoc/require-property-description': 1,
      // 'jsdoc/require-property-name': 1,
      // 'jsdoc/require-property-type': 1,
      // 'jsdoc/require-returns': 1,
      // 'jsdoc/require-returns-check': 1,
      // 'jsdoc/require-returns-description': 1,
      // 'jsdoc/require-returns-type': 1,
      // 'jsdoc/tag-lines': [
      //   1,
      //   'always',
      //   {
      //     count: 0,
      //     startLines: 1,
      //     applyToEndTag: false,
      //     tags: {
      //       example: {
      //         count: 1,
      //         lines: 'always'
      //       }
      //     }
      //   }
      // ],
      // 'jsdoc/valid-types': 1
    }
  }
]