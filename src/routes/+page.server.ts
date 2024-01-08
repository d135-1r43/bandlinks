// @ts-expect-error Provided by Svelte
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch: fetch }) => {
	const jsonResponse: Response = await fetch(
		`https://directus.herhoffer.net/items/link_aggregator/1?fields=*.*&sort=links.sort`
	);
	const json: unknown = await jsonResponse.json();
	// @ts-expect-error Provided by Svelte
	return { aggregator: json.data };
};
