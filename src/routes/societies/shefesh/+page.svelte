<script>
	import {
		faCheckToSlot,
		faChalkboard,
	} from '@fortawesome/free-solid-svg-icons';

	import Timeline from '$lib/components/timeline/timeline.svelte';
	import TimelineEvent from '$lib/components/timeline/event.svelte';
</script>

<h1>Introduction</h1>
<p>
    Sheffield's Ethical Hacking Society (aka ShefESH) provides weekly sessions during term-time to all its members.
    These sessions cover a wide range of cybersecurity topics, including networking, penetration testing, cryptography and more.
</p>

<p>
    These sessions are typically 1 to 1.5 hours long, and include a quick lecture on the theory, followed by a practical exercise.
</p>

<h2>Responsibilities</h2>
<ul>
    <li>Planning and running weekly sessions</li>
    <li>Making myself available to help members</li>
    <li>Creating an inclusive environment for all members</li>
</ul>

<h2>What I've Accomplished</h2>
<Timeline>
    <TimelineEvent
        title="Elected as Inclusions Officer"
        subtitle="March 2025"
        icon={faCheckToSlot}
        colour="bg-purple-400">
        <p>
            I've regularly attended ShefESH's weekly sessions since September 2024.
            After almost two semesters of attending, I decided I wanted to get more involved.
            As a member of ShefESH Committee, I will be able to do deeper research into cybersecurity and networking, and then share that knowledge with our members at our weekly sessions.
        </p>

        <p>
            I went for the role of Inclusions Officer because I felt the position aligned best with my skills and interests.
            I want to ensure everyone feels welcome and is able to participate in our sessions.
        </p>
    </TimelineEvent>

    <TimelineEvent
        title="Dr Prosanta Gope Guest Lecture"
        subtitle="May 2025"
        icon={faChalkboard}
        colour="bg-red-400">
        <p>
            Dr Prosanta Gope is a well-known and respected lecturer at the School of Computer Science.
            He shares an interest in cybersecurity and networking with our society, so we asked him to deliver a guest lecture to our members.
        </p>

        <p>Dr Gope's lecture proved insightful, and encouraged a number of our members to continue their persuits into cybersecurity alongside their degree.</p>
    </TimelineEvent>
</Timeline>