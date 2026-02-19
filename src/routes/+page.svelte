<script>
	import Announcement from '$lib/components/announcement.svelte';
	import Company from '$lib/components/homepage/company.svelte';
	import Event from '$lib/components/homepage/event.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Hero from '$lib/components/homepage/hero.svelte';
	import Project from '$lib/components/homepage/project.svelte';
	import Research from '$lib/components/homepage/research.svelte';

	import { isDevelopment } from '$lib/utils';

	let { data } = $props();
</script>

<Announcement />

<Hero
	email={data.email}
	links={data.links}
	positions={data.positions} />

<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<div class="col-span-1 bg-slate-800 border-1 border-slate-700 p-8 md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:gap-4">
		<div class="md:max-lg:col-span-1">
			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold">Committees</h2>
			{#each data.committees as com (com.name)}
				{#if !com.draft || isDevelopment()}
					<Company
						name={com.name}
						logo={com.logo}
						draft={com.draft}
						role={com.role}
						start={com.start}
						end={com.end}
						slug={com.slug} />
				{/if}
			{/each}
		</div>

		<div class="md:max-lg:col-span-1 md:pt-0 lg:pt-8">
			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold">Volunteering</h2>
			{#each data.volunteering as vol (vol.name)}
				{#if !vol.draft || isDevelopment()}
					<Company
						name={vol.name}
						logo={vol.logo}
						draft={vol.draft}
						role={vol.role}
						start={vol.start}
						end={vol.end}
						slug={vol.slug} />
				{/if}
			{/each}
		</div>
	</div>

	<div class="col-span-2 row-span-1 bg-slate-900 border-1 border-slate-700 p-8">
		<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold mb-8">
			Events & Workshops
		</h2>
		<div class="grid lg:grid-cols-2 gap-y-8 lg:gap-8">
			{#each data.events as event (event.name)}
				{#if !event.draft || isDevelopment()}
					<Event
						name={event.name}
						logo={event.logo}
						draft={event.draft}
						slug={event.slug}
						date={event.date}
						summary={event.summary} />
				{/if}
			{/each}
		</div>

		<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold my-8">
			Research
		</h2>
		<div class="flex flex-col gap-y-8">
			{#each data.research as paper (paper.title)}
				{#if !paper.draft || isDevelopment()}
					<Research
						title={paper.title}
						journal={paper.journal}
						date={paper.date}
						authors={paper.authors}
						links={paper.links}
						description={paper.description}
						draft={paper.draft} />
				{/if}
			{/each}
		</div>

		<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold my-8">Projects</h2>
		<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-y-8 lg:gap-8">
			{#each data.projects as project (project.name)}
				{#if !project.draft || isDevelopment()}
					<Project
						name={project.name}
						logo={project.logo}
						href={project.href}
						draft={project.draft}
						client={project.client}
						summary={project.summary} />
				{/if}
			{/each}
		</div>
	</div>
</div>

<Footer />
