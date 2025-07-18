<script lang="ts">
	import Announcement from '$lib/components/announcement.svelte';
	import DraftBadge from '$lib/components/draft.svelte';
	import Footer from '$lib/components/footer.svelte';

	import { isDevelopment } from '$lib/utils';
	import type { PageProps } from './$types';

	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faEarthEurope,
		faEnvelope,
		faPrint,
		faRss
	} from '@fortawesome/free-solid-svg-icons';
	import {
		faDiscord,
		faGithub,
		faInstagram,
		faLinkedin,
		faOrcid
	} from '@fortawesome/free-brands-svg-icons';

	let { data }: PageProps = $props();
</script>

<Announcement />

<div class="p-4 lg:p-16">
	<div class="w-full bg-slate-800 rounded-lg border-1 border-slate-700 py-4 mb-4 lg:mb-8">
		<div class="bg-slate-700 grid grid-cols-1 lg:grid-cols-5 2xl:grid-cols-9 gap-y-[1px] lg:gap-y-0 lg:gap-x-[1px]">
			<div class="col-span-1 p-8 bg-slate-800">
				<img class="rounded-full shadow-xl md:max-lg:w-1/2 md:max-lg:mx-auto" src="/images/portrait.webp" alt="Jack surrounded by greenery" fetchpriority="high" />
			</div>

			<div class="col-span-2 2xl:col-span-4 p-8 bg-slate-800">
				<h1 class="font-bold text-3xl md:text-5xl">Jack Gledhill</h1>
				<p class="text-xl lg:text-2xl pb-8">Software Engineer</p>

				<div class="text-3xl lg:text-2xl grid grid-cols-3 md:grid-cols-6 gap-8">
					{#if data.links.discord}
						<a class="hover:text-slate-400" href={`https://discord.gg/${data.links.discord}`} target="_blank" aria-label="Discord">
							<FontAwesomeIcon icon={faDiscord} fixedWidth />
						</a>
					{/if}

					{#if data.links.github}
						<a class="hover:text-slate-400" href={`https://github.com/${data.links.github}`} target="_blank" aria-label="GitHub">
							<FontAwesomeIcon icon={faGithub} fixedWidth />
						</a>
					{/if}

					{#if data.links.instagram}
						<a class="hover:text-slate-400" href={`https://www.instagram.com/${data.links.instagram}`} target="_blank" aria-label="Instagram">
							<FontAwesomeIcon icon={faInstagram} fixedWidth />
						</a>
					{/if}

					{#if data.links.linkedin}
						<a class="hover:text-slate-400" href={`https://www.linkedin.com/company/${data.links.linkedin}`} target="_blank" aria-label="LinkedIn">
							<FontAwesomeIcon icon={faLinkedin} fixedWidth />
						</a>
					{/if}

					{#if data.links.orcid}
						<a class="hover:text-slate-400" href={`https://orcid.org/${data.links.orcid}`} target="_blank" aria-label="OrcID">
							<FontAwesomeIcon icon={faOrcid} fixedWidth />
						</a>
					{/if}

					{#if data.links.website}
						<a class="hover:text-slate-400" href={`${data.links.website}`} target="_blank" aria-label="Website">
							<FontAwesomeIcon icon={faEarthEurope} fixedWidth />
						</a>
					{/if}
				</div>
			</div>

			<div class="col-span-2 2xl:col-span-4 p-8 leading-8 text-sm bg-slate-800">
				<h2 class="uppercase font-bold text-2xl text-slate-400">Positions</h2>
				<ul class="list-disc list-outside pl-4">
					{#each data.positions as pos (pos.title)}
						<li>
							{pos.title} @
							<a class="underline hover:text-slate-400" href={pos.href}>{pos.company}</a>
						</li>
					{/each}
				</ul>

				<div class="pt-4 grid md:grid-cols-3 gap-8 text-center text-sm">
					<a class="p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" href="/cv.pdf" target="_blank">
						<FontAwesomeIcon icon={faPrint} fixedWidth /> Download my CV
					</a>
					<a class="p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" href={`mailto:${data.email}`} target="_blank">
						<FontAwesomeIcon icon={faEnvelope} fixedWidth /> Send me an email
					</a>
					<a class="p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" href="https://blog.jackgledhill.com" target="_blank">
						<FontAwesomeIcon icon={faRss} fixedWidth /> Read my blog
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
					{#if !com.draft || isDevelopment()}
						<div class="grid grid-cols-4 gap-8 lg:py-4">
							<div class="col-span-1 hidden xl:block">
								<img class="rounded-lg 2xl:rounded-2xl" src={com.logo} alt={`${com.society} logo`} />
							</div>

							<div class="col-span-4 lg:col-span-3 content-center">
								<DraftBadge draft={com.draft} />
								<h3 class="text-xl lg:text-2xl font-bold">
									<a class="underline hover:text-slate-400" href={`/about/${com.slug}`}>{com.society}</a>
								</h3>

								<p class="text-lg lg:text-xl">{com.role}</p>
								<p class="italic text-sm mb-8 lg:mb-0">{com.start} - {com.end}</p>
							</div>
						</div>
					{/if}
				{/each}
			</div>

			<div class="md:max-lg:col-span-1 md:pt-0 lg:pt-8">
				<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold">Volunteering</h2>
				{#each data.volunteering as vol (vol.company)}
					{#if !vol.draft || isDevelopment()}
						<div class="grid grid-cols-4 gap-8 py-4">
							<div class="col-span-1 hidden xl:block">
								<img class="rounded-lg 2xl:rounded-2xl" src={vol.logo} alt={`${vol.company} logo`} />
							</div>

							<div class="col-span-4 lg:col-span-3 content-center">
								<DraftBadge draft={vol.draft} />
								<h3 class="text-xl lg:text-2xl font-bold">
									<a class="underline hover:text-slate-400" href={`/about/${vol.slug}`}>{vol.company}</a>
								</h3>

								<p class="text-lg lg:text-xl">{vol.role}</p>
								<p class="italic text-sm mb-8 lg:mb-0">{vol.start} - {vol.end}</p>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>

		<div class="col-span-2 row-span-1 bg-slate-800 rounded-lg border-1 border-slate-700 p-8">
			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold mb-8">
				Events & Workshops
			</h2>
			<div class="grid lg:grid-cols-2 gap-y-8 lg:gap-8">
				{#each data.events as event (event.name)}
					{#if !event.draft || isDevelopment()}
						<div class="grid grid-cols-4 gap-4">
							<div class="col-span-1 hidden md:block">
								<img class="rounded-lg" src={event.logo} alt={`${event.name} logo`} />
							</div>

							<div class="col-span-4 md:col-span-3 content-center">
								<DraftBadge draft={event.draft} />
								<h3 class="text-lg md:text-2xl font-bold">
									<a class="underline hover:text-slate-400" href={`/about/${event.slug}`}>{event.name}</a>
								</h3>
								<p class="italic text-sm">{event.date}</p>

								<p>{@html event.summary}</p>
							</div>
						</div>
					{/if}
				{/each}
			</div>

			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold my-8">Projects</h2>
			<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-y-8 lg:gap-8">
				{#each data.projects as project (project.name)}
					{#if !project.draft || isDevelopment()}
						<div class="bg-slate-700 border-1 border-slate-600 rounded-lg transition-transform duration-300 hover:-translate-y-4">
							<a href={project.href}>
								<div class="xl:h-46 overflow-y-hidden rounded-t-lg">
									<img class="w-full object-contain" src={project.logo} alt={`${project.name} logo`} />
								</div>

								<div class="p-4 md:p-8">
									<DraftBadge draft={project.draft} />
									<h3 class="text-slate-400 font-bold uppercase text-xl lg:text-2xl">{project.name}</h3>
									<p class="text-lg lg:text-xl">{project.client}</p>

									<p class="pt-4">{@html project.summary}</p>
								</div>
							</a>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>

<Footer />
