// @ts-expect-error Provided by Svelte
import type { PageLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: PageLoad = async ({ fetch: fetch, url: url }) => {

	const bandId: string = env.BAND_ID;

	const jsonResponse: Response = await fetch(
		`https://directus.herhoffer.net/items/link_aggregator/`+ bandId
	);

	const json: unknown = await jsonResponse.json();

	// @ts-expect-error Provided by Svelte
	return { aggregator: json.data, host: url.host };
};