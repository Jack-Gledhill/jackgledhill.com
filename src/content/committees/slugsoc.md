---
draft: false
title: SLUGSoc
description: SLUGSoc is Sheffield's LAN Gaming Society, providing a space for students to enjoy video games together. It hosts regular LANs, socials and tournaments, and is a great way to meet fellow gamers at the University of Sheffield.
keywords:
  - LAN gaming
  - SLUGSoc
  - University of Sheffield
  - Sheffield Students' Union
start: 2025-03-01
position: Technical Officer
logo: 
  src: /images/slugsoc.webp
  alt: SLUGSoc logo
links:
  discord: VvUCXCT
  github: SLUGSoc
  instagram: slugsoc
  linkedin: university-of-sheffield-lan-gaming-society
  website: slugsoc.co.uk
---

<script>
	import {
		faCheckToSlot,
		faLock
	} from '@fortawesome/free-solid-svg-icons';

	import Timeline from '$lib/components/timeline/timeline.svelte';
	import TimelineEvent from '$lib/components/timeline/event.svelte';
</script>

SLUGSoc is quite a popular society at the University of Sheffield.
It focuses primarily on video games, and even has a number of e-sports teams that compete in various leagues.

## Responsibilities

- Securing the society's server
- Ensuring Committee can access our servers
- Managing the society's Minecraft servers
- Setting up equipment at our LAN events
- Writing technical documentation for the Committee

## What I've Accomplished

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