<script lang="ts">
    let { colour, href, children } = $props();

    const classes = {
        blue: ["bg-blue-500", "hover:bg-blue-700"],
        red: ["bg-red-500", "hover:bg-red-700"]
    };
</script>

<a {href} class={["max-lg:block", "rounded-lg", "p-4", "shadow-md", "transition", "duration-200"].concat(classes[colour]).join(" ")}>
    {@render children?.()}
</a>