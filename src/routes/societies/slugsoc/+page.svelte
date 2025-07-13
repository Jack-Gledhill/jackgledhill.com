<script>
	import {
		faCheckToSlot,
		faLock
	} from '@fortawesome/free-solid-svg-icons';

	import Timeline from '$lib/components/timeline/timeline.svelte';
	import TimelineEvent from '$lib/components/timeline/event.svelte';
</script>

<h1>Introduction</h1>
<p>
    SLUGSoc is quite a popular society at the University of Sheffield.
    It focuses primarily on video games, and even has a number of e-sports teams that compete in various leagues.
</p>

<h2>Responsibilities</h2>
<ul>
    <li>Securing the society's server</li>
    <li>Ensuring Committee can access our servers</li>
    <li>Managing the society's Minecraft servers</li>
    <li>Setting up equipment at our LAN events</li>
    <li>Writing technical documentation for the Committee</li>
</ul>

<h2>What I've Accomplished</h2>
<Timeline>
    <TimelineEvent
        title="Elected as Technical Officer"
        subtitle="March 2025"
        icon={faCheckToSlot}
        colour="bg-purple-400">
        <p>
            In the months prior to the AGM, I was a Junior Tech for SLUGSoc, developing a plan to improve the society's software infrastructure and security.
            Following the AGM, my role was now official and I was able to implement my plans as Technical Officer.
        </p>
    </TimelineEvent>

    <TimelineEvent
        title="Reformed Server Access"
        subtitle="March 2025"
        icon={faLock}
        colour="bg-sky-400">
        <p>
            My first task as Technical Officer was to address the issue of security within SLUGSoc's servers.
            At the time, they weren't adhering to security best practices, and Committee members were sharing accounts.
        </p>

        <p>
            To fix this, I installed <a href="https://cockpit-project.org">Cockpit</a> onto our servers, which allows Tech Officers to manage user access and permissions more easily.
            I also implemented several best-practice policies, including SSH private key-pairs and individual accounts per Committee member.
        </p>
    </TimelineEvent>
</Timeline>