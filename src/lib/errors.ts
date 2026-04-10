class ErrorPageProps {
    title: string;
    message: string;
    emote: string;
    bugBtn: boolean;

    constructor(title: string, message: string, emote: string, bugBtn: boolean = false) {
        this.title = title;
        this.message = message;
        this.emote = emote;
        this.bugBtn = bugBtn;
    }
}

const defaultPage: ErrorPageProps = new ErrorPageProps(
    'Well this is awkward...',
    'An unrecognised error has occurred. Please file a bug report.',
    '/images/thinking.png',
    true
);

export function getErrorPageProps(code: number): ErrorPageProps {
    return (
        {
            400: new ErrorPageProps(
                'Well this is awkward...',
                'An unrecognised error has occurred. Please file a bug report.',
                '/images/thinking.png'
            ),
            401: new ErrorPageProps(
                'Halt! You got a license for that?',
                'You need to authenticate before you can access this page.',
                '/images/thinking.png',
                true
            ),
            403: new ErrorPageProps(
                'Missing Permissions',
                "Sorry pal, looks like you can't access that content.",
                '/images/facepalm.png',
                true
            ),
            404: new ErrorPageProps(
                'Page Not Found',
                "Looks like the page you've requested doesn't exist.",
                '/images/thinking.png',
                true
            ),
            418: new ErrorPageProps(
                'Woah! Crazy Easter Egg!',
                "I'm a little teapot, short and stout. Here is my handle, here is my spout. When I get all steamed up, hear me shout 'Tip me over and pour me out!'",
                '/images/tea.png'
            ),
            429: new ErrorPageProps(
                "You've Been Ratelimited!",
                "Stop, you've violated the ratelimit policy! Pay the Court a fine or serve your sentence!",
                '/images/anger.png'
            ),
            451: new ErrorPageProps(
                'For Legal Reasons this Content is Unavailable',
                'Move along, move along, nothing to see here. Please allow this button to guide you back home.',
                '/images/thinking.png'
            ),
            500: new ErrorPageProps(
                'Stop, hammer time!',
                "Something's broken. Very broken. An error like this shouldn't happen, please report this as a bug.",
                '/images/facepalm.png',
                true
            ),
            502: new ErrorPageProps(
                'Under Construction',
                "Sorry, looks like that content isn't available yet. Check again later.",
                '/images/sad.png'
            )
        }[code] || defaultPage
    );
}