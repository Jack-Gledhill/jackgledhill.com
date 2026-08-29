<script lang="ts">
    import { page } from '$app/state';

    import { Head } from '$lib/components';
    import { Error } from '$lib/content';
    import { build } from '$lib/site.config.ts';

    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    const { title, message, emote }: Error.PageProps = Error.getPageProps(page.status);
</script>

<style>
    table th {
        @apply text-left;
    }

    table td {
        @apply text-right;
    }
</style>

<Head {title} />

<div class="min-h-screen p-8 lg:px-48 text-center flex flex-col justify-center">
    <div class="grid lg:grid-cols-3 gap-16 items-center">
        <div class="rounded-full mx-auto max-lg:w-3/4 bg-slate-800 border-10 border-slate-600">
            <enhanced:img alt="" class="rounded-b-full" src={emote} />
        </div>

        <div class="lg:col-span-2 flex flex-col gap-8">
            <h1 class="text-8xl font-bold">{page.status}</h1>
            <h2 class="text-4xl font-bold">{title}</h2>
            <p class="text-xl">{message}</p>

            <div class="flex flex-col lg:flex-row gap-8 justify-center">
                <a data-colour="blue" href="/" role="button">
                    <FontAwesomeIcon fixedWidth icon={faArrowLeft} />
                    Back home
                </a>

                <a data-colour="red" href={`${build.repository}/issues/new`} role="button" target="_blank">
                    <FontAwesomeIcon fixedWidth icon={faGithub} />
                    Report a bug
                </a>
            </div>

            <hr class="border-slate-600 mt-4" />

            <table class="text-slate-400">
                <tbody>
                <tr>
                    <th>Build time:</th>
                    <td>{build.buildTime.toLocaleString()}</td>
                </tr>
                <tr>
                    <th>Environment:</th>
                    <td>{build.environment}</td>
                </tr>
                <tr>
                    <th>Commit:</th>
                    <td>
                        {#if build.commit}
                            <a data-colour="blue" href={`${build.repository}/commit/${build.commit}`}
                               target="_blank">{build.commit}</a>
                        {:else}
                            N/A
                        {/if}
                    </td>
                </tr>
                <tr>
                    <th>Release:</th>
                    <td>
                        {#if build.release}
                            <a data-colour="blue" href={`${build.repository}/releases/tag/${build.release}`}
                               target="_blank">{build.release}</a>
                        {:else}
                            N/A
                        {/if}
                    </td>
                </tr>
                <tr>
                    <th>SvelteKit Version:</th>
                    <td>{build.svelteKit}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>