<script lang="ts">
	import Announcement from '$lib/components/announcement.svelte';
	import Footer from '$lib/components/footer.svelte';

	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    import type { LayoutProps } from '../../../.svelte-kit/types/src/routes/about/$types.js';
    let { children }: LayoutProps = $props();
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

<Announcement />

<div class="p-4 md:p-16 lg:px-48">
    <a href="/static">
        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
        <span class="underline hover:text-slate-400">Back home</span>
    </a>

    <article>
        {@render children()}
    </article>
</div>

<Footer />