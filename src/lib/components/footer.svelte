<script>
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import {
        faCopyright,
        faRobot,
        faSitemap
    } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="bg-slate-950 p-8 grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-8 md:place-content-between text-sm">
    <p class="text-center md:text-left">
        Copyright &copy; 2025 Jack Gledhill
    </p>

    <p class="text-center md:text-right tracking-[1em]">
        <a class="hover:text-slate-400" href="https://github.com/Jack-Gledhill/jackgledhill.com" aria-label="Source code">
            <FontAwesomeIcon icon={faGithub} />
        </a>

        <a class="hover:text-slate-400" href="/sitemap.xml" aria-label="Sitemap">
            <FontAwesomeIcon icon={faSitemap} />
        </a>

        <a class="hover:text-slate-400" href="/robots.txt" aria-label="Robots.txt">
            <FontAwesomeIcon icon={faRobot} />
        </a>

        <a class="hover:text-slate-400" href="/document/copyright" aria-label="Copyright & Attributions">
            <FontAwesomeIcon icon={faCopyright} />
        </a>
    </p>
</div>