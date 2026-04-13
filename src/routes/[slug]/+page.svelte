<script lang="ts">
    import { Footer } from '$lib/components';

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

    let { data } = $props();
</script>

<div class="p-8 md:py-12 lg:px-72 flex flex-col gap-4">
    <a class="text-center md:text-left" href="/">
        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
        <span class="underline hover:text-slate-400">Back home</span>
    </a>

    <article>
        {@render data.content?.()}
    </article>
</div>

<Footer />