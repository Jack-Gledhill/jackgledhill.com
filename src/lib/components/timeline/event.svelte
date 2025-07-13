<script>
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    const {
		title,
        subtitle,
        icon,
        colour,
		children
	} = $props();
</script>

<div class="grid grid-cols-12 gap-y-1 md:gap-y-4">
    <div class="hidden md:block md:col-span-2 text-center">
        <span class={`rounded-full ${colour} text-white p-2 text-3xl`}>
            <FontAwesomeIcon icon={icon} fixedWidth />
        </span>
    </div>

    <div class="col-span-12 md:col-span-10">
        <p class="font-bold text-xl">{title}</p>
        <p>{subtitle}</p>
    </div>

    <div class="md:col-span-1">
        <div class="border-r-1 border-slate-600 h-full"></div>
    </div>

    <div class="md:col-span-1">
        <div class="border-l-1 border-slate-600 h-full"></div>
    </div>

    <div class="col-span-12 md:col-span-10 grid grid-cols-1 gap-y-4">
        {@render children?.()}
    </div>
</div>