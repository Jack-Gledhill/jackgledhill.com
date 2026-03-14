<script>
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    import { page } from '$app/state';
    let { children } = $props();
</script>

<div class="p-8 md:p-12 border-b-1 border-slate-600 bg-slate-800">
    <a href="/">
        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
        <span class="underline hover:text-slate-400">Back home</span>
    </a>

    <h1 class="font-bold text-4xl leading-20 text-center">{page.data.metadata.title}</h1>
</div>

<div class="py-8 md:px-72 md:py-12">
    <article>
        {@render children()}
    </article>
</div>
