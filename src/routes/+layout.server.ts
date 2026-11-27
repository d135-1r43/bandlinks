import type { LayoutServerLoad } from './$types';
import type { DirectusResponse, LinkAggregator } from '#lib/types.ts';
import { BAND_ID } from '$app/env/private';
import { PUBLIC_DIRECTUS_URL } from '$app/env/public';
import { error } from '@sveltejs/kit';

const DIRECTUS_URL = PUBLIC_DIRECTUS_URL;

export const load: LayoutServerLoad = async ({ fetch, url }) => {
	const bandId = BAND_ID;

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
