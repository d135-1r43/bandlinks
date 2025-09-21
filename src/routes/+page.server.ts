import type { PageServerLoad } from './$types';
import type { DirectusResponse, LinkAggregator, DirectusFile } from '$lib/types';
import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch }) => {
	const bandId: string = env.BAND_ID;

	if (!bandId) {
		throw error(500, 'BAND_ID environment variable is not set');
	}

	try {
		const jsonResponse: Response = await fetch(
			`https://directus.herhoffer.net/items/link_aggregator/${bandId}?fields=*.*&sort=links.sort`
		);

		if (!jsonResponse.ok) {
			throw error(jsonResponse.status, 'Failed to fetch aggregator data');
		}

		const json: DirectusResponse<LinkAggregator> = await jsonResponse.json();

		const heroImageUuid: string = json.data.background_image.id;
		const heroImageFileResponse: Response = await fetch(
			`https://directus.herhoffer.net/files/${heroImageUuid}`
		);

		if (!heroImageFileResponse.ok) {
			throw error(heroImageFileResponse.status, 'Failed to fetch hero image data');
		}

		const fileJson: DirectusResponse<DirectusFile> = await heroImageFileResponse.json();

		return { aggregator: json.data, hero: fileJson.data };
	} catch (err) {
		console.error('Error loading page data:', err);
		throw error(500, 'Failed to load page data');
	}
};
