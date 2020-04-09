module.exports = {
	"roots": [
	  "<rootDir>/src"
	],
	"transform": {
	  "^.+\\.(ts|tsx)$": "ts-jest"
	},
	"moduleFileExtensions": [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"node"
	  ],
	  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	  "moduleNameMapper": {
		"\\.(css|less|scss|sss|style)$": "<rootDir>/node_modules/jest-css-modules",
	  },
	  "preset": 'ts-jest',
	"snapshotSerializers": ["enzyme-to-json/serializer"],
	"setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
  }