var jestConfig = {
    collectCoverage: false,
    rootDir: 'app',
    testDirectoryName: "tests",
    verbose: true,
    unmockedModulePathPatterns: [
      "./node_modules/"
    ]
  };

module.exports = jestConfig;
