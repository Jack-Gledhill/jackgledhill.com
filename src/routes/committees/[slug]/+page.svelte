<script>
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

	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<style>
    @reference '../../../app.css';

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

        article h3 {
            @apply text-xl leading-16;
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

<div class="w-full h-72 bg-center bg-no-repeat bg-cover border-b-1 border-slate-600" style={`background-image: url(${data.metadata.banner});`}></div>

<div class="lg:grid lg:grid-cols-4 lg:min-h-screen">
    <div class="lg:col-span-1 p-12 border-b-1 lg:border-b-0 lg:border-r-1 border-slate-600 leading-loose md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:gap-4">
        <div class="md:col-span-1">
            <img class="w-1/2 mx-auto rounded-3xl" src={data.metadata.logo} alt={`${data.metadata.title} logo`} />
            <p class="text-center font-bold text-xl max-md:py-8 md:max-lg:pt-8 lg:py-8">{data.metadata.title}</p>
        </div>

        <div class="md:col-span-1">
            <p><FontAwesomeIcon icon={faCalendarDays} fixedWidth />
                {formatDate(data.metadata.start)} {#if data.metadata.end} - {formatDate(data.metadata.end)} {/if}
            </p>

            {#if data.metadata.position}
                <p><FontAwesomeIcon icon={faUserTie} fixedWidth /> {data.metadata.position}</p>
            {/if}

            {#if data.metadata.links.discord}
                <p class="truncate"><FontAwesomeIcon icon={faDiscord} fixedWidth />
                    <a class="underline hover:text-slate-400" href={`https://discord.gg/${data.metadata.links.discord}`} target="_blank">
                        discord.gg/{data.metadata.links.discord}
                    </a>
                </p>
            {/if}

            {#if data.metadata.links.instagram}
                <p class="truncate"><FontAwesomeIcon icon={faInstagram} fixedWidth />
                    <a class="underline hover:text-slate-400" href={`https://www.instagram.com/${data.metadata.links.instagram}`} target="_blank">
                        {data.metadata.links.instagram}
                    </a>
                </p>
            {/if}

            {#if data.metadata.links.linkedin}
                <p class="truncate"><FontAwesomeIcon icon={faLinkedin} fixedWidth />
                    <a class="underline hover:text-slate-400" href={`https://www.linkedin.com/company/${data.metadata.links.linkedin}`} target="_blank">
                        {data.metadata.links.linkedin}
                    </a>
                </p>
            {/if}

            {#if data.metadata.links.github}
                <p class="truncate"><FontAwesomeIcon icon={faGithub} fixedWidth />
                    <a class="underline hover:text-slate-400" href={`https://github.com/${data.metadata.links.github}`} target="_blank">
                        {data.metadata.links.github}
                    </a>
                </p>
            {/if}

            {#if data.metadata.links.website}
                <p class="truncate"><FontAwesomeIcon icon={faGlobeEurope} fixedWidth />
                    <a class="underline hover:text-slate-400" href={`https://${data.metadata.links.website}`} target="_blank">
                        {data.metadata.links.website}
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
            {@render data.default()}
        </article>
    </div>
</div>
