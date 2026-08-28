import {
    PUBLIC_BUILD_TIME,
    PUBLIC_COMMIT,
    PUBLIC_ENVIRONMENT,
    PUBLIC_RELEASE
} from '$env/static/public';

import { VERSION as SVELTEKIT_VERSION } from '@sveltejs/kit';

export const build: Config.Build = {
    buildTime: PUBLIC_BUILD_TIME ? new Date(PUBLIC_BUILD_TIME) : new Date(),
    commit: PUBLIC_COMMIT,
    environment: PUBLIC_ENVIRONMENT || 'development',
    release: PUBLIC_RELEASE,
    repository: 'https://github.com/Jack-Gledhill/jackgledhill.com',
    svelteKit: SVELTEKIT_VERSION
};

export const env: Config.Environment = {
    isDev: build.environment !== 'production'
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