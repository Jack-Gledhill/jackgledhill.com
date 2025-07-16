<script>
    import Icon from '$lib/components/icons/icon.svelte';

    import { faGithub } from '@fortawesome/free-brands-svg-icons';

    const { href } = $props();
</script>

<Icon icon={faGithub} href={`https://github.com/${href}`} ariaLabel="GitHub" />