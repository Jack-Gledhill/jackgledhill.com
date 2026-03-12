<script>
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    import { page } from '$app/state';
    let { children } = $props();
</script>

<style>
    @reference '../../app.css';

    :global {
        article h1,
        article h2,
        article h3,
        article h4,
        article h5,
        article h6 {
            @apply font-bold capitalize;
        }

        article h1 {
            @apply text-4xl leading-20 md:leading-48 text-center;
        }

        article h2 {
            @apply text-2xl leading-20;
        }

        article h3 {
            @apply text-xl leading-16;
        }

        article > p {
            @apply text-justify my-8;
        }

        article a {
            @apply hover:text-slate-400 underline;
        }

        article ol {
            @apply list-decimal list-inside;
        }

        article ul {
            @apply list-disc list-inside;
        }
    }
</style>

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
