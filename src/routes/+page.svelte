<script lang="ts">
    import { cards } from '$lib/assets';
    import { Card, Footer, Hero, Navbar} from '$lib/components';
    import { DateFormatter } from '$lib/utils';

    import { page } from '$app/state';
    let { data } = $props();
</script>

<div class="p-4 lg:p-16">
    <Hero />
    <Navbar />

    <div class="w-full bg-slate-800 border-1 border-slate-700 rounded-b-lg lg:rounded-tr-lg p-4 lg:p-8">
        <div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-8">
            {#if page.url.hash === "#events"}
                {#each data.events as e (e.title)}
                    <Card
                        title={e.title}
                        subtitle={e.type}
                        draft={e.draft}
                        date={DateFormatter.format(e.date)}
                        logo={cards[e.slug]}
                        links={e.links}>
                        {@render e.content?.()}
                    </Card>
                {/each}
            {:else if page.url.hash === "#projects"}
                {#each data.projects as p (p.title)}
                    <Card
                        title={p.title}
                        subtitle={p.type}
                        draft={p.draft}
                        date={DateFormatter.formatRange(p.date)}
                        logo={cards[p.slug]}
                        links={p.links}
                        tags={p.technologies}>
                        {@render p.content?.()}
                    </Card>
                {/each}
            {:else if page.url.hash === "#research"}
                {#each data.papers as p (p.title)}
                    <Card
                        title={p.title}
                        subtitle={p.journal}
                        draft={p.draft}
                        date={DateFormatter.format(p.date)}
                        tags={p.authors}
                        links={p.links}>
                        {@render p.content?.()}
                    </Card>
                {/each}
            {:else}
                {#each data.committees as c (c.title)}
                    <Card
                        title={c.title}
                        subtitle={c.position}
                        draft={c.draft}
                        date={DateFormatter.formatRange(c.date)}
                        logo={cards[c.slug]}
                        links={c.links}>
                        {@render c.content?.()}
                    </Card>
                {/each}
            {/if}
        </div>
    </div>
</div>

<Footer />