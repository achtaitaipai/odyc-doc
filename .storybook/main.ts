import type { StorybookConfig } from '@storybook/sveltekit'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
	addons: [
		{
			name: '@storybook/addon-essentials',
			options: {
				docs: false
			}
		},
		'@storybook/addon-svelte-csf',
		'@storybook/addon-interactions'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	}
}
export default config
