export interface DirectusFile {
	readonly id: string;
	readonly width?: number;
	readonly height?: number;
	readonly description?: string;
	readonly filename_download: string;
	readonly type: string;
}

export interface Link {
	readonly id: string;
	readonly caption: string;
	readonly url: string;
	readonly font_awesome_font: string;
	readonly font_awesome_icon_name: string;
	readonly sort: number;
}

export interface LinkAggregator {
	readonly id: string;
	readonly title: string;
	readonly tagline: string;
	readonly tag_line: string;
	readonly theme_color: string;
	readonly impress_url: string;
	readonly favicon: string;
	readonly background_image: DirectusFile;
	readonly logo_image: DirectusFile;
	readonly links: readonly Link[];
}

export interface DirectusResponse<T> {
	readonly data: T;
}

export interface PageData {
	readonly aggregator: LinkAggregator;
	readonly hero: DirectusFile;
	readonly host: string;
}

export interface LayoutData {
	readonly aggregator: LinkAggregator;
	readonly host: string;
}
