<script>
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="bg-slate-950 p-8 grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-8 md:place-content-between text-sm">
    <p class="text-center md:text-left">
        Copyright &copy; 2025
        <a class="underline hover:text-slate-400" href="https://jackgledhill.com">
            Jack Gledhill
        </a>
    </p>

    <p class="text-center md:text-right hover:text-slate-400">
        <FontAwesomeIcon icon={faGithub} />
        <a class="underline" href="https://github.com/Jack-Gledhill/jackgledhill.com">
            Source code
        </a>
    </p>
</div>