<script>
	import { isDevelopment } from '$lib';
	import Event from '$lib/event.svelte';
	import Project from '$lib/project.svelte';
	import Volunteering from '$lib/volunteering.svelte';

	import compsoc from '$lib/images/compsoc.png';
	import hacksheffield9 from '$lib/images/hacksheffield9.png';
	import kubernetes from '$lib/images/kubernetes.png';
	import nebula from '$lib/images/nebula.jpg';
	import noddsoc from '$lib/images/noddsoc.png';
	import portrait from '$lib/images/portrait.png';
	import shefesh from '$lib/images/shefesh.png';
	import slugsoc from '$lib/images/slugsoc.png';
	import ssu from '$lib/images/ssu.png';
	import tsc from '$lib/images/tsc.png';

	import { onMount } from 'svelte';

	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faEnvelope,
		faPrint,
		faEarthEurope,
		faBook,
		faScrewdriverWrench,
		faGraduationCap,
		faHelmetSafety,
		faGlobe
	} from '@fortawesome/free-solid-svg-icons';
	import {
		faGithub,
		faLinkedin,
		faOrcid,
		faInstagram,
		faDiscord
	} from '@fortawesome/free-brands-svg-icons';

	// Email obfuscation - converts a base64 encoded address into a utf-8 address and then updates the relevant tags
	onMount(() => {
		let encodedEmail = "bWVAamFja2dsZWRoaWxsLmNvbQ==";
		let decodedEmail = window.atob(encodedEmail);
		let anchor = document.getElementById("email");

		if (anchor) {
			anchor.href = "mailto:" + decodedEmail;
		}
	});
</script>

<svelte:head>
	<!-- Page title -->
	<title>Jack Gledhill</title>
	<meta property="og:title" content="Jack Gledhill" />
	<meta name="twitter:title" content="Jack Gledhill">

	<!-- Page description -->
	<meta name="description" content="" />
	<meta name="twitter:description" content="">
	<meta property="og:description" content="" />
</svelte:head>

