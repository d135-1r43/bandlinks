<script lang="ts">
	import type { PageData } from './$types';
	import { MetaTags } from 'svelte-meta-tags';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const currentYear = new Date().getFullYear();

	function getImageUrl(uuid: string): string {
		return 'https://directus.herhoffer.net/assets/' + uuid;
	}
</script>

<MetaTags
	title={data.aggregator.title}
	description={data.aggregator.tag_line}
	openGraph={{
    title: data.aggregator.title,
    description: data.aggregator.tag_line,
    images: [
      {
        url: getImageUrl(data.aggregator.background_image.id),
        width: data.hero.width,
        height: data.hero.height,
        alt: data.hero.description
      }
    ],
    siteName: data.aggregator.title
  }}
/>

<div class="hero min-h-screen" style="background-image: url({getImageUrl(data.aggregator.background_image.id)})">
	<div class="hero-overlay bg-opacity-20"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1>
				<img class="mb-5 mt-15" src="{getImageUrl(data.aggregator.logo_image.id)}" alt="{data.aggregator.title}" />
			</h1>
			<p class="mb-20 text-2xl tracking-widest uppercase font-thin">{data.aggregator.tagline}</p>
			{#each data.aggregator.links as link}
				<a class="btn btn-block mb-5 opacity-75 shadow-2xl shadow-inner" href="{link.url}">
					<i class="{link.font_awesome_font} {link.font_awesome_icon_name} text-2xl"></i>
					<span class="tracking-widest">{link.caption}</span>
				</a>
			{/each}
		</div>
	</div>
</div>

<footer class="footer items-center p-4 bg-black text-neutral-content">
	<div class="items-center grid-flow-col">
		<p>©&nbsp;{currentYear}</p>
	</div>
	<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		Jurisdiction: Germany
		<a href="{data.aggregator.impress_url}">
			<span>Impressum & Datenschutzerklärung</span>
		</a>
	</div>
</footer>