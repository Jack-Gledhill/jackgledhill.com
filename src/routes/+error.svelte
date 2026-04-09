<script>
	import { page } from '$app/state';

    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	const errors = {
		400: { // Bad Request
            msg: "You've sent an invalid request. What do you expect me to do with that?",
            img: "/images/facepalm.png"
        },
		401: { // Unauthorized
            msg: "Halt! You got a license for that? You need to authenticate before I can let you do that.",
            img: "/images/thinking.png"
        },
        403: { // Forbidden
			msg: "Sorry pal, looks like you can't access that content.",
            img: "/images/facepalm.png"
        },
		404: { // Not Found
			msg: "Looks like the page you've requested doesn't exist.",
            img: "/images/thinking.png"
        },
        418: { // I'm a Teapot
			msg: "I'm a little teapot, short and stout. Here is my handle, here is my spout. When I get all steamed up, hear me shout 'Tip me over and pour me out!'",
            img: "/images/tea.png"
        },
        429: { // Too Many Requests
			msg: "Stop, you've violated the ratelimit policy! Pay the Court a fine or serve your sentence!",
            img: "/images/anger.png",
        },
        451: { // Unavailable for Legal Reasons
			msg: "Move along, move along, nothing to see here. Please allow this button to guide you back home.",
            img: "/images/thinking.png"
        },
        500: { // Internal Server Error
			msg: "Something's broken. Very broken.",
            img: "/images/facepalm.png"
        },
        501: { // Not Implemented
            msg: "Sorry, looks like that content isn't available yet. Check again later.",
            img: "/images/sad.png"
        }
    };
</script>

<div class="min-h-screen p-8 lg:px-48 text-center flex flex-col justify-center">
    <div class="grid lg:grid-cols-3 gap-16 items-center">
        <div class="rounded-full mx-auto max-lg:w-3/4 bg-slate-800 border-10  border-slate-600">
            <img class="rounded-b-full" src={errors[page.status].img} alt="Decorative emoji in Jack's likeness" />
        </div>

        <div class="lg:col-span-2 flex flex-col gap-8">
            <h1 class="text-8xl font-bold">{page.status}</h1>
            <h2 class="text-4xl font-bold">Well, this is awkward...</h2>
            <p class="text-xl">{errors[page.status].msg}</p>

            <div class="flex flex-col lg:flex-row gap-8 justify-center">
                <button>
                    <a class="max-lg:block rounded-lg p-4 bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" href="/">
                        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
                        Back home
                    </a>
                </button>

                <button>
                    <a class="max-lg:block rounded-lg p-4 bg-red-500 hover:bg-red-700 transition duration-200 shadow-md" href="https://github.com/Jack-Gledhill/jackgledhill.com/issues/new">
                        <FontAwesomeIcon icon={faGithub} fixedWidth />
                        Report a bug
                    </a>
                </button>
            </div>
        </div>
    </div>
</div>