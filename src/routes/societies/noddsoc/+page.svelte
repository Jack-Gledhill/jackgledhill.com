<script>
	import {
		faCheckToSlot,
        faBurger,
        faGlobe
	} from '@fortawesome/free-solid-svg-icons';

	import Timeline from '$lib/components/timeline/timeline.svelte';
	import TimelineEvent from '$lib/components/timeline/event.svelte';
</script>

<h1>Introduction</h1>
<p>
    NoDDSoc is the University of Sheffield's TTRPG society, and is one of the oldest and largest societies in Sheffield!
    The society holds regular socials, collabs and one-shots in addition to the weekly campaigns run by our Game Masters.
</p>

<h2>Responsibilities</h2>
<ul>
    <li>Managing the society's website</li>
    <li>Ensuring the society's accounts are secure and accessible</li>
    <li>Teaching Committee how to use the website and accounts</li>
    <li>Managing the society's Discord servers</li>
    <li>Managing the society's Google Drive and Calendar</li>
</ul>

<h2>What I've Accomplished</h2>
<Timeline>
    <TimelineEvent
        title="Elected as Webmaster"
        subtitle="March 2025"
        icon={faCheckToSlot}
        colour="bg-purple-400">
        <p>
            Prior to the AGM, I had been attending a NoDDSoc campaign since the beginning of the academic year.
            When I saw that the society was still looking for a Webmaster, I decided to step up and run for the position.
            As the only candidate for the role, I was elected with a 2/3 majority vote.
        </p>
    </TimelineEvent>

    <TimelineEvent
        title="Revived noddsoc.co.uk"
        subtitle="May 2025"
        icon={faGlobe}
        colour="bg-green-400">
        <p>
            In years past, NoDDSoc had a website at <a href="https://noddsoc.co.uk">noddsoc.co.uk</a> that they used to share information with their members and advertise the society.
            Unfortunately, it's been inactive for a few years, and the source code has been lost.
        </p>

        <p>
            In light of this, I decided to rebuild the website from the ground up! You can read more about the project and the decisions I made <a href="/projects/noddsoc.co.uk">here</a>!
        </p>
    </TimelineEvent>

    <TimelineEvent
        title="Summer BBQ"
        subtitle="June 2025"
        icon={faBurger}
        colour="bg-blue-400">
        <p>
            NoDDSoc hosts a Summer BBQ in Weston Park every year after June exams.
            This year, I took responsibility for the event's food, ensuring everyone's needs were catered for.
        </p>
    </TimelineEvent>
</Timeline>