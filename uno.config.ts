import { defineConfig } from 'unocss';

export default defineConfig({
	shortcuts: [
		// SIZES
		// Padding, Margin, Gap
		[
			/^(p|m|px|py|pt|pr|pb|pl|mx|my|mt|mr|mb|ml|gap|gap-x|gap-y)-(small|large|default)$/,
			([, d, size]) => {
				switch (size) {
					case 'small':
						return `${d}-2`;
					case 'large':
						return `${d}-6`;
					case 'default':
					default:
						return `${d}-4`;
				}
			}
		]
	]
});
