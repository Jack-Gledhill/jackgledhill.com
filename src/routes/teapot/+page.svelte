<script lang="ts">
    import "../../styles/error.css";

    import emote from "$lib/assets/emotes/tea.webp?enhanced";
    import { Button, Head } from "$lib/components";

    import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
</script>

<Head title="Woah! Crazy Easter Egg!" />

<div class="min-h-screen p-8 lg:px-48 text-center flex flex-col justify-center">
    <div class="grid lg:grid-cols-3 gap-16 items-center">
        <div class="rounded-full mx-auto max-lg:w-3/4 bg-slate-800 border-10 border-slate-600">
            <enhanced:img src={emote} alt="" />
        </div>

        <div class="lg:col-span-2 flex flex-col gap-8">
            <h1>418</h1>
            <h2>Woah! Crazy Easter Egg!</h2>
            <p>
                I'm a little teapot, short and stout.
                Here is my handle, here is my spout.
                When I get all steamed up, hear me shout 'Tip me over and pour me out!'
            </p>

            <div class="flex flex-col lg:flex-row gap-8 justify-center">
                <Button colour="blue" href="/">
                    <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
                    Back home
                </Button>
            </div>
        </div>
    </div>
</div>