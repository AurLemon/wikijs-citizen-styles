export default [
	{
		ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
	},
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'no-shadow-restricted-names': 'off',
			'no-unused-vars': 'warn',
		},
	},
]
