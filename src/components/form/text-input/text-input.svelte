<script lang="ts">
	import { cn } from '$lib';

	import type { TextInputProps } from '.';
	import { textInputVariants } from '.';

	let { id, class: className, ...rest }: TextInputProps = $props();
</script>

<input class={cn(textInputVariants({ className }))} type="text" {id} {...rest} />
