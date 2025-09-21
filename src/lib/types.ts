export interface DirectusFile {
	id: string;
	width?: number;
	height?: number;
	description?: string;
	filename_download: string;
	type: string;
}

export interface Link {
	id: string;
	caption: string;
	url: string;
	font_awesome_font: string;
	font_awesome_icon_name: string;
	sort: number;
}

export interface LinkAggregator {
	id: string;
	title: string;
	tagline: string;
	tag_line: string;
	theme_color: string;
	impress_url: string;
	favicon: string;
	background_image: DirectusFile;
	logo_image: DirectusFile;
	links: Link[];
}

export interface DirectusResponse<T> {
	data: T;
}

export interface PageData {
	aggregator: LinkAggregator;
	hero: DirectusFile;
	host: string;
}

export interface LayoutData {
	aggregator: LinkAggregator;
	host: string;
}
