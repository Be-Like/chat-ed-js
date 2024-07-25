import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import jsdoc from 'eslint-plugin-jsdoc'

import pluginVue from 'eslint-plugin-vue'

import pluginCypress from 'eslint-plugin-cypress/flat'

import stylisticJs from '@stylistic/eslint-plugin-js'

import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const fileURL = fileURLToPath(import.meta.url)
const directory = dirname(fileURL)
const compat = new FlatCompat({ baseDirectory: directory })

const INDENT_SPACING = 2

const INLINE_ELEMENTS = ["a", "abbr", "audio", "b", "bdi", "bdo", "canvas", "cite", "code", "data", "del", "dfn", "em", "i", "iframe", "ins", "kbd", "label", "map", "mark", "noscript", "object", "output", "picture", "q", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "svg", "time", "u", "var", "video"]

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...compat.extends('@vue/eslint-config-prettier/skip-formatting'),
  pluginCypress.configs.recommended,
  {
    files: ['**/*.js', '**/*.vue', '**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
    ignores: ['.gitignore'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      jsdoc,
      '@stylistic/js': stylisticJs
    },
    rules: {
      // START: Standard ESLint Rules
      'array-callback-return': [
        'error',
        {
          allowImplicit: false,
          checkForEach: false,
          allowVoid: false
        }
      ],
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
      'no-constant-condition': [
        'error',
        {
          checkLoops: 'allExceptWhileTrue'
        }
      ],
      'no-constructor-return': 'off',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': [
        'error',
        {
          includeExports: true
        }
      ],
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-ex-assign': 'error',
      'no-fallthrough': [
        'error',
        {
          allowEmptyCase: true
        }
      ],
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
      'no-unsafe-optional-chaining': [
        'error',
        {
          disallowArithmeticOperators: true
        }
      ],
      'no-unused-private-class-members': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'error',
      'no-useless-assignment': 'error',
      'no-useless-backreference': 'error',
      'require-atomic-updates': 'error',
      'use-isnan': [
        'error',
        {
          enforceForSwitchCase: true,
          enforceForIndexOf: false
        }
      ],
      'valid-typeof': 'error',
      'camelcase': [
        'error',
        {
          properties: 'always',
          ignoreDestructuring: true
        }
      ],
      'default-case-last': 'error',
      'default-param-last': 'error',
      'eqeqeq': ['error', 'always', {'null': 'ignore'}],
      'grouped-accessor-pairs': ['warn', 'setBeforeGet'],
      'max-classes-per-file': ['warn', 1],
      'max-depth': ['warn', 4],
      'no-alert': 'warn',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-console': [
        'error',
        { // NOTE: this should not be an error for node.js projects because you are frequently logging to the console
          allow: ['warn', 'error']
        }
      ],
      'no-delete-var': 'error',
      'no-div-regex': 'error',
      'no-else-return': [
        'warn',
        {
          allowElseIf: false
        }
      ],
      'no-empty': [
        'error',
        {
          allowEmptyCatch: true
        }
      ],
      'no-empty-function': [
        'warn',
        {
          allow: ['constructors']
        }
      ],
      'no-empty-static-block': 'error',
      'no-eq-null': 'off',
      'no-eval': 'error',
      'no-extend-native': 'off',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-label': 'error',
      'no-implicit-coercion': [
        'error',
        {
          boolean: true,
          number: true,
          string: true,
          disallowTemplateShorthand: false
        }
      ],
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
      'no-magic-numbers': [
        'error',
        {
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true
        }
      ],
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
      'no-underscore-dangle': [
        'warn',
        {
          allowAfterThis: true,
          enforceInMethodNames: true,
          enforceInClassFields: true,
          allowInObjectDestructuring: true,
          allowFunctionParams: true
        }
      ],
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'warn',
      'no-unused-labels': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'warn',
      'no-useless-concat': 'warn',
      'no-useless-constructor': 'warn',
      'no-useless-escape': 'error',
      'no-useless-rename': 'warn',
      'no-useless-return': 'warn',
      'no-var': 'warn',
      'no-void': 'off',
      'no-warning-comments': [
        'warn',
        {
          terms: ['todo', 'fixme', 'bug'],
          location: 'start'
        }
      ],
      'no-with': 'error',
      'object-shorthand': 'warn',
      'one-var': 'off',
      'operator-assignment': 'off',
      'prefer-arrow-callback': 'warn',
      'prefer-const': [
        'warn',
        {
          'destructuring': 'all',
          'ignoreReadBeforeAssign': false
        }
      ],
      'prefer-destructuring': [
        'warn',
        {
          'object': true,
          'array': false
        }
      ],
      'prefer-exponentiation-operator': 'off',
      'prefer-named-capture-group': 'off',
      'prefer-numeric-literals': 'off',
      'prefer-object-has-own': 'off',
      'prefer-object-spread': 'off',
      'prefer-regex-literals': 'off',
      'prefer-rest-params': 'warn',
      'prefer-spread': 'warn',
      'prefer-template': 'warn',
      'radix': 'off',
      'require-await': 'warn',
      'require-unicode-regexp': 'warn',
      'require-yield': 'error',
      'sort-imports': [
        'warn',
        {
          'ignoreCase': false,
          'ignoreDeclarationSort': false,
          'ignoreMemberSort': false,
          'memberSyntaxSortOrder': ['none', 'all', 'single', 'multiple'],
          'allowSeparatedGroups': true
        }
      ],
      'sort-keys': 'off',
      'sort-vars': 'off',
      'strict': 'off',
      'symbol-description': 'warn',
      'vars-on-top': 'warn',
      'yoda': 'off',
      // END: Standard eslint rules

      // START: Vue Specific eslint rules
      "vue/comment-directive": [
        "error",
        {
          "reportUnusedDisableDirectives": false
        }
      ],
      "vue/multi-word-component-names": [
        "warn",
        {
          "ignores": []
        }
      ],
      'vue/no-arrow-functions-in-watch': 'error',
      'vue/no-async-in-computed-properties': 'error',
      'vue/no-child-content': 'error',
      'vue/no-computed-properties-in-data': 'error',
      'vue/no-deprecated-data-object-declaration': 'error',
      'vue/no-deprecated-destroyed-lifecycle': 'error',
      'vue/no-deprecated-dollar-listeners-api': 'error',
      'vue/no-deprecated-dollar-scopedslots-api': 'error',
      'vue/no-deprecated-events-api': 'error',
      'vue/no-deprecated-filter': 'error',
      'vue/no-deprecated-functional-template': 'error',
      'vue/no-deprecated-html-element-is': 'error',
      'vue/no-deprecated-inline-template': 'error',
      'vue/no-deprecated-props-default-this': 'error',
      'vue/no-deprecated-router-link-tag-prop': 'error',
      'vue/no-deprecated-slot-attribute': 'error',
      'vue/no-deprecated-scope-attribute': 'error',
      'vue/no-deprecated-slot-scope-attribute': 'error',
      'vue/no-deprecated-v-is': 'error',
      'vue/no-deprecated-v-on-native-modifier': 'error',
      'vue/no-deprecated-v-on-number-modifiers': 'error',
      'vue/no-deprecated-vue-config-keycodes': 'error',
      'vue/no-dupe-keys': 'error',
      'vue/no-dupe-v-else-if': 'error',
      'vue/no-duplicate-attributes': 'error',
      'vue/no-export-in-script-setup': 'error',
      'vue/no-expose-after-await': 'error',
      'vue/no-lifecycle-after-await': 'error',
      'vue/no-multiple-template-root': 'off',
      'vue/no-mutating-props': [
        'error',
        {
          'shallowOnly': false
        }
      ],
      "vue/no-parsing-error": [
        "error",
        {
          "abrupt-closing-of-empty-comment": true,
          "absence-of-digits-in-numeric-character-reference": true,
          "cdata-in-html-content": true,
          "character-reference-outside-unicode-range": true,
          "control-character-in-input-stream": true,
          "control-character-reference": true,
          "eof-before-tag-name": true,
          "eof-in-cdata": true,
          "eof-in-comment": true,
          "eof-in-tag": true,
          "incorrectly-closed-comment": true,
          "incorrectly-opened-comment": true,
          "invalid-first-character-of-tag-name": true,
          "missing-attribute-value": true,
          "missing-end-tag-name": true,
          "missing-semicolon-after-character-reference": true,
          "missing-whitespace-between-attributes": true,
          "nested-comment": true,
          "noncharacter-character-reference": true,
          "noncharacter-in-input-stream": true,
          "null-character-reference": true,
          "surrogate-character-reference": true,
          "surrogate-in-input-stream": true,
          "unexpected-character-in-attribute-name": true,
          "unexpected-character-in-unquoted-attribute-value": true,
          "unexpected-equals-sign-before-attribute-name": true,
          "unexpected-null-character": true,
          "unexpected-question-mark-instead-of-tag-name": true,
          "unexpected-solidus-in-tag": true,
          "unknown-named-character-reference": true,
          "end-tag-with-attributes": true,
          "duplicate-attribute": true,
          "end-tag-with-trailing-solidus": true,
          "non-void-html-element-start-tag-with-trailing-solidus": false,
          "x-invalid-end-tag": true,
          "x-invalid-namespace": true
        }
      ],
      'vue/no-ref-as-operand': 'error',
      "vue/no-reserved-component-names": [
        "error",
        {
          "disallowVueBuiltInComponents": true,
          "disallowVue3BuiltInComponents": true
        }
      ],
      "vue/no-reserved-keys": [
        "error",
        {
          "reserved": [],
          "groups": []
        }
      ],
      "vue/no-reserved-props": [
        "error",
        {
          "vueVersion": 3
        }
      ],
      'vue/no-shared-component-data': 'error',
      'vue/no-template-key': 'error',
      'vue/no-textarea-mustache': 'error',
      "vue/no-unused-components": [
        "error",
        {
          "ignoreWhenBindingPresent": true
        }
      ],
      "vue/no-unused-vars": 'error',
      'vue/no-use-computed-property-like-method': 'error',
      "vue/no-use-v-if-with-v-for": [
        "error",
        {
          "allowUsingIterationVar": true
        }
      ],
      'vue/no-useless-template-attributes': 'error',
      'vue/no-v-for-template-key-on-child': 'error',
      'vue/no-v-for-template-key': 'off',
      'vue/no-v-text-v-html-on-component': [
        'error',
        {
          'allow': []
        }
      ],
      'vue/no-watch-after-await': 'error',
      'vue/prefer-import-from-vue': 'warn',
      'vue/require-component-is': 'error',
      'vue/require-prop-type-constructor': 'error',
      'vue/require-render-return': 'error',
      'vue/require-slots-as-functions': 'error',
      'vue/require-toggle-inside-transition': 'error',
      'vue/require-v-for-key': 'error',
      'vue/require-valid-default-prop': 'error',
      'vue/return-in-computed-property': 'error',
      'vue/return-in-emits-validator': 'error',
      'vue/use-v-on-exact': 'error',
      'vue/valid-attribute-name': 'error',
      'vue/valid-define-emits': 'error',
      'vue/valid-define-props': 'error',
      'vue/valid-next-tick': 'error',
      'vue/valid-template-root': 'error',
      'vue/valid-v-bind': 'error',
      'vue/valid-v-cloak': 'error',
      'vue/valid-v-else-if': 'error',
      'vue/valid-v-else': 'error',
      'vue/valid-v-for': 'error',
      'vue/valid-v-html': 'error',
      'vue/valid-v-if': 'error',
      'vue/valid-v-is': 'error',
      'vue/valid-v-memo': 'error',
      'vue/valid-v-model': 'error',
      'vue/valid-v-on': 'error',
      'vue/valid-v-once': 'error',
      'vue/valid-v-pre': 'error',
      'vue/valid-v-show': 'error',
      'vue/valid-v-slot': 'error',
      'vue/valid-v-text': 'error',
      'vue/attribute-hyphenation': ['warn', 'always'],
      'vue/component-definition-name-casing': ['warn', 'PascalCase'],
      'vue/first-attribute-linebreak': [
        'warn',
        {
          'singleline': 'beside',
          'multiline': 'below'
        }
      ],
      'vue/html-closing-bracket-newline': [
        'warn',
        {
          'singleline': 'never',
          'multiline': 'always',
          'selfClosingTag': {
            'singleline': 'never',
            'multiline': 'always'
          }
        }
      ],
      'vue/html-closing-bracket-spacing': [
        'warn',
        {
          'startTag': 'never',
          'endTag': 'never',
          'selfClosingTag': 'always'
        }
      ],
      'vue/html-end-tags': 'error',
      'vue/html-indent': [
        'warn',
        INDENT_SPACING,
        {
          'attribute': 1,
          'baseIndent': 1,
          'closeBracket': 0,
          'alignAttributesVertically': true,
          'ignores': []
        }
      ],
      'vue/html-quotes': ['error', 'double'],
      'vue/html-self-closing': [
        'warn',
        {
          'html': {
            'void': 'always',
            'normal': 'always',
            'component': 'always'
          },
          'svg': 'always',
          'math': 'always'
        }
      ],
      'vue/max-attributes-per-line': [
        'warn',
        {
          'singleline': 5,
          'multiline': 1
        }
      ],
      'vue/multiline-html-element-content-newline': [
        'warn',
        {
          'ignoreWhenEmpty': true,
          'ignores': ['pre', 'textarea', ...INLINE_ELEMENTS],
          'allowEmptyLines': true
        }
      ],
      'vue/mustache-interpolation-spacing': ['warn', 'always'],
      'vue/no-multi-spaces': [
        'warn',
        {
          'ignoreProperties': true
        }
      ],
      'vue/no-spaces-around-equal-signs-in-attribute': 'error',
      'vue/no-template-shadow': 'error',
      'vue/one-component-per-file': 'warn',
      'vue/prop-name-casing': ['warn', 'camelCase'],
      'vue/require-default-prop': 'warn',
      'vue/require-explicit-emits': 'error',
      'vue/require-prop-types': 'error',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/v-bind-style': [
        'warn',
        'shorthand',
        {
          'sameNameShorthand': 'never'
        }
      ],
      'vue/v-on-event-hyphenation': [
        'warn',
        'always',
        {
          'autofix': true,
          'ignore': []
        }
      ],
      'vue/v-on-style': ['warn', 'shorthand'],
      'vue/v-slot-style': [
        'warn',
        {
          'atComponent': 'v-slot',
          'default': 'shorthand',
          'named': 'shorthand'
        }
      ],
      'vue/attributes-order': 'off',
      'vue/no-lone-template': [
        'error',
        {
          'ignoreAccessible': false
        }
      ],
      'vue/no-multiple-slot-args': 'error',
      'vue/no-v-html': 'off',
      'vue/order-in-components': 'warn',
      'vue/this-in-template': ['error', 'never'],
      'vue/block-lang': 'off',
      'vue/block-order': [
        'warn',
        {
          'order': [ // TODO: configure WebStorm to prebuild vue files in this format
            'template', 'script:not([setup])', 'script[setup]', 'style:not([scoped])', 'style[scoped]'
          ]
        }
      ],
      'vue/block-tag-newline': [
        'warn',
        {
          'singleline': 'consistent',
          'multiline': 'always',
          'maxEmptyLines': 2
        }
      ],
      'vue/component-api-style': ['warn', ['script-setup', 'composition'] ],
      'vue/component-name-in-template-casing': [
        'warn',
        'PascalCase',
        {
          'registeredComponentsOnly': false,
          'ignores': []
        }
      ],
      'vue/component-options-name-casing': ['warn', 'PascalCase'],
      'vue/custom-event-name-casing': ['warn', 'camelCase'],
      'vue/define-macros-order': [
        'warn',
        {
          'order': ['defineModel', 'defineProps', 'defineEmits', 'defineOptions'],
          'defineExposeLast': true
        }
      ],
      'vue/define-props-declaration': ['warn', 'type-based'],
      'vue/html-button-has-type': [
        'warn',
        {
          'button': true,
          'reset': true,
          'submit': true
        }
      ],
      'vue/html-comment-content-newline': [
        'warn',
        {
          'singleline': 'never',
          'multiline': 'always'
        }
      ],
      'vue/html-comment-indent': ['warn', 2],
      'vue/match-component-file-name': [
        'warn',
        {
          'extensions': ['js'],
          'shouldMatchCase': true
        }
      ],
      'vue/new-line-between-multi-line-property': [
        'warn',
        {
          'minLineOfMultilineProperty': 2
        }
      ],
      'vue/no-bare-strings-in-template': 'off',
      'vue/no-boolean-default': 'off',
      'vue/no-deprecated-model-definition': 'error',
      'vue/no-duplicate-attr-inheritance': 'warn',
      'vue/no-empty-component-block': 'warn',
      'vue/no-multiple-objects-in-class': 'error',
      'vue/no-potential-component-option-typo': 'off',
      'vue/no-ref-object-reactivity-loss': 'error',
      'vue/no-required-prop-with-default': [
        'warn',
        {
          'autofix': false
        }
      ],
      'vue/no-restricted-block': 'off',
      'vue/no-restricted-call-after-await': 'off',
      'vue/no-restricted-class': 'off',
      'vue/no-restricted-component-names': 'off',
      'vue/no-restricted-component-options': 'off',
      'vue/no-restricted-custom-event': 'off',
      'vue/no-restricted-html-elements': 'off',
      'vue/no-restricted-props': 'off',
      'vue/no-restricted-static-attribute': 'off',
      'vue/no-restricted-v-bind': 'off',
      'vue/no-restricted-v-on': 'off',
      'vue/no-root-v-if': 'off',
      'vue/no-setup-props-reactivity-loss': 'error',
      'vue/no-static-inline-styles': [
        'warn',
        {
          'allowBinding': false
        }
      ],
      'vue/no-template-target-blank': 'off',
      'vue/no-this-in-before-route-enter': 'warn',
      'vue/no-undef-properties': 'error',
      'vue/no-unused-emit-declarations': 'warn',
      'vue/no-unused-properties': [
        'warn',
        {
          'groups': ['props']
        }
      ],
      'vue/no-unused-refs': 'warn',
      'vue/no-use-v-else-with-v-for': 'off',
      'vue/no-useless-mustaches': 'warn',
      'vue/no-useless-v-bind': 'warn',
      'vue/no-v-text': 'off',
      'vue/padding-line-between-blocks': ['warn', 'always'],
      'vue/padding-line-between-tags': 'off',
      'vue/padding-lines-in-component-definition': [
        'warn',
        {
          'betweenOptions': 'always',
          'withinOption': {
            'emits': 'always',
            'props': 'always',
            'data': 'always',
            'methods': 'always',
            'computed': 'always',
            'watch': 'always'
          },
          'groupSingleLineProperties': true
        }
      ],
      'vue/prefer-define-options': 'off',
      'vue/prefer-prop-type-boolean-first': 'off',
      'vue/prefer-separate-static-class': 'warn',
      'vue/prefer-true-attribute-shorthand': ['warn', 'always'],
      'vue/require-direct-export': 'warn',
      'vue/require-emit-validator': 'warn',
      'vue/require-explicit-slots': 'off',
      'require-expose': 'off',
      'vue/require-macro-variable-name': [
        'warn',
        {
          'defineProps': 'props',
          'defineEmits': 'emit',
          'defineSlots': 'slots',
          'useSlots': 'slots',
          'useAttrs': 'attrs'
        }
      ],
      'vue/require-name-property': 'off', // NOTE: use in component library
      'vue/require-prop-comment': [
        'warn',
        {
          'type': 'JSDoc'
        }
      ],
      'vue/require-typed-object-prop': 'off',
      'vue/require-typed-ref': 'off',
      'vue/script-indent': [
        'warn',
        INDENT_SPACING,
        {
          'baseIndent': 0,
          'switchCase': 0
        }
      ],
      'vue/sort-keys': 'off',
      'vue/static-class-names-order': 'off',
      'vue/v-for-delimiter-style': ['warn', 'in'],
      'vue/v-if-else-key': 'off', // NOT needed in Vue 3
      'vue/v-on-handler-style': ['error', ['method', 'inline-function'] ],
      // TODO: come back to the Vue Extension Rules
      // END: Vue Specific eslint rules

      // START: @stylistic eslint rules
      '@stylistic/js/array-bracket-newline': [
        'warn',
        {
          'multiline': true
        }
      ],
      '@stylistic/js/array-bracket-spacing': [
        'warn',
        'never',
        {
          'arraysInArrays': true
        }
      ],
      '@stylistic/js/array-element-newline': ['warn', 'consistent'],
      '@stylistic/js/arrow-parens': ['warn', 'always'],
      '@stylistic/js/arrow-spacing': 'warn',
      '@stylistic/js/block-spacing': ['warn', 'always'],
      '@stylistic/js/brace-style': ['warn', '1tbs'],
      '@stylistic/js/comma-dangle': ['warn', 'never'],
      '@stylistic/js/comma-spacing': [
        'warn',
        {
          'before': false, 'after': true
        }
      ],
      '@stylistic/js/comma-style': ['warn', 'last'],
      '@stylistic/js/computed-property-spacing': ['warn', 'never'],
      '@stylistic/js/dot-location': ['warn', 'property'],
      '@stylistic/js/eol-last': ['warn', 'always'],
      '@stylistic/js/function-call-argument-newline': ['warn', 'consistent'],
      '@stylistic/js/function-call-spacing': ['warn', 'never'],
      '@stylistic/js/function-paren-newline': ['warn', 'multiline'],
      '@stylistic/js/generator-star-spacing': ['warn', { 'before': false, 'after': true }],
      '@stylistic/js/implicit-arrow-linebreak': ['warn', 'beside'],
      '@stylistic/js/indent': [
        'warn',
        INDENT_SPACING,
        {
          'SwitchCase': 1,
          'VariableDeclarator': 'first',
          'FunctionDeclaration': { 'parameters': 'first' },
          'CallExpression': { 'arguments': 'first' },
          'ArrayExpression': 'first',
          'ObjectExpression': 'first',
          'ImportDeclaration': 'first',
          'flatTernaryExpressions': false,
          'offsetTernaryExpressions': false,
          'ignoreComments': false
        }
      ],
      '@stylistic/js/jsx-quotes': 'off',
      '@stylistic/js/key-spacing': [
        'warn',
        {
          'beforeColon': false,
          'afterColon': true,
          'mode': 'strict'
        }
      ],
      '@stylistic/js/keyword-spacing': [
        'warn',
        {
          'before': true,
          'after': true
        }
      ],
      '@stylistic/js/line-comment-position': 'off',
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/lines-around-comment': [
        'warn',
        {
          'beforeBlockComment': true,
          'afterBlockComment': false,
          'allowBlockStart': true,
          'allowBlockEnd': true,
          'allowObjectStart': true,
          'allowObjectEnd': true,
          'allowArrayStart': true,
          'allowArrayEnd': true,
          'allowClassStart': true,
          'allowClassEnd': true,
          'afterHashbangComment': true
        }
      ],
      '@stylistic/js/lines-between-class-members': [
        'warn',
        {
          'enforce': [{ blankLine: "always", prev: "*", next: "method" }, { blankLine: "always", prev: "method", next: "*" }]
        }
      ],
      '@stylistic/js/max-len': [
        'warn',
        {
          'code': 120,
          'comments': 100,
          'ignoreComments': false,
          'ignoreTrailingComments': true,
          'ignoreUrls': true,
          'ignoreStrings': true,
          'ignoreTemplateLiterals': true,
          'ignoreRegExpLiterals': true
        }
      ],
      '@stylistic/js/max-statements-per-line': ['warn', { 'max': 1 }],
      '@stylistic/js/multiline-comment-style': ['warn', 'starred-block'],
      '@stylistic/js/multiline-ternary': ['warn', 'always-multiline'],
      '@stylistic/js/new-parens': ['error', 'always'],
      '@stylistic/js/newline-per-chained-call': 'off', // Note: this would be far more useful if it had better configuration options
      '@stylistic/js/no-confusing-arrow': 'warn',
      '@stylistic/js/no-extra-parens': 'off',
      '@stylistic/js/no-extra-semi': 'error',
      '@stylistic/js/no-floating-decimal': 'error',
      '@stylistic/js/no-mixed-operators': 'warn',
      '@stylistic/js/no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
      '@stylistic/js/no-multi-spaces': 'off',
      '@stylistic/js/no-multiple-empty-lines': ['warn', { 'max': 3 }],
      '@stylistic/js/no-tabs': 'warn',
      '@stylistic/js/no-trailing-spaces': 'warn',
      '@stylistic/js/no-whitespace-before-property': 'warn',
      '@stylistic/js/nonblock-statement-body-position': ['warn', 'beside']
      // END: @stylistic eslint rules
      // TODO: change .prettierrc.json to require semicolons



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
