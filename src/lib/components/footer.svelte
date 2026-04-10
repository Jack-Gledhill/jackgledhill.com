<script>
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import {
        faCopyright, faMugHot,
        faRobot,
        faSitemap
    } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="bg-slate-950 p-8 text-sm flex flex-col gap-8">
    <div>
        <img class="max-md:mx-auto h-12" src="/images/wordmark.webp" alt="Jack Gledhill's logo" />
    </div>

    <div class="grid grid-rows-3 md:grid-rows-none md:grid-cols-2 gap-8 md:place-content-between">
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

            <a class="hover:text-slate-400" href="/copyright" aria-label="Copyright & Attributions">
                <FontAwesomeIcon icon={faCopyright} />
            </a>

            <a class="hover:text-slate-400" href="/teapot" aria-label="I'm a Teapot">
                <FontAwesomeIcon icon={faMugHot} />
            </a>
        </p>
    </div>
</div>