<script>
	import {
		faFlagCheckered,
        faCode,
        faGavel,
        faBug,
        faPlaneDeparture,
        faPlaneArrival
    } from '@fortawesome/free-solid-svg-icons';

    import Timeline from '$lib/components/timeline/timeline.svelte';
    import TimelineEvent from '$lib/components/timeline/event.svelte';
</script>

<h1>About the Project</h1>
<p>
    Wanderlust was a group project created by me and three friends from university.
    The project was submitted for judging at HackUPC 2025, Europe's largest hackathon held at the Universitat Politècnica de Catalunya in Barcelona, Spain.
</p>
<p>
    The hackathon had a number of sponsors, including Revolut, Skyscanner, Siemens, Grafana, Vueling, JetBrains, and more.
    A number of these sponsors also offered unique challenges and prizes for the best solutions that were made.
    My team chose to go with Skyscanner's challenge: making the best use of their API.
</p>

<p>
    Our project was a travel planning app that allowed everyone in a group to add their travel preferences, interests and dates.
    The app would then use the Google Gemini and Skyscanner APIs to generate a travel itinerary that would suit the entire group.
</p>

<h2>Project Members</h2>
<p>
    Wanderlust was created by a team of four students from the University of Sheffield, all studying Computer Science:
</p>
<ul>
    <li>Me (1st year)</li>
    <li><a href="https://www.linkedin.com/in/harry-clayton-123799231/" target="_blank">Harry Clayton</a> (1st year)</li>
    <li><a href="https://euanjones.com" target="_blank">Euan Jones</a> (1st year)</li>
    <li><a href="https://www.linkedin.com/in/adam-drummond/?originalSubdomain=uk" target="_blank">Adam Drummond</a> (Master's year)</li>
</ul>

<h2>Project Progression</h2>
<Timeline>
    <TimelineEvent
        title="Landing in BCN"
        subtitle="Wednesday Evening"
        icon={faPlaneArrival}
        colour="bg-yellow-500">
        <p>
            We decided to fly down to Barca a few days early - we wanted to see the city and enjoy some of the delish Spanish cuisine while we had the chance.
            We spent the next few days touring the city's attractions, tasting the food and, in general, being tourists.
        </p>
    </TimelineEvent>

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
        title="Find the Biene"
        subtitle="Friday Evening"
        icon={faBug}
        colour="bg-blue-400">
        <p>
            After we had our plan, we decided to take a break and enjoy some of the activities that were available during the hackathon.
            One of the activities was a scavenger hunt called "Find the Biene", where we had to find all 24 hidden bees around the venue.
        </p>
        <p>
            It took a good few hours, and a lot of questing, but we eventually found them all!
            We were rewarded for our efforts with a Biene keychain, and a sticker on our activity card (which we could use to get other prizes if we got three in a row).
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

    <TimelineEvent
        title="Home and Away"
        subtitle="Sunday Evening"
        icon={faPlaneDeparture}
        colour="bg-yellow-500">
        <p>
            With HackUPC now over, it was time to head home.
            We'd been in Barcelona since Wednesday, enjoying the beautiful sights and culture of the city.
        </p>
        <p>
            Naturally, our flight home was delayed by about 2 hours, so we decided to pass the time trying out <a href="https://www.vueling.com/en" target="_blank">Vueling's</a> bananas (inflatable banana-shaped beds that you can relax on while you wait for a flight).
            Needless to say, the other passengers seemed very amused by our antics.
        </p>
    </TimelineEvent>
</Timeline>

<h2>What I Learnt</h2>
<p>
    Wanderlust was my first hackathon project, and a great learning experience.
    My key takeaways were:
</p>
<ul>
    <li>Interacting with the Gemini and Skyscanner APIs</li>
    <li>Using a MongoDB client in an Object-Oriented manner</li>
    <li>Working in a team under high time-pressure</li>
    <li>Hackathons are exhausting (but also fun!)</li>
</ul>