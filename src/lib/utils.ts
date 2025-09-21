export function getAssetUrl(uuid: string): string {
	return `https://directus.herhoffer.net/assets/${uuid}`;
}

export function isValidUrl(url: string): boolean {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
}

export function sanitizeHtml(html: string): string {
	const div = document.createElement('div');
	div.textContent = html;
	return div.innerHTML;
}

export function preloadImage(src: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve();
		img.onerror = reject;
		img.src = src;
	});
}
