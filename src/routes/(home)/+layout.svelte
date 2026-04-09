<script>
	import '/src/app.css';
	import { page } from '$app/state';

    import Announcement from '$lib/components/announcement.svelte';
    import Footer from '$lib/components/footer.svelte';
	import Hero from '$lib/components/home/hero.svelte';
	import Navbar from '$lib/components/home/navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
    <title>{page.data.metadata.title}</title>
    <meta name="description" content={page.data.metadata.description} />
    <meta name="keywords" content={page.data.metadata.keywords.join(", ")} />

    <!-- OpenGraph -->
    <meta property="og:title" content={page.data.metadata.title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jackgledhill.com" />
    <meta property="og:description" content={page.data.metadata.description} />
    <meta property="og:site_name" content="Jack Gledhill" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:image" content="/twittercard.webp" />
    <meta property="og:image:alt" content="Photo of Jack at ICHack 2026" />
    <meta property="og:image:width" content="5906" />
    <meta property="og:image:height" content="3937" />

    <!-- Twitter -->
    <meta name="twitter:title" content={page.data.metadata.title} />
    <meta name="twitter:description" content={page.data.metadata.description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://jackgledhill.com" />
    <meta name="twitter:creator" content="@thejackgledhill" />
    <meta name="twitter:image" content="/twittercard.webp" />
    <meta name="twitter:image:alt" content="Photo of Jack at ICHack 2026" />
    <meta name="twitter:image:width" content="5906" />
    <meta name="twitter:image:height" content="3937" />
</svelte:head>

<Announcement />

<div class="p-4 lg:p-16">
    <Hero metadata={page.data.hero} />

    <Navbar />

    <div class="w-full bg-slate-800 rounded-b-lg lg:rounded-tr-lg border-1 border-slate-700 p-8 flex flex-col gap-8">
        {@render children()}
    </div>
</div>

<Footer />