const path = require('path');
const root = require('find-root')(process.cwd());

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  root: true,
  // See: https://github.com/babel/babel-eslint/issues/192
  ecmaFeatures: {
    modules: true
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  globals: {
    ENV: true
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [root, path.join(root, 'node_modules')]
      }
    }
  },
  rules: {
    // Possible Errors
    'no-cond-assign': 2,
    'no-console': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,

    // Best Practices
    'accessor-pairs': 0,
    'block-scoped-var': 2,
    complexity: 0,
    'consistent-return': 2,
    curly: [2, 'all'],
    'default-case': 2,
    'dot-notation': 2,
    eqeqeq: 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 0,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': 2,
    'no-process-env': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-void': 2,
    'no-warning-comments': 2,
    'no-with': 2,
    radix: 2,
    'vars-on-top': 2,
    yoda: 2,

    // Strict Mode
    strict: [2, 'never'],

    // Variables
    'init-declarations': 0,
    'no-catch-shadow': 0,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 2,
    'no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    'no-use-before-define': 2,

    // Node.js
    'callback-return': 0,
    'handle-callback-err': 2,
    'no-mixed-requires': 0,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 2,
    'no-restricted-modules': 2,
    'no-sync': 2,

    // Stylistic Issues
    'func-style': 0, // expressions vs declrations?
    'linebreak-style': [2, 'unix'],
    'new-cap': 2,
    'no-lonely-if': 2,
    'no-nested-ternary': 2,
    'no-unneeded-ternary': 2,
    'spaced-comment': [2, 'always'],

    // ECMAScript 6
    'constructor-super': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 0, // enable with babel-plugin-closure-elimination for optimization
    'prefer-const': 2,
    'prefer-spread': 2,
    'prefer-reflect': 0,
    'prefer-template': 2,
    'require-yield': 2,

    // React
    'react/display-name': 0,
    'react/forbid-prop-types': 0,
    'react/no-comment-textnodes': 0,
    'react/no-danger': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/no-render-return-value': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': [2, 'always'],
    'react/prefer-stateless-function': 0, // 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 0,
    'react/require-optimization': 0,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/sort-prop-types': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-curly-spacing': 0, // [2, "never", { "allowMultiline": false }],
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'react/jsx-handler-names': 0, // 2,
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,

    // import errors
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: true,
        ignore: ['.svg$', '^file?']
      }
    ],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2
  },
  plugins: ['react', 'css-modules', 'import'],
  extends: ['plugin:css-modules/recommended', 'prettier']
};
