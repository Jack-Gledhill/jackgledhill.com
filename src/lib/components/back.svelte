<script>
    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    let { href, children } = $props();
</script>

<a {href} data-sveltekit-noscroll>
    <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
    <span class="underline hover:text-slate-400">
        {@render children()}
    </span>
</a>