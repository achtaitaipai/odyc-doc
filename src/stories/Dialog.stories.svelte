<script module>
	import { Dialog } from '$lib'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Ui/Dialog',
		component: Dialog,
		tags: ['autodocs'],
		argTypes: {}
	})

	let open = $state(false)
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" asChild>
	<button class="m-2 border p-1 dark:text-white" onclick={() => (open = true)}>Open</button>
	<Dialog bind:open>
		<div class="p-2">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore officia, minus
				quibusdam aperiam corrupti quo dolores possimus exercitationem libero, iste quis facere illo
				tempore! Repellat corporis totam eligendi adipisci!
			</p>
		</div>
	</Dialog>
</Story>
