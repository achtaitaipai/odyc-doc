<script lang="ts">
	import { afterNavigate } from '$app/navigation'
	import { page } from '$app/state'
	import { defaultLang, getLangFromUrl, MediaQuery, slugify } from '$lib'
	import { click_outside } from '$lib/actions/clickOutside'
	import { fade, type TransitionConfig } from 'svelte/transition'
	import { twMerge } from 'tailwind-merge'
	import { docSummary } from '../../../content/doc/summary'

	type Props = {
		isOpen: boolean
	}

	let { isOpen = $bindable() }: Props = $props()
	let lang = $derived(getLangFromUrl(page.url))
	afterNavigate(() => (isOpen = false))

	function slideLeft(
		node: Element,
		{ delay = 0, duration = 300, easing = (t) => t }: Partial<TransitionConfig> = {}
	): TransitionConfig {
		const style = getComputedStyle(node)
		const transform = style.transform === 'none' ? '' : style.transform
		return {
			delay,
			duration,
			easing,
			css: (t) => `
			transform: ${transform} translateX(${-(1 - t) * 100}%);
		`
		}
	}
</script>

{#snippet item(category: string, post: string, title: string)}
	{@const urlPrefix = lang === defaultLang ? '' : '/' + lang}
	{@const url = urlPrefix + '/doc/' + slugify(category) + '/' + slugify(post)}
	<li>
		<a
			href={url}
			class={twMerge(
				'text-base-content/70 hover:text-accent hover:underline',
				page.url.pathname === url && 'text-accent underline '
			)}
			>{title}
		</a>
	</li>
{/snippet}

<MediaQuery query="(width>=64rem)">
	{#snippet children(matches)}
		{#if isOpen && !matches}
			<div class="bg-base-100/40 fixed inset-0 backdrop-blur-sm" transition:fade></div>
		{/if}
		{#if matches || isOpen}
			<nav
				class="bg-base-100 border-border text-base-content fixed top-[var(--header-height)] left-0 z-10 w-2xs overflow-auto border-r px-8 pt-8 pb-8 lg:sticky lg:block"
				use:click_outside={() => (isOpen = false)}
				transition:slideLeft
			>
				<ul class="space-y-6">
					{#each docSummary as category}
						<li class="">
							<h2 class="font-bold">{category[lang]}</h2>
							<ul class="mt-1 space-y-0.5">
								{#each category.items as post}
									{@render item(category[defaultLang], post[defaultLang], post[lang])}
								{/each}
							</ul>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
	{/snippet}
</MediaQuery>

<style>
	nav {
		height: calc(100dvh - var(--header-height));
	}
</style>
