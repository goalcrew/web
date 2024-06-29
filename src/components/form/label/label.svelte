<script lang="ts">
	import { createLabel, melt } from '@melt-ui/svelte';
	import { cn } from '$lib';

	import { labelVariants } from '.';
	import type { LabelProps } from '.';

	const {
		elements: { root }
	} = createLabel();

	let { id, children, class: className, ...rest }: LabelProps = $props();
</script>

<label class={cn(labelVariants({ className }))} for={id} use:melt={$root} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</label>