{#if isDevelopment()}
	<div class="bg-black text-white w-full py-2 px-16">
		⚠️ You're currently accessing a live development version of this website. If you're here by mistake, please <a class="text-blue-600 hover:text-blue-400 underline" href="https://jackgledhill.com">click here</a>.
	</div>
{/if}

<div class="p-4 lg:p-16">
	<div class="w-full bg-slate-800 rounded-lg border-1 border-slate-700 py-4 mb-4 lg:mb-8">
		<div class="bg-slate-700 grid grid-cols-1 lg:grid-cols-5 gap-y-[1px] lg:gap-y-0 lg:gap-x-[1px]">
			<div class="col-span-1 p-8 bg-slate-800">
				<img class="rounded-full shadow-xl" src={portrait} alt="Jack surrounded by greenery" />
			</div>

			<div class="col-span-2 p-8 bg-slate-800">
				<h1 class="font-bold text-3xl md:text-5xl">Jack Gledhill</h1>
				<p class="text-xl lg:text-2xl pb-8">DevOps Engineer</p>

				<div class="text-3xl lg:text-2xl grid grid-cols-3 md:grid-cols-6 gap-8">
					<a class="hover:text-slate-400" href="https://github.com/Jack-Gledhill" target="_blank">
						<FontAwesomeIcon icon={faGithub} fixedWidth />
					</a>

					<a class="hover:text-slate-400" href="https://www.linkedin.com/in/jackgledhill" target="_blank">
						<FontAwesomeIcon icon={faLinkedin} fixedWidth />
					</a>

					<a class="hover:text-slate-400" href="https://orcid.org/0009-0000-3055-0714" target="_blank">
						<FontAwesomeIcon icon={faOrcid} fixedWidth />
					</a>

					<a class="hover:text-slate-400" aria-label="email address" id="email">
						<FontAwesomeIcon icon={faEnvelope} fixedWidth />
					</a>

					<a class="hover:text-slate-400" href="/cv.pdf" target="_blank">
						<FontAwesomeIcon icon={faPrint} fixedWidth />
					</a>
				</div>
			</div>

			<div class="col-span-2 p-8 leading-8 2xl:leading-16 text-sm 2xl:text-xl bg-slate-800">
				<h2 class="uppercase font-bold text-2xl text-slate-400">Positions</h2>
				<p><FontAwesomeIcon icon={faGlobe} fixedWidth /> Webmaster @ <a class="underline hover:text-slate-400" href="https://noddsoc.co.uk">NoDDSoc</a></p>
				<p><FontAwesomeIcon icon={faScrewdriverWrench} fixedWidth /> Technical Officer @ <a class="underline hover:text-slate-400" href="https://slugsoc.co.uk">SLUGSoc</a></p>
				<p><FontAwesomeIcon icon={faHelmetSafety} fixedWidth /> Inclusions Officer @ <a class="underline hover:text-slate-400" href="https://shefesh.com">ShefESH</a></p>
				<p><FontAwesomeIcon icon={faGraduationCap} fixedWidth /> MEng Software Engineering @ <a class="underline hover:text-slate-400" href="https://sheffield.ac.uk">Uni of Sheffield</a></p>
			</div>
		</div>
	</div>

	<div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-8">
		<div class="col-span-1 bg-slate-800 rounded-lg border-1 border-slate-700 p-8">
			<h2 class="uppercase text-2xl lg:text-4xl text-slate-400 font-bold lg:leading-24">Volunteering</h2>

			<div class="grid grid-cols-4 gap-8">
				<Volunteering
					title="Webmaster"
					company="Not Only Dungeons & Dragons Society"
					startDate="Mar 2025"
					endDate="present"
					src={noddsoc}
					alt="Sheffield Not Only Dungeons & Dragons Society logo"
					links={[
						{
							icon: faInstagram,
							href: "https://www.instagram.com/noddsoc"
						},
						{
							icon: faDiscord,
							href: "https://discord.gg/E6F7Unz"
						},
						{
							icon: faEnvelope,
							href: "mailto:noddsoc@sheffield.ac.uk"
						}]} />

				<Volunteering
					title="Inclusions Officer"
					company="Sheffield Ethical Student Hackers' Society"
					startDate="Mar 2025"
					endDate="present"
					src={shefesh}
					alt="Sheffield Ethical Student Hackers' Society logo"
					links={[
						{
							icon: faEarthEurope,
							href: "https://shefesh.com"
						},
						{
							icon: faLinkedin,
							href: "https://www.linkedin.com/company/sheffield-ethical-student-hackers"
						},
						{
							icon: faInstagram,
							href: "https://www.instagram.com/_shefesh/"
						},
						{
							icon: faGithub,
							href: "https://github.com/ShefESH"
						},
						{
							icon: faDiscord,
							href: "https://shefesh.com/discord"
						},
						{
							icon: faEnvelope,
							href: "mailto:ethicalhackers@sheffield.ac.uk"
						}]} />

				<Volunteering
					title="Technical Officer"
					company="Sheffield University LAN Gaming Society"
					startDate="Feb 2025"
					endDate="present"
					src={slugsoc}
					alt="Sheffield University LAN Gaming Society logo"
					links={[
						{
							icon: faEarthEurope,
							href: "https://slugsoc.co.uk"
						},
						{
							icon: faLinkedin,
							href: "https://www.linkedin.com/company/university-of-sheffield-lan-gaming-society"
						},
						{
							icon: faInstagram,
							href: "https://www.instagram.com/slugsoc"
						},
						{
							icon: faGithub,
							href: "https://github.com/SLUGSoc"
						},
						{
							icon: faDiscord,
							href: "https://discord.gg/VvUCXCT"
						},
						{
							icon: faEnvelope,
							href: "mailto:slugs@sheffield.ac.uk"
						}]} />

				<Volunteering
					title="Junior Crew Member"
					company="Technical Services Committee"
					startDate="Dec 2024"
					endDate="present"
					src={tsc}
					alt="Technical Services Committee logo"
					links={[
						{
							icon: faEarthEurope,
							href: "https://tsc.sites.sheffield.ac.uk"
						},
						{
							icon: faLinkedin,
							href: "https://www.linkedin.com/company/tsc-sheffield"
						},
						{
							icon: faInstagram,
							href: "https://instagram.com/tsc_sheffield"
						},
						{
							icon: faEnvelope,
							href: "mailto:tsc@sheffield.ac.uk"
						}]} />

				<Volunteering
					title="First Year Representative"
					company="Sheffield Computer Science Society"
					startDate="Oct 2024"
					endDate="Feb 2025"
					src={compsoc}
					alt="Sheffield Computer Science Society logo"
					links={[
						{
							icon: faEarthEurope,
							href: "https://shefcompsoc.uk"
						},
						{
							icon: faLinkedin,
							href: "https://www.linkedin.com/company/shefcompsoc"
						},
						{
							icon: faInstagram,
							href: "https://www.instagram.com/shefcompsoc/"
						},
						{
							icon: faGithub,
							href: "https://github.com/shefcompsoc"
						},
						{
							icon: faDiscord,
							href: "https://discord.gg/3e9GMgc"
						},
						{
							icon: faEnvelope,
							href: "mailto:compsci.soc@sheffield.ac.uk"
						}]} />

				<Volunteering
					title="Academic Representative"
					company="Sheffield Students' Union"
					startDate="Sep 2024"
					endDate="present"
					src={ssu}
					alt="Sheffield Students' Union logo"
					links={[
						{
							icon: faEarthEurope,
							href: "https://su.sheffield.ac.uk"
						},
						{
							icon: faLinkedin,
							href: "https://www.linkedin.com/company/shefcompsoc"
						},
						{
							icon: faInstagram,
							href: "https://www.linkedin.com/company/sheffield-students'-union/"
						}]} />
			</div>
		</div>

		<div class="col-span-2 row-span-1 bg-slate-800 rounded-lg border-1 border-slate-700 p-8">
			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold mb-8">Events & Workshops</h2>
			<div class="grid lg:grid-cols-2 gap-y-8 lg:gap-8">
				<Event draft
					name="Kubernetes Workshop"
					date="May 2025"
					src={kubernetes}
					alt="Kubernetes logo">
					Lorem ipsum dolor sit amet
				</Event>

				<Event
					name="HackSheffield 9"
					date="Nov 2024"
					src={hacksheffield9}
					alt="HackSheffield 9 logo">
					University of Sheffield's nineth annual Hackathon, organised by Sheffield CompSoc.
				</Event>
			</div>

			<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold my-8">Projects</h2>
			<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-y-8 lg:gap-8">
				<Project draft
					name="noddsoc.co.uk"
					client="Not Only Dungeons & Dragons Society"
					src={noddsoc}
					alt="NoDDSoc website"
					links={[
						{
							icon: faEarthEurope,
							href: "https://noddsoc.co.uk"
						}]}>
					During my time as Webmaster, I've begun building a new website for the Society to improve their online presence and unify information.
				</Project>

				<Project
					name="Constellation"
					src={nebula}
					alt="Nebula stock image"
					links={[
						{
							icon: faEarthEurope,
							href: "https://starsystem.dev"
						},
						{
							icon: faGithub,
							href: "https://github.com/constellation-net"
						},
						{
							icon: faBook,
							href: "https://help.starsystem.dev"
						}]}>
					Constellation is the name I gave to my homelab. It is a collection of various pieces of hardware, both consumer and enterprise.
				</Project>
			</div>
		</div>
	</div>
</div>