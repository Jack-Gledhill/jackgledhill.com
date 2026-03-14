<script>
	import '/src/app.css';
	import { page } from '$app/state';

	import Hero from '$lib/components/hero.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	let { children } = $props();
</script>

<div class="p-4 lg:p-16">
    <Hero metadata={page.data.hero} />

    <Navbar />

    <div class="w-full bg-slate-800 rounded-b-lg lg:rounded-tr-lg border-1 border-slate-700 p-8 flex flex-col gap-8">
        {@render children()}
    </div>
</div>