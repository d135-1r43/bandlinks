<script lang="ts">
	import type { PageData } from '$lib/types';
	import { MetaTags } from 'svelte-meta-tags';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { getAssetUrl } from '$lib/utils';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const ogImageUrl = $derived(getAssetUrl(data.aggregator.background_image.id));
</script>

<MetaTags
	title={data.aggregator.title}
	description={data.aggregator.tag_line}
	openGraph={{
		title: data.aggregator.title,
		description: data.aggregator.tag_line,
		images: [
			{
				url: ogImageUrl,
				width: data.hero.width,
				height: data.hero.height,
				alt: data.hero.description || data.aggregator.title
			}
		],
		siteName: data.aggregator.title
	}}
/>

<HeroSection aggregator={data.aggregator} hero={data.hero} />

<PageFooter impressUrl={data.aggregator.impress_url} />
