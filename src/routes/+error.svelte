<script lang="ts">
	import { page } from '$app/stores';

	const errorCode = $derived($page.status || 500);
	const errorMessage = $derived($page.error?.message || 'An unexpected error occurred');
</script>

<svelte:head>
	<title>Error {errorCode} - Bandlinks</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-base-200">
	<div class="text-center space-y-6 p-8">
		<div class="space-y-2">
			<h1 class="text-6xl font-bold text-error">{errorCode}</h1>
			<h2 class="text-2xl font-semibold">Oops! Something went wrong</h2>
			<p class="text-lg text-base-content/70 max-w-md">
				{errorMessage}
			</p>
		</div>

		<div class="space-y-4">
			<button
				class="btn btn-primary"
				onclick={() => window.location.reload()}
				aria-label="Reload the page"
			>
				Try Again
			</button>
			<a href="/" class="btn btn-outline" aria-label="Return to homepage">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 mr-2"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
						clip-rule="evenodd"
					></path>
				</svg>
				Return Home
			</a>
		</div>
	</div>
</div>
