<script>
	import Back from '$lib/components/back.svelte';

	let { data } = $props();
</script>

<style>
    @reference '../../../app.css';

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
            @apply text-4xl leading-20 text-center;
        }

        article h2 {
            @apply text-2xl leading-20;
        }

        article h3 {
            @apply text-xl leading-16;
        }

        article > p {
            @apply text-justify my-4;
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

<Back href="/projects">
    Back to Projects
</Back>

<article>
    {@render data.default()}
</article>