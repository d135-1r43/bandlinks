import { env } from '$env/dynamic/public';

const DIRECTUS_URL = env.PUBLIC_DIRECTUS_URL || 'https://directus.herhoffer.net';

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
