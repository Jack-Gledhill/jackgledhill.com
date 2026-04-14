# jackgledhill.com

Welcome to my personal portfolio website.
This website serves as a directory of my ongoing and past work, both professional and personal.

## Docker

A Docker image is built and pushed to the GitHub Container Registry on every push to the repository for the following tags:

- `latest`, only when a new release is published
- The tag of the release, when a new release is published
- The commit hash, for every push
- The branch name, for every push to a branch

The Docker image uses a non-privileged version of Nginx to serve the build files.
Nginx exposes the website on port 8080.

To deploy with Docker Compose, you can either use the [`compose.yml`](/compose.yml) file provided in the repository (which will build on-demand), or use the following (which will always use a stable release):

```yaml
services:
  container_name: jackgledhill.com
  image: ghcr.io/jack-gledhill/jackgledhill.com:latest
  ports:
    - "8080:8080"
  restart: unless-stopped
```