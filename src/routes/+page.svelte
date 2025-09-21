<script lang="ts">
	import type { PageData } from '$lib/types';
	import { MetaTags } from 'svelte-meta-tags';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const getImageUrl = $derived((uuid: string) => 'https://directus.herhoffer.net/assets/' + uuid);
	const ogImageUrl = $derived(getImageUrl(data.aggregator.background_image.id));
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
