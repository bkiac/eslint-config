module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},

	env: {
		browser: true,
	},

	plugins: ["@typescript-eslint", "import", "react-hooks"],

	extends: [
		"airbnb-typescript",
		"airbnb/hooks",

		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",

		"./rules/native.js",
		"./rules/import.js",
		"./rules/typescript.js",
		"./rules/react.js",

		"prettier",

		"./rules/prettier-override.js",
	],
}
