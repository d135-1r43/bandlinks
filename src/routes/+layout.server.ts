import type { LayoutServerLoad } from './$types';
import type { DirectusResponse, LinkAggregator } from '$lib/types';
import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

const DIRECTUS_URL = env.PUBLIC_DIRECTUS_URL || 'https://directus.herhoffer.net';

export const load: LayoutServerLoad = async ({ fetch, url }) => {
	const bandId: string = env.BAND_ID;

	if (!bandId) {
		throw error(500, 'BAND_ID environment variable is not set');
	}

	try {
		const jsonResponse: Response = await fetch(`${DIRECTUS_URL}/items/link_aggregator/${bandId}`);

		if (!jsonResponse.ok) {
			throw error(jsonResponse.status, 'Failed to fetch aggregator data');
		}

		const json: DirectusResponse<LinkAggregator> = await jsonResponse.json();

		return { aggregator: json.data, host: url.host };
	} catch (err) {
		console.error('Error loading aggregator data:', err);
		throw error(500, 'Failed to load page data');
	}
};
