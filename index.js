module.exports = {
  "extends": ["standard", "plugin:react/recommended"],
  "rules": {
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "semi": ["error", "always"],
    "import/no-unresolved": [2, { commonjs: true, amd: true }]
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "babel-module": {}
    }
  }
};
