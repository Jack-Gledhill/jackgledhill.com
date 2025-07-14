<script lang="ts">
	import Announcement from '$lib/components/announcement.svelte';
	import Committee from '$lib/components/committee.svelte';
	import Event from '$lib/components/event.svelte';
	import Footer from '$lib/components/footer.svelte';
	import IconArray from '$lib/components/icons/array.svelte';
	import Project from '$lib/components/project.svelte';
	import Volunteering from '$lib/components/volunteering.svelte';
	import { decodeEmail } from '$lib/utils';

	import { onMount } from 'svelte';
	import type { PageProps } from './$types';

	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faEnvelope,
		faPrint
	} from '@fortawesome/free-solid-svg-icons';

	let { data }: PageProps = $props();

	// Email obfuscation
	onMount(() => {
		decodeEmail(data.email, "email");
	});
</script>

<svelte:head>
	<!-- Page title -->
	<title>Jack Gledhill</title>
	<meta property="og:title" content="Jack Gledhill" />
	<meta name="twitter:title" content="Jack Gledhill" />

	<!-- Page description -->
	<meta name="description" content="" />
	<meta name="twitter:description" content="" />
	<meta property="og:description" content="" />
</svelte:head>

<Announcement />

<div class="p-4 lg:p-16">
	<div class="w-full bg-slate-800 rounded-lg border-1 border-slate-700 py-4 mb-4 lg:mb-8">
		<div class="bg-slate-700 grid grid-cols-1 lg:grid-cols-5 gap-y-[1px] lg:gap-y-0 lg:gap-x-[1px]">
			<div class="col-span-1 p-8 bg-slate-800">
				<img class="rounded-full shadow-xl" src="/images/portrait.png" alt="Jack surrounded by greenery" />
			</div>

			<div class="col-span-2 p-8 bg-slate-800">
				<h1 class="font-bold text-3xl md:text-5xl">Jack Gledhill</h1>
				<p class="text-xl lg:text-2xl pb-8">Software Engineer</p>

				<div class="text-3xl lg:text-2xl grid grid-cols-3 md:grid-cols-6 gap-8">
					<IconArray links={data.links} />
				</div>
			</div>

			<div class="col-span-2 p-8 leading-8 text-sm bg-slate-800">
				<h2 class="uppercase font-bold text-2xl text-slate-400">Positions</h2>
				<ul class="list-disc list-outside pl-4">
					{#each data.positions as pos (pos.title)}
						<li>
							{pos.title} @
							<a class="underline hover:text-slate-400" href={pos.href}>{pos.company}</a>
						</li>
					{/each}
				</ul>

				<div class="pt-4 grid md:grid-cols-2 gap-8 text-center text-sm">
					<a class="p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" href="/cv.pdf">
						<FontAwesomeIcon icon={faPrint} fixedWidth /> Download my CV
					</a>
					<a class="p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" aria-label="email" id="email">
						<FontAwesomeIcon icon={faEnvelope} fixedWidth /> Send me an email
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-8">
		<div class="col-span-1 bg-slate-800 rounded-lg border-1 border-slate-700 p-8 md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:gap-4">
			<div class="md:max-lg:col-span-1">
				<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold">Committees</h2>
				{#each data.committees as com (com.society)}
					<Committee
						society={com.society}
						draft={com.draft}
						role={com.role}
						startDate={com.start}
						endDate={com.end}
						slug={com.slug}
						src={com.logo} />
				{/each}
			</div>

			<div class="md:max-lg:col-span-1 md:pt-0 lg:pt-8">
				<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold">Volunteering</h2>
				{#each data.volunteering as vol (vol.company)}
					<Volunteering
						role={vol.role}
						draft={vol.draft}
						company={vol.company}
						startDate={vol.start}
						endDate={vol.end}
						logo={vol.logo}
						slug={vol.slug} />
				{/each}
			</div>
		</div>

		<div class="col-span-2 row-span-1 bg-slate-800 rounded-lg border-1 border-slate-700 p-8">
			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold mb-8">
				Events & Workshops
			</h2>
			<div class="grid lg:grid-cols-2 gap-y-8 lg:gap-8">
				{#each data.events as event (event.name)}
					<Event
						name={event.name}
						draft={event.draft}
						date={event.date}
						src={event.logo}
						slug={event.slug}>
						{@html event.summary}
					</Event>
				{/each}
			</div>

			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold my-8">Projects</h2>
			<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-y-8 lg:gap-8">
				{#each data.projects as project (project.name)}
					<Project
						name={project.name}
						draft={project.draft}
						client={project.client}
						href={project.href}
						src={project.image.src}
						alt={project.image.alt}>
						{@html project.summary}
					</Project>
				{/each}
			</div>
		</div>
	</div>
</div>

<Footer />
