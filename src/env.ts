import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	BAND_ID: {
		description: 'Directus item ID for the link aggregator to display',
		schema: (value) => value
	},
	PUBLIC_DIRECTUS_URL: {
		public: true,
		schema: (value) => value || 'https://directus.herhoffer.net'
	},
	PUBLIC_PLAUSIBLE_URL: {
		public: true,
		schema: (value) => value || 'https://plausible.herhoffer.net'
	}
});
