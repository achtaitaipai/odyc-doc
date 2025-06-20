<script lang="ts">
	import { fade } from 'svelte/transition'
	import type { PageProps } from './$types'
	import Pagination from './Footer.svelte'
	import Toc from './Toc.svelte'
	import { Prose, useTranslations } from '$lib'
	import { page } from '$app/state'

	let { data }: PageProps = $props()

	let wrapper: HTMLElement | undefined = $state()
	let t = useTranslations(page.params.lang)
</script>

<svelte:head>
	<title>{data.title} • {t('nav.doc')} • Odyc.js</title>
</svelte:head>

<main class="flex justify-center">
	<article transition:fade id="main-content" class="pt-12 pb-12" bind:this={wrapper}>
		{#key data.Content}
			<Prose pagefindBody class="mx-auto">
				<data.Content />
			</Prose>
		{/key}
		<Pagination filePath={data.path} />
	</article>
	<aside class="sticky top-[var(--header-height)] hidden h-screen w-2xs pt-16 xl:block">
		{#key data.metadata.toc}
			<Toc toc={data.metadata.toc} />
		{/key}
	</aside>
</main>
