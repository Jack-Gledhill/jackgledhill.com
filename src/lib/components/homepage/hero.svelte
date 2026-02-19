<script>
	import Button from '$lib/components/button.svelte';
	import Link from '$lib/components/link.svelte';
	import Icon from '$lib/components/icon.svelte';

	import { faEnvelope, faPrint, faRss } from '@fortawesome/free-solid-svg-icons';
    import { faGithub, faLinkedin, faOrcid } from '@fortawesome/free-brands-svg-icons';

    let { positions, email, links } = $props();
</script>

<div class="w-full bg-slate-800 border-1 border-slate-700 py-4">
    <div class="bg-slate-700 grid grid-cols-1 lg:grid-cols-5 2xl:grid-cols-9 gap-y-[1px] lg:gap-y-0 lg:gap-x-[1px]">
        <div class="col-span-1 p-8 bg-slate-800">
            <img class="rounded-full shadow-xl md:max-lg:w-1/2 md:max-lg:mx-auto" src="/images/portrait.webp" alt="Jack surrounded by greenery" fetchpriority="high" />
        </div>

        <div class="col-span-2 2xl:col-span-4 p-8 bg-slate-800">
            <h1 class="font-bold text-3xl md:text-5xl">Jack Gledhill</h1>
            <p class="text-xl lg:text-2xl pb-8">Software & DevOps Engineer</p>

            <div class="pt-4 grid md:grid-cols-2 gap-8 text-center text-sm">
                <Button href="/cv.pdf">
                    <Icon icon={faPrint} /> Download my CV
                </Button>
                <Button href="https://blog.jackgledhill.com">
                    <Icon icon={faRss} /> Read my blog
                </Button>
            </div>
        </div>

        <div class="col-span-2 2xl:col-span-4 p-8 leading-8 text-sm bg-slate-800 flex flex-col gap-4">
            <section>
                <h2 class="uppercase font-bold text-2xl text-slate-400">Positions</h2>
                <ul class="list-disc list-outside pl-4">
                    {#each positions as pos (pos.title)}
                        <li>
                            {pos.title} @
                            <Link href={pos.href}>{pos.company}</Link>
                        </li>
                    {/each}
                </ul>
            </section>

            <section>
                <h2 class="uppercase font-bold text-2xl text-slate-400">Contact</h2>
                <p>
                    <Icon icon={faEnvelope} /> <Link href={`mailto:${email}`}>{email}</Link>
                </p>
                <p>
                    <Icon icon={faGithub} /> <Link href={`https://github.com/${links.github}`}>github.com/{links.github}</Link>
                </p>
                <p>
                    <Icon icon={faLinkedin} /> <Link href={`https://linkedin.com/in/${links.linkedin}`}>linkedin.com/in/{links.linkedin}</Link>
                </p>
                <p>
                    <Icon icon={faOrcid} /> <Link href={`https://orcid.org/${links.orcid}`}>orcid.org/{links.orcid}</Link>
                </p>
            </section>
        </div>
    </div>
</div>