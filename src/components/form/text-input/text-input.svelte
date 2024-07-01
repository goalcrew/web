<script lang="ts">
	import type { TextInputProps } from '.';
	import { textInputVariants } from '.';
	import { Label } from '$components/form/label';

	let {
		id,
		class: className,
		variant,
		color,
		size,
		radius,
		label,
		...rest
	}: TextInputProps = $props();
</script>

{#if label}
	<Label id={label.id} {...label.props}>
		{label.content}
	</Label>
{/if}

<input
	class={textInputVariants({ className, variant, color, size, radius })}
	type="text"
	{id}
	{...rest}
/>
