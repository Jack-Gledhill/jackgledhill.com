# jackgledhill.com

Welcome to my personal portfolio website.
This website serves as a directory of my ongoing and past work, both professional and personal.

## Docker

A Docker image is built and pushed to the GitHub Container Registry on every push to the repository for the following tags:

- `latest`, only when a new release is published
- The tag of the release, when a new release is published
- The commit hash, for every push
- The branch name, for every push to a branch

The Docker image uses Vite's preview server, which is not recommended for production use.
However, it is sufficient for an it-just-works semi-production deployment.
The container exposes its web server on port `4173`.

To deploy with Docker Compose, you can either use the [`compose.yml`](/compose.yml) file provided in the repository (which will build on-demand), or use the following (which will always use a stable release):

```yaml
services:
  container_name: jackgledhill.com
  image: ghcr.io/jack-gledhill/jackgledhill.com:latest
  ports:
    - "4173:4173"
  restart: unless-stopped
```