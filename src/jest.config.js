module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      astTransformers: ["jest-preset-angular/InlineHtmlStripStylesTransformer"],
    },
  },
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  //   testEnvironment: "jest-environment-jsdom-thirteen",
  moduleFileExtensions: ["ts", "html", "js", "json"],
  moduleNameMapper: {
    "^src/(.*)$": "./src/$1",
    "^app/(.*)$": "./src/app/$1",
    "^assets/(.*)$": "./src/assets/$1",
    "^environments/(.*)$": "./src/environments/$1",
  },
  transformIgnorePatterns: ["node_modules/.*"],
  snapshotSerializers: [
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
