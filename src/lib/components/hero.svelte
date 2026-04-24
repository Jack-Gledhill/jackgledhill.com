<script lang="ts">
    import { Button } from '$lib/components';
    import { hero } from '$lib/site.config.ts';

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
    import { faEnvelope, faPrint, faRss } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faLinkedin, faOrcid } from '@fortawesome/free-brands-svg-icons';
</script>

<header class="w-full bg-slate-800 rounded-lg border-1 border-slate-700 py-4 mb-4 lg:mb-8">
    <div class="bg-slate-700 grid grid-cols-1 lg:grid-cols-5 2xl:grid-cols-9 gap-y-[1px] lg:gap-y-0 lg:gap-x-[1px]">
        <div class="col-span-1 px-8 max-lg:py-8 content-center bg-slate-800">
            <enhanced:img class="rounded-full shadow-xl md:max-lg:w-1/2 md:max-lg:mx-auto" src={hero.image.src} alt={hero.image.alt} fetchpriority="high" />
        </div>

        <div class="col-span-2 2xl:col-span-4 content-center px-8 max-lg:py-8 bg-slate-800">
            <h1 class="font-bold text-3xl md:text-5xl">{hero.title}</h1>
            <p class="text-xl lg:text-2xl pb-8">{hero.subtitle}</p>

            <div class="grid md:grid-cols-2 gap-8 text-center text-sm">
                <Button colour="blue" href="/cv.pdf" target="_blank">
                    <FontAwesomeIcon icon={faPrint} fixedWidth />
                    Download my CV
                </Button>

                <Button colour="blue" href="https://blog.jackgledhill.com" target="_blank">
                    <FontAwesomeIcon icon={faRss} fixedWidth />
                    Read my blog
                </Button>
            </div>
        </div>

        <div class="col-span-2 2xl:col-span-4 px-8 max-lg:py-8 content-center leading-8 text-sm bg-slate-800 flex flex-col gap-4">
            <section>
                <h2 class="uppercase font-bold text-2xl text-slate-400">Positions</h2>
                <ul class="list-disc list-outside pl-4">
                    {#each hero.positions as p (p.title)}
                        <li>
                            {p.title} @
                            <a class="underline hover:text-slate-400" href={p.href}>{p.company}</a>
                        </li>
                    {/each}
                </ul>
            </section>

            <section>
                <h2 class="uppercase font-bold text-2xl text-slate-400">Contact</h2>
                {@render social(hero.email, faEnvelope, "mailto:" + hero.email)}
                {@render social("github.com/" + hero.socials.github, faGithub, "https://github.com/" + hero.socials.github)}
                {@render social("linkedin.com/in/" + hero.socials.linkedin, faLinkedin, "https://linkedin.com/in/" + hero.socials.linkedin)}
                {@render social("orcid.org/" + hero.socials.orcid, faOrcid, "https://orcid.org/" + hero.socials.orcid)}
            </section>
        </div>
    </div>
</header>

{#snippet social(name: string, icon: IconDefinition, href: string)}
    <p>
        <FontAwesomeIcon icon={icon} fixedWidth />
        <a {href} class="underline hover:text-slate-400" target="_blank">
            {name}
        </a>
    </p>
{/snippet}