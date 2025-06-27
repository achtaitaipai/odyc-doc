<script module>
	import { Tooltip } from '$lib'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Ui/Tooltip',
		component: Tooltip,
		tags: ['autodocs'],
		argTypes: {}
	})
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" asChild>
	<button class="m-2 text-lg font-bold dark:text-white">Hover Me</button>
	<Tooltip text="lorem ipsum" />
</Story>
