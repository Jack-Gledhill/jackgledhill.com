<script lang="ts">
    import "../styles/error.css";
    import { page } from "$app/state";

    import { Button, Head } from "$lib/components";
    import { Error } from "$lib/content";
    import { build } from "$lib/site.config.ts";

    import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
    import { faGithub } from "@fortawesome/free-brands-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

	const { title, message, emote }: Error.PageProps = Error.getPageProps(page.status);
</script>

<Head {title} />

<div class="min-h-screen p-8 lg:px-48 text-center flex flex-col justify-center">
    <div class="grid lg:grid-cols-3 gap-16 items-center">
        <div class="rounded-full mx-auto max-lg:w-3/4 bg-slate-800 border-10 border-slate-600">
            <enhanced:img src={emote} alt="" />
        </div>

        <div class="lg:col-span-2 flex flex-col gap-8">
            <h1>{page.status}</h1>
            <h2>{title}</h2>
            <p>{message}</p>

            <div class="flex flex-col lg:flex-row gap-8 justify-center">
                <Button colour="blue" href="/">
                    <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
                    Back home
                </Button>

                <Button colour="red" href={`${build.repository}/issues/new`} target="_blank">
                    <FontAwesomeIcon icon={faGithub} fixedWidth />
                    Report a bug
                </Button>
            </div>

            <hr />

            <table>
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
                                <a href={`${build.repository}/commit/${build.commit}`} target="_blank">{build.commit}</a>
                            {:else}
                                N/A
                            {/if}
                        </td>
                    </tr>
                    <tr>
                        <th>Release:</th>
                        <td>
                            {#if build.release}
                                <a href={`${build.repository}/releases/tag/${build.release}`} target="_blank">{build.release}</a>
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