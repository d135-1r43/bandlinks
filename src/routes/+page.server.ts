// @ts-expect-error Provided by Svelte
import type { PageLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: PageLoad = async ({ fetch: fetch }) => {

	const bandId: string = env.BAND_ID;

	const jsonResponse: Response = await fetch(
		`https://directus.herhoffer.net/items/link_aggregator/`+ bandId + `?fields=*.*&sort=links.sort`
	);

	const json: unknown = await jsonResponse.json();

	// @ts-expect-error Directus is not typesafe...
	const heroImageUuid: string = json.data.background_image.id;
	const heroImageFileResponse: Response = await fetch(
		`https://directus.herhoffer.net/files/` + heroImageUuid
	);
	const fileJson: unknown = await heroImageFileResponse.json();

	// @ts-expect-error Provided by Svelte
	return { aggregator: json.data, hero: fileJson.data };
};