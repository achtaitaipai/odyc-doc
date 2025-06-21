<script lang="ts">
	import { page } from '$app/state'
	import { getLangFromUrl, Header, useTranslations } from '$lib'
	import { AlignLeft } from '@steeze-ui/lucide-icons'
	import { Icon } from '@steeze-ui/svelte-icon'
	import type { Snippet } from 'svelte'
	import Summary from './Summary.svelte'

	type Props = {
		children: Snippet
	}

	let { children }: Props = $props()
	let lang = $derived(getLangFromUrl(page.url))

	let isMenuOpen = $state(false)
</script>

<Header />
<div
	class="border-border bg-base-100 sticky top-[var(--header-height)] z-10 border-b px-8 py-3 lg:hidden"
>
	<button
		class="text-base-content/70 hover:text-base-content flex cursor-pointer items-center gap-2"
		onclick={() => (isMenuOpen = true)}
		><Icon src={AlignLeft} class="size-4" />{useTranslations(lang)('nav.doc')}</button
	>
</div>
<div class=" flex">
	<Summary bind:isOpen={isMenuOpen} />
	<main class="grow">
		{@render children()}
	</main>
</div>
