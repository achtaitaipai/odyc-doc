<script lang="ts">
	import { page } from '$app/state'
	import { getLangFromUrl, useTranslations } from '$lib'
	import { ChevronLeft, ChevronRight } from '@steeze-ui/heroicons'
	import { Icon } from '@steeze-ui/svelte-icon'
	import EmblaCarousel from 'embla-carousel'
	import { onMount } from 'svelte'
	import games from '../../content/gallery.json'

	let wrapper: HTMLElement | undefined = $state()
	let carousel: ReturnType<typeof EmblaCarousel>

	onMount(() => {
		if (wrapper) {
			carousel = EmblaCarousel(wrapper, { loop: true })
		}
	})
	const pageLang = getLangFromUrl(page.url)

	const t = useTranslations(page.params.lang)
</script>

<div class="overflow-hidden" bind:this={wrapper}>
	<div class="flex gap-4 py-12 ps-8">
		{#each games as { img, url, lang }}
			{#if !lang || lang === pageLang}
				<a class="group min-w-0 shrink-0 grow-0" href={url} target="_blank">
					<img
						alt=""
						src="/gallery/{img}"
						class="h-[14rem] w-auto rotate-6 transition-transform duration-300 group-odd:-rotate-6 group-hover:scale-105 sm:h-[28rem]"
					/>
				</a>
			{/if}
		{/each}
	</div>
</div>
<div class="mt-4 flex justify-center gap-6">
	<button
		class="text-base-content/80 hover:text-base-content cursor-pointer"
		title={t('previous')}
		onclick={() => carousel.scrollPrev()}><Icon src={ChevronLeft} class="size-7" /></button
	>
	<button
		class="text-base-content/80 hover:text-base-content cursor-pointer"
		title={t('next')}
		onclick={() => carousel.scrollNext()}><Icon src={ChevronRight} class="size-7" /></button
	>
</div>

<div class="container mx-auto mt-4 flex justify-end px-2">
	<a
		href="https://github.com/achtaitaipai/odyc-doc/issues/new?template=suggest-a-new-game.yml"
		class="text-base-content/70 hover:text-accent flex items-center gap-1.5 transition"
		target="_blank"
	>
		<span>{t('home.submit-game')}</span>
	</a>
</div>
