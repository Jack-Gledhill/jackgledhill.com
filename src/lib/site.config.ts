import {
    PUBLIC_BUILD_TIME,
    PUBLIC_COMMIT,
    PUBLIC_ENVIRONMENT,
    PUBLIC_RELEASE
} from "$env/static/public";

import { VERSION as SVELTEKIT_VERSION } from "@sveltejs/kit";

export const build: Config.Build = {
    buildTime: PUBLIC_BUILD_TIME ? new Date(PUBLIC_BUILD_TIME) : new Date(),
    commit: PUBLIC_COMMIT,
    environment: PUBLIC_ENVIRONMENT || "development",
    release: PUBLIC_RELEASE,
    repository: "https://github.com/Jack-Gledhill/jackgledhill.com",
    svelteKit: SVELTEKIT_VERSION
};

export const env: Config.Environment = {
    isDev: build.environment !== "production"
};