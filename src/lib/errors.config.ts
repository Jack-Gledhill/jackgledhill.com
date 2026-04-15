import Anger from '$lib/assets/emotes/anger.png';
import Facepalm from '$lib/assets/emotes/facepalm.png';
import Sad from '$lib/assets/emotes/sad.png';
import Tea from '$lib/assets/emotes/tea.png';
import Thinking from '$lib/assets/emotes/thinking.png';

export const pageProps: ErrorPage.Config = {
    400: {
        title: 'Well this is awkward...',
        message: 'An unrecognised error has occurred. Please file a bug report.',
        emote: Thinking,
        isBug: false
    },
    401: {
        title: 'Halt! You got a license for that?',
        message: 'You need to authenticate before you can access this page.',
        emote: Thinking,
        isBug: false
    },
    403: {
        title: 'Missing Permissions',
        message: "Sorry pal, looks like you can't access that content.",
        emote: Facepalm,
        isBug: false
    },
    404: {
        title: 'Page Not Found',
        message: "Looks like the page you've requested doesn't exist.",
        emote: Thinking,
        isBug: false
    },
    418: {
        title: 'Woah! Crazy Easter Egg!',
        message: "I'm a little teapot, short and stout. Here is my handle, here is my spout. When I get all steamed up, hear me shout 'Tip me over and pour me out!'",
        emote: Tea,
        isBug: false
    },
    429: {
        title: "You've Been Ratelimited!",
        message: "Stop, you've violated the ratelimit policy! Pay the Court a fine or serve your sentence!",
        emote: Anger,
        isBug: false
    },
    451: {
        title: 'For Legal Reasons this Content is Unavailable',
        message: 'Move along, move along, nothing to see here. Please allow this button to guide you back home.',
        emote: Thinking,
        isBug: false
    },
    500: {
        title: 'Stop, hammer time!',
        message: "Something's broken. Very broken. An error like this shouldn't happen, please report this as a bug.",
        emote: Facepalm,
        isBug: true
    },
    502: {
        title: 'Under Construction',
        message: "Sorry, looks like that content isn't available yet. Check again later.",
        emote: Sad,
        isBug: false
    }
};

export const defaultProps: ErrorPage.Props = {
    title: 'Well, this is awkward...',
    message: "Sorry, it looks like an unknown error has occurred. I can't tell you any more about what happened, please report this as a bug.",
    emote: Thinking,
    isBug: true
}