<script lang="ts">
    import type { LayoutProps } from './$types';
    import { page } from '$app/state';

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import {
        faCalendarDays,
        faUserTie,
        faArrowLeft,
        faGlobeEurope
    } from '@fortawesome/free-solid-svg-icons';
    import {
        faDiscord,
        faGithub,
        faInstagram,
        faLinkedin
    } from '@fortawesome/free-brands-svg-icons';

    import Footer from '$lib/components/footer.svelte';

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
            @apply text-4xl leading-20 text-center;
        }

        article h2 {
            @apply text-2xl leading-20;
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

<div class="w-full h-72 bg-center bg-no-repeat bg-cover border-b-1 border-slate-600" style={`background-image: url(${page.data.banner});`}></div>

<div class="lg:grid lg:grid-cols-4 lg:min-h-screen">
    <div class="lg:col-span-1 p-12 border-b-1 lg:border-b-0 lg:border-r-1 border-slate-600 leading-loose md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:gap-4">
        <div class="md:col-span-1">
            <img class="w-1/2 mx-auto rounded-3xl" src={page.data.logo} alt={`${page.data.name} logo`} />
            <p class="text-center font-bold text-xl max-md:py-8 md:max-lg:pt-8 lg:py-8">{page.data.name}</p>
        </div>

        <div class="md:col-span-1">
            <p><FontAwesomeIcon icon={faCalendarDays} fixedWidth />
                {page.data.start} {#if page.data.end} - {page.data.end} {/if}
            </p>

            {#if page.data.position}
                <p><FontAwesomeIcon icon={faUserTie} fixedWidth /> {page.data.position}</p>
            {/if}

            {#if page.data.links.discord}
                <p class="truncate"><FontAwesomeIcon icon={faDiscord} fixedWidth />
                    <a class="underline hover:text-slate-400" href={`https://discord.gg/${page.data.links.discord}`} target="_blank">
                        discord.gg/{page.data.links.discord}
                    </a>
                </p>
            {/if}

            {#if page.data.links.instagram}
                <p class="truncate"><FontAwesomeIcon icon={faInstagram} fixedWidth />
                    <a class="underline hover:text-slate-400" href={`https://www.instagram.com/${page.data.links.instagram}`} target="_blank">
                        {page.data.links.instagram}
                    </a>
                </p>
            {/if}

            {#if page.data.links.linkedin}
                <p class="truncate"><FontAwesomeIcon icon={faLinkedin} fixedWidth />
                    <a class="underline hover:text-slate-400" href={`https://www.linkedin.com/company/${page.data.links.linkedin}`} target="_blank">
                        {page.data.links.linkedin}
                    </a>
                </p>
            {/if}

            {#if page.data.links.github}
                <p class="truncate"><FontAwesomeIcon icon={faGithub} fixedWidth />
                    <a class="underline hover:text-slate-400" href={`https://github.com/${page.data.links.github}`} target="_blank">
                        {page.data.links.github}
                    </a>
                </p>
            {/if}

            {#if page.data.links.website}
                <p class="truncate"><FontAwesomeIcon icon={faGlobeEurope} fixedWidth />
                    <a class="underline hover:text-slate-400" href={`https://${page.data.links.website}`} target="_blank">
                        {page.data.links.website}
                    </a>
                </p>
            {/if}
        </div>
    </div>

    <div class="lg:col-span-3 p-8 md:p-12 bg-slate-800">
        <a href="/">
            <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
            <span class="underline hover:text-slate-400">Back home</span>
        </a>

        <article>
            {@render children()}
        </article>
    </div>
</div>

<Footer />