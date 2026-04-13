<script lang="ts">
	import Footer from '$lib/components/footer.svelte';

	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    let { children } = $props();
</script>

<div class="p-8 md:px-72 md:py-12 flex flex-col gap-4">
    <a class="text-center lg:text-left" href="/">
        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
        <span class="underline hover:text-slate-400">Back home</span>
    </a>

    <article>
        {@render children()}
    </article>
</div>

<Footer />
