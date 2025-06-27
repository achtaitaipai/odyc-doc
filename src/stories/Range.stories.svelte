<script module>
	import { Range } from '$lib'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Ui/Range',
		component: Range,
		tags: ['autodocs'],
		argTypes: {}
	})
	let value = $state(0)
</script>

<Story name="Primary" asChild>
	<div class="m-2">
		<Range label="Range {value}:" bind:value class="mx-auto w-60" />
	</div>
</Story>
