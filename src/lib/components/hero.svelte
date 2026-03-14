<script>
	import { faDiscord, faGithub, faInstagram, faLinkedin, faOrcid } from '@fortawesome/free-brands-svg-icons';
    import { faEarthEurope, faEnvelope, faPrint, faRss } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    let { metadata } = $props();
</script>

<div class="w-full bg-slate-800 rounded-lg border-1 border-slate-700 py-4 mb-4 lg:mb-8">
    <div class="bg-slate-700 grid grid-cols-1 lg:grid-cols-5 2xl:grid-cols-9 gap-y-[1px] lg:gap-y-0 lg:gap-x-[1px]">
        <div class="col-span-1 px-8 max-lg:py-8 content-center bg-slate-800">
            <img class="rounded-full shadow-xl md:max-lg:w-1/2 md:max-lg:mx-auto" src={metadata.image.src} alt={metadata.image.alt} fetchpriority="high" />
        </div>

        <div class="col-span-2 2xl:col-span-4 content-center px-8 max-lg:py-8 bg-slate-800">
            <h1 class="font-bold text-3xl md:text-5xl">{metadata.title}</h1>
            <p class="text-xl lg:text-2xl pb-8">{metadata.subtitle}</p>

            <div class="grid md:grid-cols-2 gap-8 text-center text-sm">
                <a class="p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" href="/cv.pdf" target="_blank">
                    <FontAwesomeIcon icon={faPrint} fixedWidth /> Download my CV
                </a>

                <a class="p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" href="https://blog.jackgledhill.com" target="_blank">
                    <FontAwesomeIcon icon={faRss} fixedWidth /> Read my blog
                </a>
            </div>
        </div>

        <div class="col-span-2 2xl:col-span-4 px-8 max-lg:py-8 content-center leading-8 text-sm bg-slate-800 flex flex-col gap-4">
            <section>
                <h2 class="uppercase font-bold text-2xl text-slate-400">Positions</h2>
                <ul class="list-disc list-outside pl-4">
                    {#each metadata.positions as p (p.title)}
                        <li>
                            {p.title} @
                            <a class="underline hover:text-slate-400" href={p.href}>{p.company}</a>
                        </li>
                    {/each}
                </ul>
            </section>

            <section>
                <h2 class="uppercase font-bold text-2xl text-slate-400">Contact</h2>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} fixedWidth /> <a href={`mailto:${metadata.email}`} class="underline hover:text-slate-400" target="_blank">{metadata.email}</a>
                </p>
                <p>
                    <FontAwesomeIcon icon={faGithub} fixedWidth /> <a href={`https://github.com/${metadata.socials.github}`} class="underline hover:text-slate-400" target="_blank">github.com/{metadata.socials.github}</a>
                </p>
                <p>
                    <FontAwesomeIcon icon={faLinkedin} fixedWidth /> <a href={`https://linkedin.com/in/${metadata.socials.linkedin}`} class="underline hover:text-slate-400" target="_blank">linkedin.com/in/{metadata.socials.linkedin}</a>
                </p>
                <p>
                    <FontAwesomeIcon icon={faOrcid} fixedWidth /> <a href={`https://orcid.org/${metadata.socials.orcid}`} class="underline hover:text-slate-400" target="_blank">orcid.org/{metadata.socials.orcid}</a>
                </p>
            </section>
        </div>
    </div>
</div>