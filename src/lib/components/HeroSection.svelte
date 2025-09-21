<script lang="ts">
	import type { LinkAggregator, DirectusFile } from '$lib/types';
	import { getAssetUrl, preloadImage } from '$lib/utils';
	import { onMount } from 'svelte';
	import LinkButton from './LinkButton.svelte';

	interface Props {
		aggregator: LinkAggregator;
		hero: DirectusFile;
	}

	let { aggregator, hero }: Props = $props();

	const backgroundImageUrl = $derived(getAssetUrl(aggregator.background_image.id));
	const logoImageUrl = $derived(getAssetUrl(aggregator.logo_image.id));

	onMount(async () => {
		try {
			await Promise.all([preloadImage(backgroundImageUrl), preloadImage(logoImageUrl)]);
		} catch (error) {
			console.warn('Failed to preload images:', error);
		}
	});
</script>

<div
	class="hero min-h-screen"
	style="background-image: url({backgroundImageUrl})"
	role="banner"
	aria-label="Hero section with {aggregator.title} branding"
>
	<div class="hero-overlay bg-opacity-20"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="sr-only">{aggregator.title}</h1>
			<img
				class="mb-5 mt-15 mx-auto"
				src={logoImageUrl}
				alt={aggregator.title}
				width={hero.width}
				height={hero.height}
				loading="eager"
				decoding="sync"
			/>
			<p class="mb-20 text-2xl tracking-widest uppercase font-thin">
				{aggregator.tagline}
			</p>
			<nav aria-label="Social media links" class="space-y-5">
				{#each aggregator.links as link (link.id)}
					<LinkButton {link} />
				{/each}
			</nav>
		</div>
	</div>
</div>
