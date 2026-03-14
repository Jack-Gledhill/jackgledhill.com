---
draft: false
title: Wanderlust
description: A full-stack web app written in Flask that helps groups find their ideal holiday destination based on their preferences. It uses the Gemini API to suggest a destination, the Skyscanner API to find flights and MongoDB as a backend.
keywords:
  - HackUPC
  - HackUPC 2025
  - Hackathon
  - MongoDB
  - Python
  - Flask
  - Skyscanner
  - Google Gemini
  - Twilio
  - DevPost
date: 2025-05-01
logo: 
  src: /images/hackupc25/logo.webp
  alt: HackUPC logo
links:
  github: thejmfc/hackupc25
  website: devpost.com/software/wanderlust-24eodz
---

<script>
    import {
        faFlagCheckered,
        faCode,
        faGavel
    } from '@fortawesome/free-solid-svg-icons';

    import Timeline from '$lib/components/timeline/timeline.svelte';
    import TimelineEvent from '$lib/components/timeline/event.svelte';
</script>

Wanderlust was a group project created by me and three friends from university.
The project was submitted for judging at HackUPC 2025, Europe's largest hackathon held at the Universitat Politècnica de Catalunya in Barcelona, Spain.

The hackathon had a number of sponsors, including Revolut, Skyscanner, Siemens, Grafana, Vueling, JetBrains, and more.
A number of these sponsors also offered unique challenges and prizes for the best solutions that were made.
My team chose to go with Skyscanner's challenge: making the best use of their API.

Our project was a travel planning app that allowed everyone in a group to add their travel preferences, interests and dates.
The app would then use the Google Gemini and Skyscanner APIs to generate a travel itinerary that would suit the entire group.

## Project Members

Wanderlust was created by a team of four students from the University of Sheffield, all studying Computer Science:

- Me (1st year)
- [Harry Clayton](https://www.linkedin.com/in/harry-clayton-123799231/) (1st year)
- [Euan Jones](https://euanjones.com) (1st year)
- [Adam Drummond](https://www.linkedin.com/in/adam-drummond/?originalSubdomain=uk) (Master's year)

## Project Progression

<Timeline>
    <TimelineEvent
        title="Project kickoff"
        subtitle="Friday"
        icon={faFlagCheckered}
        colour="bg-green-400">
        <p>
            Hacking began on Friday evening, shortly after the opening ceremony and dinner.
            By that point, we already had a few ideas in mind, and we quickly settled on the idea of a travel planning app.
        </p>
        <p>
            From there, we began brainstorming the features we wanted, and how we would achieve them.
            We decided the app would be written entirely in Python, and needed the following components:
        </p>
        <ul>
            <li>A MongoDB database hosted by <a href="https://www.mongodb.com/products/platform/atlas-database" target="_blank">MongoDB Atlas</a></li>
            <li>A <a href="https://developers.skyscanner.net/docs/flights-live-prices/overview" target="_blank">Skyscanner API</a> client</li>
            <li>A <a href="https://ai.google.dev" target="_blank">Google Gemini API</a> client</li>
            <li>A <a href="https://www.twilio.com/docs/usage/api" target="_blank">Twilio API</a> client</li>
            <li>And a <a href="https://flask.palletsprojects.com/en/stable/" target="_blank">Flask</a> frontend to connect it altogether</li>
        </ul>
        <p>
            In the end, my mission was the MongoDB database.
            I needed to decide how we were going to structure our data and how that would affect our inputs on the frontend.
            However, I was already very familiar with MongoDB by this point, so I wanted a challenge.
            Instead of using the tried-and-true <a href="https://www.mongodb.com/docs/languages/python/pymongo-driver/current/" target="_blank">pymongo</a>, I would instead use <a href="https://mongoengine.org" target="_blank">mongoengine</a>, which brought the classic ORM features of SQL to MongoDB.
        </p>
    </TimelineEvent>

    <TimelineEvent
        title="24 hours of hacking"
        subtitle="Saturday"
        icon={faCode}
        colour="bg-purple-400">
        <p>
            Saturday was a very long day (and night) of hacking. Our team worked tirelessly to implement the features we had planned before our time was up.
            Judging would begin on Sunday morning, so we had to be ready by then.
            We were awake as late as 3am working on the final touches to our project.
        </p>
    </TimelineEvent>

    <TimelineEvent
        title="Judging time"
        subtitle="Sunday"
        icon={faGavel}
        colour="bg-red-400">
        <p>
            Come Sunday morning, we were all pretty exhausted, but it was finally time to present our project to the judges.
            We had a 5 minute time limit to present our project, including any questions the judges had.
        </p>
        <p>
            In the end, we ended up presenting our project to three separate judge panels:
        </p>
        <ul>
            <li>The HackUPC organisers</li>
            <li>The Skyscanner reps</li>
            <li>Eren from <a href="https://mlh.io" target="_blank">Major League Hacking</a></li>
        </ul>
        <p>
            While we didn't win any prizes, we had lots of great feedback from the judges, and had an amazing weekend of fun and hacking.
        </p>
    </TimelineEvent>
</Timeline>

## What I Learnt

Wanderlust was my first hackathon project, and a great learning experience.
My key takeaways were:

- Interacting with the Gemini and Skyscanner APIs
- Using a MongoDB client in an Object-Oriented manner
- Working in a team under high time-pressure
- Hackathons are exhausting (but also fun!)