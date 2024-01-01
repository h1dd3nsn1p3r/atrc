module.exports = (environment = '', file) => {
	/*
	 * Specific options to be passed using the caller config option:
	 * https://babeljs.io/docs/en/options#caller
	 *
	 * The caller options can only be 'boolean', 'string', or 'number' by design:
	 * https://github.com/babel/babel/blob/bd0c62dc0c30cf16a4d4ef0ddf21d386f673815c/packages/babel-core/src/config/validation/option-assertions.js#L122
	 */
	const callerOpts = {
		caller: {
			name: `WP_BUILD_${environment.toUpperCase()}`,
		},
	};
	switch (environment) {
		case 'main':
			// To be merged as a presetEnv option.
			callerOpts.caller.modules = 'commonjs';
			break;
		case 'module':
			// To be merged as a presetEnv option.
			callerOpts.caller.modules = false;
			// To be merged as a pluginTransformRuntime option.
			callerOpts.caller.useESModules = true;

			break;
		default:
			// Preventing measure, this shouldn't happen ever.
			delete callerOpts.caller;
	}
	// Sourcemaps options.
	const sourceMapsOpts = {
		sourceMaps: true,
		sourceFileName: file,
	};

	// Check if the file is a JSX file and apply @babel/preset-react
	const isJSXFile = /\.jsx?$/.test(file);

	return {
		...callerOpts,
		...sourceMapsOpts,
		...(isJSXFile
			? {
					presets: ['@babel/preset-react', '@babel/preset-env'],
					plugins: [
						'@babel/plugin-transform-modules-commonjs',
					] /* Object.defineProperty */,
				}
			: {}),
	};
};
