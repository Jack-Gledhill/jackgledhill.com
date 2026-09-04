# Guidelines for Contributing

This site is written in [Svelte](http://svelte.dev/) and built with [SvelteKit](https://svelte.dev/docs/kit).
SvelteKit has been configured to do all rendering at build-time so that the website can be served with static-site hosts
like Cloudflare Workers and GitHub Pages.

## Installing the Application

### Prerequisites

You'll need to have the following installed on your machine in order to run the application locally:

- [Node.js](https://nodejs.org) v24 or higher

### Installing Dependencies

All dependencies for this project are managed with [npm](https://www.npmjs.com).
They can be installed locally by running:

```shell
npm install
```

### Running the Development Server

SvelteKit includes a development server that will automatically reload whenever you make changes to the code.
You can start it by running:

```shell
npm run dev
```

Once the server is running, you can access the application at [`localhost:5173`](http://localhost:5173).

## Contributing

### Commit Messages

This repository follows the [Conventional Commits v1.0.0 guidelines](https://www.conventionalcommits.org/en/v1.0.0/) for
commit messages. That is to say, commit messages should be structured as follows:

```
<type>(<scope>): <description>
```

Where `type` should be one of the following:

- `feat`: for new features
- `fix`: for bug or copy fixes
- `style`: for changes to the style of code
- `perf`: performance improvements
- `refactor`: for code refactoring
- `docs`: changes to documentation
- `test`: changes or additions to automated tests
- `ci`: updates to CI/CD workflows
- `chore`: maintenance tasks like updating dependencies or build scripts

And `scope` should be one of:

- `component`: changes to Svelte components
- `meta`: metadata changes to pages
- `copy`: changes to content on pages
- `style`: changes to styling
- `repo`: changes to the repository structure, documentation or configuration

### Submitting your Pull Request

Changes can be submitted for review by creating a Pull Request to the `main` branch.
Please ensure that your Pull Request includes a clear description of the changes you have made and the reasoning behind
them.
If your Pull Request is related to an issue, please reference the issue number in the description.

Pull Requests cannot be merged until they have been approved by at least one contributor and have passed the following
checks:

1. The Cloudflare Pages staging environment must build successfully
2. The Docker image must build successfully

When working on your Pull Request, please mark it as a draft until you are ready for it to be reviewed.

### Staging Environments

Every Pull Request will be published to a staging environment via Cloudflare Pages, so you can see your changes in
action before they are merged.
The URL for the staging environment will be listed in the description of your Pull Request by
@cloudflare-workers-and-pages.

### Publishing Changes

Once your Pull Request has been approved and merged, the changes will be automatically published to the staging website
([`staging.jackgledhill.com`](https://staging.jackgledhill.com)) via Cloudflare Pages.
These changes will then be published to the production website by GitHub Pages whenever a new release is published.
The changelog for each release will include a link to all Pull Requests that were merged since the last release, along
with a list of the contributors invovled in each PR.