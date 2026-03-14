<script>
	import { faDiscord, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    let { links } = $props();
</script>

<div>
    {#if links.discord}
        <p>
            <FontAwesomeIcon icon={faDiscord} fixedWidth /> <a href={`https://discord.gg/${links.discord}`} class="underline hover:text-slate-400" target="_blank">discord.gg/{links.discord}</a>
        </p>
    {/if}

    {#if links.instagram}
        <p>
            <FontAwesomeIcon icon={faInstagram} fixedWidth /> <a href={`https://instagram.com/${links.instagram}`} class="underline hover:text-slate-400" target="_blank">instagram.com/{links.instagram}</a>
        </p>
    {/if}

    {#if links.github}
        <p>
            <FontAwesomeIcon icon={faGithub} fixedWidth /> <a href={`https://github.com/${links.github}`} class="underline hover:text-slate-400" target="_blank">github.com/{links.github}</a>
        </p>
    {/if}

    {#if links.linkedin}
        <p>
            <FontAwesomeIcon icon={faLinkedin} fixedWidth /> <a href={`https://linkedin.com/in/${links.linkedin}`} class="underline hover:text-slate-400" target="_blank">linkedin.com/in/{links.linkedin}</a>
        </p>
    {/if}

    {#if links.website}
        <p>
            <FontAwesomeIcon icon={faGlobeEurope} fixedWidth /> <a href={`https://${links.website}`} class="underline hover:text-slate-400" target="_blank">{links.website}</a>
        </p>
    {/if}
</div>