<script>
	import {
		faDoorOpen,
        faHardHat
	} from '@fortawesome/free-solid-svg-icons';

	import Timeline from '$lib/components/timeline/timeline.svelte';
	import TimelineEvent from '$lib/components/timeline/event.svelte';
</script>

<h1>Introduction</h1>
<p>
    TSC is Sheffield Students' Union's tech crew.
    We're a group of volunteer students who run the SU's events.
    This includes everything from our club nights, to the gigs in Foundry & Fusion, to the events in the Octagon Centre.
    You name it, we probably run it.
</p>
<p>
    I found TSC to be a great way to learn new, practical skills in a way that's hard to find elsewhere.
    The training is free, and the experience is applicable to the rest of the entertainment industry.
</p>

<h2>What I've Accomplished</h2>
<Timeline>
    <TimelineEvent
        title="Joined as a Junior"
        subtitle="Dec 2024"
        icon={faDoorOpen}
        colour="bg-red-400">
        <p>
            I joined TSC as a Junior in December 2024, just before the Semester came to an end.
            After Christmas, I worked my first night at Roar, learning the basics and getting to know the team.
            With a few nights under my belt, I began attending Wednesday training, where I would learn about sound engineering and lighting rigs.
        </p>
    </TimelineEvent>

    <TimelineEvent
        title="Easter Junior Training"
        subtitle="April 2024"
        icon={faHardHat}
        colour="bg-blue-400">
        <p>
            TSC holds Junior training twice a year: once before Christmas, and once during the Easter break.
            It's a three day course where Juniors are taught everything there is to know about sound, lighting, rigging and running gigs.
        </p>

        <p>The highlights from my training include:</p>
        <ul>
            <li>DMX and Avolites lighting desks</li>
            <li>Stage decking, mojo and suspension</li>
            <li>XLR, Pioneer DJ equipment and PA systems</li>
            <li>13A, 16A and 32A electrical safety</li>
        </ul>
    </TimelineEvent>
</Timeline>