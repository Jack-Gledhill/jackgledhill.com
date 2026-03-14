<script>
	import { page } from '$app/state';

	import { faBookOpen, faChalkboard, faCodeFork, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
    import NavButton from '$lib/components/navbutton.svelte';
</script>

<div class="grid grid-cols-4 lg:flex lg:flex-row gap-4 text-2xl lg:text-xl">
    <NavButton active={page.url.pathname.startsWith("/committees") || page.url.pathname === "/"} href="/committees" icon={faHandHoldingHeart}>
        Committees
    </NavButton>

    <NavButton active={page.url.pathname.startsWith("/events")} href="/events" icon={faChalkboard}>
        Events
    </NavButton>

    <NavButton active={page.url.pathname.startsWith("/projects")} href="/projects" icon={faCodeFork}>
        Projects
    </NavButton>

    <NavButton active={page.url.pathname.startsWith("/research")} href="/research" icon={faBookOpen}>
        Research
    </NavButton>
</div>