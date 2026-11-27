<script lang="ts">
	import '../app.css';
	import type { LayoutData } from '#lib/types.ts';
	import { getAssetUrl } from '#lib/utils.ts';
	import { PUBLIC_PLAUSIBLE_URL } from '$app/env/public';

	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

	const faviconUrl = $derived(getAssetUrl(data.aggregator.favicon));
	const themeColor = $derived(data.aggregator.theme_color);
	const plausibleUrl = PUBLIC_PLAUSIBLE_URL;
	const plausibleScriptId = $derived(data.aggregator.plausible_script_id);
</script>

<svelte:head>
	<link rel="icon" href={faviconUrl} />
	<title>{data.aggregator.title}</title>
	<meta name="theme-color" content={themeColor} />
	<style>
		:root {
			--theme-color: {themeColor};
		}
	</style>
	{#if plausibleScriptId}
		<!-- Privacy-friendly analytics by Plausible -->
		<script async src="{plausibleUrl}/js/{plausibleScriptId}.js"></script>
		<script>
			window.plausible =
				window.plausible ||
				function () {
					(plausible.q = plausible.q || []).push(arguments);
				};
			plausible.init =
				plausible.init ||
				function (i) {
					plausible.o = i || {};
				};
			plausible.init();
		</script>
	{/if}
</svelte:head>

{@render children?.()}
