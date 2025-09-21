<script lang="ts">
	interface Props {
		impressUrl: string;
		currentYear?: number;
	}

	let { impressUrl, currentYear }: Props = $props();

	const displayYear = $derived(currentYear ?? new Date().getFullYear());
</script>

<footer class="footer items-center p-4 bg-black text-neutral-content">
	<div class="items-center grid-flow-col">
		<p aria-label="Copyright year">©&nbsp;{displayYear}</p>
	</div>
	<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
