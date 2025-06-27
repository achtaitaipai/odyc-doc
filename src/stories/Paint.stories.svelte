<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import { Paint } from '$lib'

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Ui/Paint',
		component: Paint,
		tags: ['autodocs'],
		argTypes: {}
	})
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" asChild>
	<div class="flex h-screen items-center justify-center">
		<div class="border border-gray-200">
			<Paint />
		</div>
	</div>
</Story>
