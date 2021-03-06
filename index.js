module.exports = {
	extends: [
		'eslint:recommended',
		'airbnb',
		'airbnb/hooks',
		'plugin:jasmine/recommended',
		'plugin:json/recommended',
		'plugin:jsdoc/recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb-typescript',
	],
	plugins: ['jasmine'],
	env: {
		es2021: true,
		worker: true,
		serviceworker: true,
		node: true,
		jasmine: true,
	},
	settings: {
		jsdoc: {
			mode: 'typescript',
			tagNamePreference: {
				fires: {
					replacement: 'emits',
				},
			},
		},
	},
	parserOptions: {
		project: './tsconfig.eslint.json',
		extraFileExtensions: ['.json'],
	},
	rules: {
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				CallExpression: {
					arguments: 'first',
				},
				FunctionDeclaration: {
					parameters: 'first',
				},
				FunctionExpression: {
					parameters: 'first',
				},
				SwitchCase: 1,
			},
		],
		'react/jsx-indent': [
			'error',
			'tab',
			{
				indentLogicalExpressions: true,
				checkAttributes: true,
			},
		],
		'react/jsx-indent-props': ['error', 'tab'],
		'@typescript-eslint/lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true,
				exceptAfterOverload: true,
			},
		],
		'space-in-parens': [
			'error',
			'always',
			{
				exceptions: ['[]', 'empty'],
			},
		],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 2,
			},
		],
		'import/newline-after-import': [
			'error',
			{
				count: 2,
			},
		],
		'padding-line-between-statements': 0,
		'@typescript-eslint/padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: [
					'export',
					'return',
					'function',
					'class',
					'default',
					'interface',
					'type',
					'const',
					'let',
				],
			},
			{
				blankLine: 'always',
				prev: [
					'export',
					'const',
					'let',
				],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: 'export',
				next: 'export',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let'],
				next: ['const', 'let'],
			},
		],
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'explicit',
			},
		],
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: true,
				allowHigherOrderFunctions: true,
				allowTypedFunctionExpressions: true,
				allowDirectConstAssertionInArrowFunctions: true,
			},
		],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'react/require-default-props': [
			'error',
			{
				ignoreFunctionalComponents: true,
			},
		],
		'jsdoc/check-indentation': 1,
		'jsdoc/check-line-alignment': 1,
		'jsdoc/require-description': 1,
		'jsdoc/require-property-type': 0,
		'jsdoc/require-returns-type': 0,
		'jsdoc/require-param-type': 0,
		'jsdoc/require-jsdoc': [
			'warn',
			{
				publicOnly: true,
				require: {
					FunctionDeclaration: true,
					ClassDeclaration: true,
					MethodDefinition: false,
				},
				checkConstructors: false,
				contexts: [
					'MethodDefinition[accessibility="public"]',
					'PropertyDefinition[accessibility="public"]',
					'TSEnumDeclaration',
				],
				enableFixer: false,
			},
		],
	},
};
