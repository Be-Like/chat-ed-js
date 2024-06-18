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
      'no-obj-calls': 'error',
      'no-promise-executor-return': 'off',
      'no-prototype-builtins': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-setter-return': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'warn',
      'no-this-before-super': 'error',
      'no-undef': 'error',
      'no-global-assign': 'error',
      'no-redeclare': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable': 'error',
      'no-unreachable-loop': 'warn',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': ['error', {
        disallowArithmeticOperators: true
      }],
      'no-unused-private-class-members': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'error',
      'no-useless-assignment': 'error',
      'no-useless-backreference': 'error',
      'require-atomic-updates': 'error',
      'use-isnan': ['error', {
        enforceForSwitchCase: true,
        enforceForIndexOf: false
      }],
      'valid-typeof': 'error',
      'camelcase': ['error', {
        properties: 'always',
        ignoreDestructuring: true
      }],
      'default-case-last': 'error',
      'default-param-last': 'error',
      'eqeqeq': ['error', 'always', {'null': 'ignore'}],
      'grouped-accessor-pairs': ['warn', 'setBeforeGet'],
      'max-classes-per-file': ['warn', 1],
      'max-depth': ['warn', 4],
      'no-alert': 'warn',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-console': ['error', { // NOTE: this should not be an error for node.js projects because you are frequently logging to the console
        allow: ['warn', 'error']
      }],
      'no-delete-var': 'error',
      'no-div-regex': 'error',
      'no-else-return': ['warn', {
        allowElseIf: false
      }],
      'no-empty': ['error', {
        allowEmptyCatch: true
      }],
      'no-empty-function': ['warn', {
        allow: ['constructors']
      }],
      'no-empty-static-block': 'error',
      'no-eq-null': 'off',
      'no-eval': 'error',
      'no-extend-native': 'off',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-label': 'error',
      'no-implicit-coercion': ['error', {
        boolean: true,
        number: true,
        string: true,
        disallowTemplateShorthand: false
      }],
      'no-implicit-globals': 'warn',
      'no-implied-eval': 'error',
      'no-inline-comments': 'off',
      'no-invalid-this': 'warn',
      'no-iterator': 'error',
      'no-label-var': 'warn',
      'no-labels': 'warn',
      'no-lone-blocks': 'off',
      'no-lonely-if': 'error',
      'no-loop-func': 'warn',
      'no-magic-numbers': ['error', {
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true
      }],
      'no-multi-assign': 'error',
      'no-multi-str': 'warn',
      'no-negated-condition': 'warn',
      'no-nested-ternary': 'error',
      'no-new': 'warn',
      'no-new-func': 'warn',
      'no-new-wrappers': 'warn',
      'no-nonoctal-decimal-escape': 'error',
      'no-object-constructor': 'off',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'warn',
      'no-plusplus': 'off',
      'no-proto': 'error',
      'no-regex-spaces': 'error',
      'no-restricted-exports': 'off',
      'no-restricted-globals': 'off',
      'no-restricted-imports': 'off',
      'no-restricted-properties': 'off',
      'no-restricted-syntax': 'off',
      'no-return-assign': 'warn',
      'no-script-url': 'error',
      'no-sequences': 'warn',
      'no-shadow': 'error',
      'no-shadow-restricted-names': 'error',
      'no-ternary': 'off',
      'no-throw-literal': 'off',
      'no-undef-init': 'warn',
      'no-undefined': 'off',
      'no-underscore-dangle': ['warn', {
        allowAfterThis: true,
        enforceInMethodNames: true,
        enforceInClassFields: true,
        allowInObjectDestructuring: true,
        allowFunctionParams: true
      }],

      // // @stylistic eslint rules
      // // '@stylistic/array-bracket-spacing': ["error", "always", { "arrayInArrays": false}],
      // '@stylistic/js/semi: ['error', {
      //    omitLastInOneLineBlock: true,
      //    omitLastInOneLineClassBody: true,
      //  } // TODO: change .prettierrc.json to require semicolons
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