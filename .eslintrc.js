module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8, // or 2017
  },
  globals: {},
  rules: {},
  extends: ["prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  env: {
    node: true, // Node.js global variables and Node.js scoping.
    es6: true, // enable all ECMAScript 6 features except for modules.
  },
};
