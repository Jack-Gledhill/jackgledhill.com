<script>
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    let { icon } = $props();
</script>

<FontAwesomeIcon {icon} fixedWidth />