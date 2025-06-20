<script lang="ts">
	import { afterNavigate } from '$app/navigation'
	import { page } from '$app/state'
	import { getFirstDocPost, getLangFromUrl, SelectLanguage, Shortcut, useTranslations } from '$lib'
	import { AlignRight, Github, Moon, Search as SearchIcon, Sun, X } from '@steeze-ui/lucide-icons'
	import { Icon } from '@steeze-ui/svelte-icon'
	import { fade } from 'svelte/transition'
	import { twMerge } from 'tailwind-merge'
	import Search from './Search.svelte'

	type Props = {}

	let {}: Props = $props()
	let lang = $derived(getLangFromUrl(page.url))
	let urlPrefix = $derived(page.params.lang ? '/' + page.params.lang : '')

	let links = $derived([
		{
			label: useTranslations(lang)('nav.doc'),
			url: getFirstDocPost(page.url),
			base: urlPrefix + '/doc'
		},
		{ label: useTranslations(lang)('nav.playground'), url: urlPrefix + '/playground' }
	])

	let isMenuOpen = $state(false)
	let isSearchOpen = $state(false)

	afterNavigate(() => {
		isMenuOpen = false
	})

	function toggleTheme() {
		document.firstElementChild?.classList.toggle('dark')
		const isDark = document.firstElementChild?.classList.contains('dark')
		localStorage.setItem('theme', isDark ? 'dark' : 'light')
	}
</script>

<header
	class="bg-base-100/90 border-border/30 iems-center text-base-content sticky top-0 z-30 flex items-center border-b px-4 sm:px-8"
>
	<a href="{urlPrefix}/" class="my-auto flex items-center gap-2">
		<img src="/logo.png" alt="" class="pixelated h-8" />
		<span class="font-pixel text-xl"> Odyc.js </span>
	</a>
	<button
		class="text-base-content/80 hover:text-base-content ml-auto cursor-pointer p-1 md:hidden"
		onclick={() => (isSearchOpen = true)}
		aria-label={useTranslations(lang)('header.search')}
	>
		<Icon src={SearchIcon} class="size-4" />
	</button>
	<button
		onclick={() => (isSearchOpen = true)}
		class="text-base-content/70 hover:text-base-content border-border mx-12 hidden w-72 cursor-pointer items-center gap-2 rounded-md border px-3 py-2 md:flex"
	>
		<Icon src={SearchIcon} class="text-base-content !size-4" />
		<span class="">{useTranslations(lang)('header.search')}</span>
		<Shortcut defaultShortcut="ctrl K" macShortcut="⌘ K" class="ml-auto text-base" />
	</button>

	<button
		class="text-base-content/80 hover:text-base-content ml-4 cursor-pointer p-1 md:hidden"
		onclick={() => (isMenuOpen = true)}
		aria-label={useTranslations(lang)('header.menu')}
	>
		<Icon src={AlignRight} class="size-5" />
	</button>
	<nav class="ml-auto hidden items-center gap-4 md:flex">
		{#each links as { url, label, base }}
			<a
				href={url}
				class={twMerge(
					'text-base-content/80 hover:text-base-content cursor-pointer p-2 transition-colors',
					page.url.pathname.startsWith(base || url) && 'text-accent hover:text-accent'
				)}>{label}</a
			>
		{/each}
		<hr class="border-border h-10 w-1 border-0 border-r" />
		<SelectLanguage />
		<button
			class="text-base-content/80 hover:text-base-content cursor-pointer p-1"
			onclick={toggleTheme}
			aria-label={useTranslations(lang)('header.theme')}
		>
			<Icon src={Sun} class="hidden size-4 dark:block" />
			<Icon src={Moon} class="size-4 dark:hidden" />
		</button>
		<a
			href="https://github.com/achtaitaipai/odyc"
			title="Github"
			class="text-base-content/80 hover:text-base-content cursor-pointer p-1"
			><Icon src={Github} class="size-4" /></a
		>
	</nav>
</header>
{#if isMenuOpen}
	<nav
		transition:fade={{ duration: 100 }}
		class="bg-base-100 fixed top-0 left-0 z-50 flex h-dvh w-full flex-col md:hidden"
	>
		<button
			class="text-base-content/80 hover:text-base-content absolute top-4 right-8 cursor-pointer p-1 md:hidden"
			onclick={() => (isMenuOpen = false)}
			aria-label={useTranslations(lang)('header.theme')}
		>
			<Icon src={X} class="size-5" />
		</button>
		<div class="flex h-full min-h-0 grow flex-col items-center justify-center gap-4">
			{#each links as { url, label, base }}
				<a
					href={url}
					class={twMerge(
						'text-base-content/80 hover:text-base-content cursor-pointer p-2 text-2xl font-bold',
						page.url.pathname.startsWith(base || url) && 'text-accent hover:text-accent'
					)}>{label}</a
				>
			{/each}
		</div>
		<div class="border-border flex w-full justify-end gap-4 border-t px-4 py-2">
			<SelectLanguage placement="top" />
			<button
				class="text-base-content/80 hover:text-base-content cursor-pointer p-1"
				onclick={toggleTheme}
				aria-label={useTranslations(lang)('header.closeMenu')}
			>
				<Icon src={Sun} class="hidden size-4 dark:block" />
				<Icon src={Moon} class="size-4 dark:hidden" />
			</button>
			<a
				href="https://github.com/achtaitaipai/odyc"
				title="Github"
				class="text-base-content/80 hover:text-base-content cursor-pointer p-1"
				><Icon src={Github} class="size-4" /></a
			>
		</div>
	</nav>
{/if}
<Search bind:open={isSearchOpen} />

<style>
	:global(body) {
		--header-height: 4rem;
	}
	header {
		height: var(--header-height);
	}
</style>
