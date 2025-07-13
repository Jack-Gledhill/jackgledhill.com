<script>
    import {
        faCheckToSlot,
        faGhost,
        faLaptopCode,
        faGun,
        faDatabase,
        faDharmachakra
    } from '@fortawesome/free-solid-svg-icons';

    import Timeline from '$lib/components/timeline/timeline.svelte';
    import TimelineEvent from '$lib/components/timeline/event.svelte';
</script>

<h1>Introduction</h1>
<p>Sheffield's Computer Science Society (aka Sheffield CompSoc, or just CompSoc) is a departmental society for students studying under the School of Computer Science at the University of Sheffield.</p>
<p>While the society does run a lot of technical workshops and events, it also hosts a number of social events. This includes barcrawls, a Christmas party and a Summer Ball.</p>

<h2>Responsibilities</h2>
<ul>
    <li>Promoting events to first year students</li>
    <li>Organising society socials and events</li>
    <li>Stewarding barcrawls</li>
</ul>

<h2>What I've Accomplished</h2>
<Timeline>
    <TimelineEvent
        title="Elected as First Year Representative"
        subtitle="Oct 2024"
        icon={faCheckToSlot}
        colour="bg-purple-400">
        <p>
            After attending several CompSoc freshers events, I decided I wanted to get involved.
            There were several positions available, but I felt that First Year Representative would be a great place to start.
        </p>
    </TimelineEvent>

    <TimelineEvent
        title="HackSheffield 9"
        subtitle="Oct - Nov 2024"
        icon={faLaptopCode}
        colour="bg-green-400">
        <p>
            Immediately after being elected, I joined the HackSheffield 9 Subcommittee as Technical Lead.
            I regularly attended meetings in the run-up to the event, presenting new ideas to the Subcommittee and voting on key decisions that would help shape the future of HackSheffield.
        </p>

        <p>
            You can read more about my time at HackSheffield 9 <a href="/events/hs9">here</a>.
        </p>

        <!-- Under this new role, I took responsibility for the event's technical needs. This included automating hacker registration on Discord, arranging AV equipment for the opening and closing ceremonies,  -->
    </TimelineEvent>

    <TimelineEvent
        title="Stewarded the Halloween Barcrawl"
        subtitle="Nov 2024"
        icon={faGhost}
        colour="bg-orange-400">
        <p>
            Throughout the year, CompSoc hosts a variety of barcrawls attended by hundreds of students.
            To ensure the safety of our members, I volunteered to be a steward for our Halloween barcrawl.
        </p>
    </TimelineEvent>

    <TimelineEvent
        title="MySQL Workshop"
        subtitle="Nov 2024"
        icon={faDatabase}
        colour="bg-blue-400">
        <p>
            Our Technical Events Coordinator, Akeylah, asked me to run this workshop after a scheduling conflict left the workshop without a host.
            As someone with practical experience using SQL, I was happy to step in and host the workshop instead.
        </p>
    </TimelineEvent>

    <TimelineEvent
        title="Marshal for Assassins Guild Collab"
        subtitle="Nov 2024"
        icon={faGun}
        colour="bg-red-400">
        <p>
            In November 2024, CompSoc collaborated with the Assassins Guild to host an afternoon of nerf battles in our SU building.
            As part of our collaboration, CompSoc asked me to attend as a Marshal, to ensure the safety of participants and of the general public during the event.
        </p>
    </TimelineEvent>

    <TimelineEvent
        title="Kubernetes Workshop"
        subtitle="April 2025"
        icon={faDharmachakra}
        colour="bg-blue-400">
        <p>
            I spent the summer of 2024 learning Kubernetes and applying it to a real-life project: <a href="/project/constellation">Constellation</a>.
            In October 2024, I decided I wanted to help others learn Kubernetes, without the steep learning curve I had to overcome.
        </p>

        <p>
            Read more about the workshop <a href="/events/k8s-workshop">here</a>.
        </p>
    </TimelineEvent>
</Timeline>