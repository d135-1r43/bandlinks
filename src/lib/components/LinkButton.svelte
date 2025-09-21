<script lang="ts">
	import type { Link } from '$lib/types';

	interface Props {
		link: Link;
	}

	let { link }: Props = $props();
</script>

<a
	class="btn btn-block mb-5 opacity-75 shadow-2xl shadow-inner transition-opacity hover:opacity-100 focus:opacity-100"
	href={link.url}
	target="_blank"
	rel="noopener noreferrer"
	aria-label={`Visit ${link.caption}`}
>
	<i class="{link.font_awesome_font} {link.font_awesome_icon_name} text-2xl" aria-hidden="true"></i>
	<span class="tracking-widest">{link.caption}</span>
</a>
