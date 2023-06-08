module.exports = {
	env: {
		node: true,
		es2022: true,
		browser: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:astro/recommended",
		"plugin:react-hooks/recommended",
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
	},
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {},
		},
	],
};
