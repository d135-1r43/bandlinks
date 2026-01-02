<script lang="ts">
	interface Props {
		impressUrl: string;
		currentYear?: number;
	}

	let { impressUrl, currentYear }: Props = $props();

	const displayYear = $derived(currentYear ?? new Date().getFullYear());
</script>

<footer class="flex flex-wrap items-center justify-between gap-4 p-4 bg-black text-neutral-content">
	<p aria-label="Copyright year">©&nbsp;{displayYear}</p>
	<div class="flex gap-4 items-center">
		<span>Jurisdiction: Germany</span>
		<a
			href={impressUrl}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Open legal information and privacy policy in new tab"
		>
			Impressum & Datenschutzerklärung
		</a>
	</div>
</footer>
