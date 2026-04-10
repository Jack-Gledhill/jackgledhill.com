<script>
	import { page } from '$app/state';

    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	const errors = {
		400: { // Bad Request
			title: "PEBCAK Error",
            message: "You've sent an invalid request. What do you expect me to do with that?",
            emote: "/images/facepalm.png",
            bugBtn: true
        },
		401: { // Unauthorized
			title: "Halt! You got a license for that?",
            message: "You need to authenticate before you can access this page.",
            emote: "/images/thinking.png",
            bugBtn: true
        },
        403: { // Forbidden
			title: "Missing Permissions",
            message: "Sorry pal, looks like you can't access that content.",
            emote: "/images/facepalm.png",
            bugBtn: true
        },
		404: { // Not Found
			title: "Page Not Found",
            message: "Looks like the page you've requested doesn't exist.",
            emote: "/images/thinking.png",
            bugBtn: true
        },
        418: { // I'm a Teapot
			title: "Woah! Crazy Easter Egg!",
            message: "I'm a little teapot, short and stout. Here is my handle, here is my spout. When I get all steamed up, hear me shout 'Tip me over and pour me out!'",
            emote: "/images/tea.png",
            bugBtn: false
        },
        429: { // Too Many Requests
			title: "You've Been Ratelimited!",
            message: "Stop, you've violated the ratelimit policy! Pay the Court a fine or serve your sentence!",
            emote: "/images/anger.png",
            bugBtn: false
        },
        451: { // Unavailable for Legal Reasons
			title: "For Legal Reasons this Content is Unavailable",
            message: "Move along, move along, nothing to see here. Please allow this button to guide you back home.",
            emote: "/images/thinking.png",
            bugBtn: false
        },
        500: { // Internal Server Error
			title: "Stop, hammer time!",
            message: "Something's broken. Very broken. An error like this shouldn't happen, please report this as a bug.",
            emote: "/images/facepalm.png",
            bugBtn: true
        },
        501: { // Not Implemented
			title: "Under Construction",
            message: "Sorry, looks like that content isn't available yet. Check again later.",
            emote: "/images/sad.png",
            bugBtn: false
        }
    };
</script>

<svelte:head>
    <title>Well, this is awkward...</title>
</svelte:head>

<div class="min-h-screen p-8 lg:px-48 text-center flex flex-col justify-center">
    <div class="grid lg:grid-cols-3 gap-16 items-center">
        <div class="rounded-full mx-auto max-lg:w-3/4 bg-slate-800 border-10  border-slate-600">
            <img class="rounded-b-full" src={errors[page.status].emote} alt="Decorative emoji in Jack's likeness" />
        </div>

        <div class="lg:col-span-2 flex flex-col gap-8">
            <h1 class="text-8xl font-bold">{page.status}</h1>
            <h2 class="text-4xl font-bold">{errors[page.status].title}</h2>
            <p class="text-xl">{errors[page.status].message}</p>

            <div class="flex flex-col lg:flex-row gap-8 justify-center">
                <button>
                    <a class="max-lg:block rounded-lg p-4 bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" href="/">
                        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
                        Back home
                    </a>
                </button>

                {#if (errors[page.status].bugBtn)}
                    <button>
                        <a class="max-lg:block rounded-lg p-4 bg-red-500 hover:bg-red-700 transition duration-200 shadow-md" href="https://github.com/Jack-Gledhill/jackgledhill.com/issues/new">
                            <FontAwesomeIcon icon={faGithub} fixedWidth />
                            Report a bug
                        </a>
                    </button>
                {/if}
            </div>
        </div>
    </div>
</div>