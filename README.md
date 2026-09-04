<div align="center">

<img src="src/lib/assets/emblem/hexagon.webp" alt="Jack Gledhill" width="128" height="128" />

# jackgledhill.com

[![Svelte](https://img.shields.io/github/package-json/dependency-version/Jack-Gledhill/jackgledhill.com/dev/svelte?style=flat-square&logo=svelte&logoColor=white&label=Svelte&labelColor=black&color=ff3e00)](https://svelte.dev) [![Tailwind CSS](https://img.shields.io/github/package-json/dependency-version/Jack-Gledhill/jackgledhill.com/dev/tailwindcss?style=flat-square&logo=tailwindcss&logoColor=white&label=Tailwind&labelColor=black&color=00bcff)](https://tailwindcss.com)

[![Docker Build](https://github.com/Jack-Gledhill/jackgledhill.com/actions/workflows/docker.yml/badge.svg)](https://github.com/Jack-Gledhill/jackgledhill.com/actions/workflows/docker.yml) [![GitHub Pages](https://github.com/Jack-Gledhill/jackgledhill.com/actions/workflows/pages.yml/badge.svg)](https://github.com/Jack-Gledhill/jackgledhill.com/actions/workflows/pages.yml) [![Lighthouse Audit](https://github.com/Jack-Gledhill/jackgledhill.com/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/Jack-Gledhill/jackgledhill.com/actions/workflows/lighthouse.yml)

Welcome to my personal portfolio website.
This website serves as a directory of my ongoing and past work, both professional and personal.
</div>

---

## Repository Structure

```
jackgledhill.com
├── .github/            # Actions workflows, templates and configurations
├── src                 # Website source code
│   └── lib/
│       ├── assets/     # Images used in the website, optimised at build time
│       ├── components/ # Svelte components used in the website
│       └── content/    # TypeScript library for managing content
└── static/             # Static files hosted at the website's root
```

---

## Hosting

[jackgledhill.com](https://jackgledhill.com) is served via GitHub Pages and automatically updated when a new release is
published. Staging and preview builds are also hosted and deployed by Cloudflare Pages whenever a commit is pushed to
the repository.

### Publishing

New versions of the website are published
by [creating a new release](https://github.com/Jack-Gledhill/jackgledhill.com/releases/new). Tag names should always
adhere to the [Semantic Versioning](https://semver.org/) specification, and the release title should be the same as the
tag name.

---

## Content Management

Much of the website's content is static, meaning it is hard-coded into the page/component's source file. However, some
content is better suited to being managed in a more structured way - the best example of this is the list of work
experience, projects and research papers on the homepage. These works all follow the same, rigid structure and can be
cleanly defined as TypeScript objects.

### Homepage Cards

All cards on the homepage are defined in [`/src/lib/content/homepage.ts`](/src/lib/content/homepage.ts) and rendered by
the [card.svelte](/src/lib/components/card.svelte) component. Cards all use the same structure, defined by the `Card`
interface in [`/src/lib/content/homepage.ts`](/src/lib/content/homepage.ts).

---

## Development

### Local Installation

Setup is very simple. Assuming you have Node.js v24>= installed, just run the following:

```shell
npm i
npm run dev
```

Then go to [localhost:5173](http://localhost:5173) in your browser to view the website.

### Docker

A Docker image is built and pushed to the GitHub Container Registry on every push to the repository for the following
tags:

- `latest`, only when a new release is published
- The tag of the release, when a new release is published
- The commit hash, for every push
- The branch name, for every push to a branch

The Docker image uses a non-privileged version of Nginx to serve the build files.
Nginx exposes the website on port 8080.

To deploy with Docker Compose, you can either use the [`compose.yml`](/compose.yml) file provided in the repository
(which will build on-demand), or use the following (which will always use a stable release):

```yaml
services:
  container_name: jackgledhill.com
  image: ghcr.io/jack-gledhill/jackgledhill.com:latest
  ports:
    - "8080:8080"
  restart: unless-stopped
```

### Building

Building the website (either by `npm run build` or `docker build`) will bake several environment variables into the dist
files, providing metadata about when, where and how the build was created. These variables are as follows.

| Variable             | Available                                   | Description                                                                                                                                                                                                                              |
|----------------------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `PUBLIC_BUILD_TIME`  | Anywhere                                    | An ISO 8601 timestamp indicating when the build was generated.                                                                                                                                                                           |
| `PUBLIC_ENVIRONMENT` | Anywhere                                    | A string indicating the environment the build was generated in. Should be `production` when deployed by GitHub Pages, `staging` when deployed by Cloudflare Pages, `audit` when being tested by CI/CD and `development` everywhere else. |
| `PUBLIC_COMMIT`      | GitHub Pages, Cloudflare Pages, GHCR images | The hash of the latest commit of the current branch when the project was built. Only present in GitHub/Cloudflare Pages builds and public Docker images.                                                                                 |
| `PUBLIC_RELEASE`     | GitHub Pages, Cloudflare Pages, GHCR images | The name of the branch in Cloudflare Pages and public Docker builds or the name of the latest tag/release in GitHub Pages builds. Empty otherwise.                                                                                       |

### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing to this project.