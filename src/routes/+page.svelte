<script>
	import Committee from '$lib/components/home/committee.svelte';
	import Event from '$lib/components/home/event.svelte';
	import Hero from '$lib/components/home/hero.svelte';
	import Paper from '$lib/components/home/paper.svelte';
	import Project from '$lib/components/home/project.svelte';

	let { data } = $props();
</script>

<div class="p-4 lg:p-16">
	<Hero metadata={data.metadata.hero} />

	<div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-8">
		<div class="col-span-1 bg-slate-800 rounded-lg border-1 border-slate-700 p-8 md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:gap-4">
			<div class="md:max-lg:col-span-1">

			</div>
		</div>

		<div class="col-span-2 row-span-1 bg-slate-800 rounded-lg border-1 border-slate-700 p-8">
			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold mb-8">
				Events & Workshops
			</h2>
			<div class="flex flex-col gap-y-8 lg:gap-8">
				{#each data.events as e (e.metadata.title)}
					<Event metadata={e.metadata} slug={e.slug} />
				{/each}
			</div>

			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold my-8">
				Committees
			</h2>
			<div class="grid grid-cols-2 gap-8">
				{#each data.committees as c (c.metadata.title)}
					<Committee metadata={c.metadata} slug={c.slug} />
				{/each}
			</div>

			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold my-8">
				Research
			</h2>
			<div class="flex flex-col gap-y-8">
				{#each data.papers as p (p.metadata.title)}
					<Paper metadata={p.metadata} content={p.default} />
				{/each}
			</div>

			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold my-8">Projects</h2>
			<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-y-8 lg:gap-8">
				{#each data.projects as p (p.metadata.title)}
					<Project metadata={p.metadata} slug={p.slug} />
				{/each}
			</div>
		</div>
	</div>
</div>
