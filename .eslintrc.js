module.exports = {
    "env": {
        "es6": false,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "plugins": [
        "promise"
    ],
    "rules": {
        "indent": [
            "error",
            4,
            {"SwitchCase": 1}
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [
            "off"
        ],
        "no-case-declarations": [
          "off"
        ],
        "prefer-const": [
          "error"
        ],
        "arrow-parens": [
          "error",
          "as-needed"
        ],
        "promise/catch-or-return": "error",
        "promise/param-names": "error",
        "promise/no-return-wrap": "error"
    }
};
