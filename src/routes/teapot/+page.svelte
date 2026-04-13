<script lang="ts">
    import { Error } from '$lib/components';
    import { pageProps } from '$lib/errors.config.ts';

    const code: number = 418;
</script>

<Error {...pageProps[code]} status={code} />