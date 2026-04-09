<script>
	import '/src/app.css';
	import { page } from '$app/state';

    import Footer from '$lib/components/footer.svelte';
    import Head from '$lib/components/head.svelte';
    import Hero from '$lib/components/home/hero.svelte';
	import Navbar from '$lib/components/home/navbar.svelte';

	let { children } = $props();
</script>

<Head {...page.data.metadata} />

<div class="p-4 lg:p-16">
    <Hero metadata={page.data.hero} />

    <Navbar />

    <div class="w-full bg-slate-800 rounded-b-lg lg:rounded-tr-lg border-1 border-slate-700 p-8 flex flex-col gap-8">
        {@render children()}
    </div>
</div>

<Footer />