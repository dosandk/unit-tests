module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  // NOTE: this need to run jest inside src/repo project (for more details: https://github.com/facebook/jest/issues/8006)
  setupFilesAfterEnv: ["./jest-setup-files-after-env.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { rootMode: "upward" }],
  },
};
