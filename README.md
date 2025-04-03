# jackgledhill.com

This here is my portfolio website. Currently, it is just a single-page website that introduces me and the work I've done throughout my time in industry and at University.

## Docker

See [here](https://github.com/Jack-Gledhill/jackgledhill.com/pkgs/container/jackgledhill.com) for a container form of this website. It uses Vite's `preview` command as a server for the assets.

To deploy with Docker Compose, you can either use the [`compose.yml`](/compose.yml) file provided in the repository (which will build on-demand), or use the following (which will always use a stable release):

```yaml
services:
  container_name: jackgledhill.com
  image: ghcr.io/jack-gledhill/jackgledhill.com:latest
  ports:
    - "4173:4173"
  restart: unless-stopped
```

## Contributing

This site is written in [Svelte](http://svelte.dev/) and built with [SvelteKit](https://svelte.dev/docs/kit). SvelteKit has been configured to do all rendering at build-time so that the website can be served with static-site hosts like Cloudflare Workers and GitHub Pages.

You can run a live version of the codebase with the following commands, assuming you have `npm` and Node.js v23 installed on your machine:
```shell
npm install
npm run dev
```

If you wish to contribute to the project, please fork the repository and submit a Pull Request with your changes.

## CI/CD

I've used this repository as a good excuse to dip my feet into CI/CD pipelines. Currently, the following are in place:

- Publishing a release will build and deploy the `main` branch to [production](https://jackgledhill.com) via GitHub Pages
- Every commit to the `main` branch will be pushed to a public [staging](https://staging.jackgledhill.com) website via Cloudflare Pages
- Every Pull Request will be published to a staging website via Cloudflare Pages (please see each individual PR for the URL)
- New releases will trigger a Docker image to be published to `latest`
- A Docker image is built for every tag with that tag's name
- Every push to the `main` branch will have a Docker image generated, using that commit's hash as the tag
- Dependabot will watch for potential dependency updates and automatically make Pull Requests when updates are found
- Dependabot will report potential security vulnerabilities in dependencies to contributors