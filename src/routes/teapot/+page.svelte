<script lang="ts">
    import { pageProps } from '$lib/errors.config.ts';
    import Error from '$lib/components/error.svelte';

    const code: number = 418;
</script>

<Error {...pageProps[code]} status={code} />