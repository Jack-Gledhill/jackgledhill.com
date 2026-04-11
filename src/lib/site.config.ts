import { VERSION as SVELTEKIT_VERSION } from '@sveltejs/kit';
import { env as vars } from '$env/dynamic/public';

export const build: Config.Build = {
    buildTime: vars.PUBLIC_BUILD_TIME ? new Date(vars.PUBLIC_BUILD_TIME) : new Date(),
    commit: vars.PUBLIC_COMMIT,
    release: vars.PUBLIC_RELEASE,
    repository: 'https://github.com/Jack-Gledhill/jackgledhill.com',
    svelteKit: SVELTEKIT_VERSION
};

export const env: Config.Environment = {
    isDev: vars.PUBLIC_MODE !== 'production'
};

export const head: Config.Head = {
    title: 'Jack Gledhill',
    description: 'Jack is a Software Engineering student at the University of Sheffield, with a passion for DevOps and Kubernetes. He is involved in numerous student societies, and has been a key organiser in HackSheffield - the third largest hackathon in the UK.',
    keywords: [
        'Software Engineer',
        'Sheffield Software Engineer',
        'Software Developer',
        'Sheffield Software Developer',
        'Web Developer',
        'Sheffield Web Developer',
        'DevOps Engineer',
        'Kubernetes Engineer',
        'HackSheffield',
        'Hackathon',
        'University of Sheffield',
        'Python',
        'Golang',
        'JavaScript',
        'Kubernetes',
        'React',
        'Svelte',
        'Docker'
    ],
    banner: {
        src: '/twittercard.webp',
        alt: 'Photo of Jack at ICHack 2026',
        width: '5906',
        height: '3937'
    }
};

export const hero: Config.Hero = {
    title: 'Jack Gledhill',
    subtitle: 'Software Engineer',
    email: 'me@jackgledhill.com',
    image: {
        src: '/images/portrait.webp',
        alt: 'Portrait of Jack surrounded by greenery'
    },
    socials: {
        github: 'Jack-Gledhill',
        linkedin: 'LinkedIn',
        orcid: '0009-0000-3055-0714'
    },
    positions: [
        {
            title: 'Web Developer',
            company: "Sheffield Students' Union",
            href: 'https://su.sheffield.ac.uk'
        },
        {
            title: 'MEng Software Engineering',
            company: 'University of Sheffield',
            href: 'https://sheffield.ac.uk'
        }
    ]
}

export const footer: Config.Footer = {
    wordmark: {
        src: '/images/wordmark.webp',
        alt: "Jack Gledhill's logo"
    }
};