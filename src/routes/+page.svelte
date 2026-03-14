<script>
	import Committee from '$lib/components/home/committee.svelte';
	import Event from '$lib/components/home/event.svelte';
	import Hero from '$lib/components/home/hero.svelte';
	import Paper from '$lib/components/home/paper.svelte';
	import Project from '$lib/components/home/project.svelte';
	import { faBookOpen, faChalkboard, faCodeFork, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
    import NavButton from '$lib/components/navbutton.svelte';

	let { data } = $props();
	let panel = $state(0);
</script>

<div class="p-4 lg:p-16">
	<Hero metadata={data.metadata.hero} />

	<div class="grid grid-cols-4 lg:flex lg:flex-row gap-4 text-2xl lg:text-xl">
		<NavButton active={panel === 0} onclick={() => panel = 0} icon={faHandHoldingHeart}>
			Committees
		</NavButton>

		<NavButton active={panel === 1} onclick={() => panel = 1} icon={faChalkboard}>
			Events
		</NavButton>

		<NavButton active={panel === 2} onclick={() => panel = 2} icon={faCodeFork}>
			Projects
		</NavButton>

		<NavButton active={panel === 3} onclick={() => panel = 3} icon={faBookOpen}>
			Research
		</NavButton>
	</div>

	<div class="w-full bg-slate-800 rounded-b-lg lg:rounded-tr-lg border-1 border-slate-700 p-8 flex flex-col gap-8">
		{#if panel === 0}
			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold">
				Committees
			</h2>

			<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
				{#each data.committees as c (c.metadata.title)}
					<Committee metadata={c.metadata} slug={c.slug} />
				{/each}
			</div>
		{:else if panel === 1}
			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold">
				Events & Workshops
			</h2>

			<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
				{#each data.events as e (e.metadata.title)}
					<Event metadata={e.metadata} slug={e.slug} />
				{/each}
			</div>
		{:else if panel === 2}
			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold">
				Projects
			</h2>

			<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
				{#each data.projects as p (p.metadata.title)}
					<Project metadata={p.metadata} slug={p.slug} />
				{/each}
			</div>
		{:else if panel === 3}
			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold">
				Research & Publications
			</h2>

			<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
				{#each data.papers as p (p.metadata.title)}
					<Paper metadata={p.metadata} content={p.default} />
				{/each}
			</div>
		{/if}
	</div>
</div>
