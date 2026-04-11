export const pageProps: ErrorPage.Config = {
    400: {
        title: 'Well this is awkward...',
        message: 'An unrecognised error has occurred. Please file a bug report.',
        emote: '/images/thinking.png',
        isBug: false
    },
    401: {
        title: 'Halt! You got a license for that?',
        message: 'You need to authenticate before you can access this page.',
        emote: '/images/thinking.png',
        isBug: true
    },
    403: {
        title: 'Missing Permissions',
        message: "Sorry pal, looks like you can't access that content.",
        emote: '/images/facepalm.png',
        isBug: true
    },
    404: {
        title: 'Page Not Found',
        message: "Looks like the page you've requested doesn't exist.",
        emote: '/images/thinking.png',
        isBug: true
    },
    418: {
        title: 'Woah! Crazy Easter Egg!',
        message: "I'm a little teapot, short and stout. Here is my handle, here is my spout. When I get all steamed up, hear me shout 'Tip me over and pour me out!'",
        emote: '/images/tea.png',
        isBug: false
    },
    429: {
        title: "You've Been Ratelimited!",
        message: "Stop, you've violated the ratelimit policy! Pay the Court a fine or serve your sentence!",
        emote: '/images/anger.png',
        isBug: false
    },
    451: {
        title: 'For Legal Reasons this Content is Unavailable',
        message: 'Move along, move along, nothing to see here. Please allow this button to guide you back home.',
        emote: '/images/thinking.png',
        isBug: false
    },
    500: {
        title: 'Stop, hammer time!',
        message: "Something's broken. Very broken. An error like this shouldn't happen, please report this as a bug.",
        emote: '/images/facepalm.png',
        isBug: true
    },
    502: {
        title: 'Under Construction',
        message: "Sorry, looks like that content isn't available yet. Check again later.",
        emote: '/images/sad.png',
        isBug: false
    }
};

export const defaultProps: ErrorPage.Props = {
    title: 'Well, this is awkward...',
    message: "Sorry, it looks like an unknown error has occurred. I can't tell you any more about what happened, please report this as a bug.",
    emote: '/images/thinking.png',
    isBug: true
}