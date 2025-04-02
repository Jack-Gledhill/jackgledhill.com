<script>
    import { isDevelopment } from '$lib/utils';
</script>

{#if isDevelopment()}
    <div class="bg-black text-white w-full py-2 px-4 lg:px-16 text-sm lg:text-base">
        ⚠️ You're currently accessing a live development version of this website. If you're here by
        mistake, please <a
        class="text-blue-600 hover:text-blue-400 underline"
        href="https://jackgledhill.com">click here</a>
    </div>
{/if}