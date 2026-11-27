import { PUBLIC_DIRECTUS_URL } from '$app/env/public';

const DIRECTUS_URL = PUBLIC_DIRECTUS_URL;

export function getAssetUrl(uuid: string): string {
	return `${DIRECTUS_URL}/assets/${uuid}`;
}

export function preloadImage(src: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve();
		img.onerror = reject;
		img.src = src;
	});
}
