<script>
	import { faDiscord, faGithub, faInstagram, faLinkedin, faOrcid } from '@fortawesome/free-brands-svg-icons';
    import { faEarthEurope, faEnvelope, faPrint, faRss } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    let { metadata } = $props();
</script>

<div class="w-full bg-slate-800 rounded-lg border-1 border-slate-700 py-4 mb-4 lg:mb-8">
    <div class="bg-slate-700 grid grid-cols-1 lg:grid-cols-5 2xl:grid-cols-9 gap-y-[1px] lg:gap-y-0 lg:gap-x-[1px]">
        <div class="col-span-1 p-8 bg-slate-800">
            <img class="rounded-full shadow-xl md:max-lg:w-1/2 md:max-lg:mx-auto" src={metadata.image} alt="Portrait of Jack" fetchpriority="high" />
        </div>

        <div class="col-span-2 2xl:col-span-4 p-8 bg-slate-800">
            <h1 class="font-bold text-3xl md:text-5xl">{metadata.title}</h1>
            <p class="text-xl lg:text-2xl pb-8">{metadata.subtitle}</p>

            <div class="text-3xl lg:text-2xl grid grid-cols-3 md:grid-cols-6 gap-8">
                {#if metadata.socials.discord}
                    <a class="hover:text-slate-400" href={`https://discord.gg/${metadata.socials.discord}`} target="_blank" aria-label="Discord">
                        <FontAwesomeIcon icon={faDiscord} fixedWidth />
                    </a>
                {/if}

                {#if metadata.socials.github}
                    <a class="hover:text-slate-400" href={`https://github.com/${metadata.socials.github}`} target="_blank" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} fixedWidth />
                    </a>
                {/if}

                {#if metadata.socials.instagram}
                    <a class="hover:text-slate-400" href={`https://www.instagram.com/${metadata.socials.instagram}`} target="_blank" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} fixedWidth />
                    </a>
                {/if}

                {#if metadata.socials.linkedin}
                    <a class="hover:text-slate-400" href={`https://www.linkedin.com/company/${metadata.socials.linkedin}`} target="_blank" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                    </a>
                {/if}

                {#if metadata.socials.orcid}
                    <a class="hover:text-slate-400" href={`https://orcid.org/${metadata.socials.orcid}`} target="_blank" aria-label="OrcID">
                        <FontAwesomeIcon icon={faOrcid} fixedWidth />
                    </a>
                {/if}

                {#if metadata.socials.website}
                    <a class="hover:text-slate-400" href={`${metadata.socials.website}`} target="_blank" aria-label="Website">
                        <FontAwesomeIcon icon={faEarthEurope} fixedWidth />
                    </a>
                {/if}
            </div>
        </div>

        <div class="col-span-2 2xl:col-span-4 p-8 leading-8 text-sm bg-slate-800">
            <h2 class="uppercase font-bold text-2xl text-slate-400">Positions</h2>
            <ul class="list-disc list-outside pl-4">
                {#each metadata.positions as p (p.title)}
                    <li>
                        {p.title} @
                        <a class="underline hover:text-slate-400" href={p.href}>{p.company}</a>
                    </li>
                {/each}
            </ul>

            <div class="pt-4 grid md:grid-cols-3 gap-8 text-center text-sm">
                <a class="p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" href="/cv.pdf" target="_blank">
                    <FontAwesomeIcon icon={faPrint} fixedWidth /> Download my CV
                </a>
                <a class="p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" href={`mailto:${metadata.email}`} target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} fixedWidth /> Send me an email
                </a>
                <a class="p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" href="https://blog.jackgledhill.com" target="_blank">
                    <FontAwesomeIcon icon={faRss} fixedWidth /> Read my blog
                </a>
            </div>
        </div>
    </div>
</div>