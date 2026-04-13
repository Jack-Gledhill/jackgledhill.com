<script>
	import Footer from '$lib/components/footer.svelte';
    import Hero from '$lib/components/hero.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	let { children } = $props();
</script>

<div class="p-4 lg:p-16">
    <Hero />

    <Navbar />

    <div class="w-full bg-slate-800 border-1 border-slate-700 rounded-b-lg lg:rounded-tr-lg p-4 lg:p-8">
        {@render children()}
    </div>
</div>

<Footer />