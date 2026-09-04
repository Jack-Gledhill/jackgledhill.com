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

---

## Content Management

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing to this project.

## Development

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