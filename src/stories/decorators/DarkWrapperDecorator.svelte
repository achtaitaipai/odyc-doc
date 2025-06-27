<script lang="ts">
	import type { Snippet } from 'svelte'

	let { children }: { children: Snippet } = $props()
</script>

<div class="dark h-screen bg-gray-950">
	{@render children()}
</div>
