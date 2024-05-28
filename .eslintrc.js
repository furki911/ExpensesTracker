module.exports = {
  root: true,
  extends: "@react-native-community",

  rules: {
    quotes: ["error", "double"],
    "react/react-in-jsx-scope": "off", // Disable the rule since React 17+ does not require React to be in scope
  },
};
