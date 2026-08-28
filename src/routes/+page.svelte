<script lang="ts">
    import { Card, Footer, Hero, Navbar } from '$lib/components';

    import { page } from '$app/state';
    let { data } = $props();
</script>

<div class="p-4 lg:p-16">
    <Hero />
    <Navbar />

    <div class="w-full bg-slate-800 border border-slate-700 rounded-b-lg lg:rounded-tr-lg p-4 lg:p-8">
        <div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-8">
            {#if page.url.hash === "#events"}
                {#each data.events as c (c.title)}
                    <Card {...c} />
                {/each}
            {:else if page.url.hash === "#projects"}
                {#each data.projects as c (c.title)}
                    <Card {...c} />
                {/each}
            {:else if page.url.hash === "#research"}
                {#each data.research as c (c.title)}
                    <Card {...c} />
                {/each}
            {:else}
                {#each data.committees as c (c.title)}
                    <Card {...c} />
                {/each}
            {/if}
        </div>
    </div>
</div>

<Footer />