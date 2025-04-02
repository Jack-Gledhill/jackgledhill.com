import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
		const res = await fetch("/content/index.json", {
				method: 'GET',
		});

		return await res.json();
}