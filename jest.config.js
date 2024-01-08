module.exports = {
  verbose: true,
  // NOTE: this need to run jest inside src/repo project (for more details: https://github.com/facebook/jest/issues/8006)
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { rootMode: "upward" }],
  },
};
