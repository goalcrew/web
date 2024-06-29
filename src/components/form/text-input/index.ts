import type { HTMLAttributes } from 'svelte/elements';
import Root from './text-input.svelte';
import { tv } from 'tailwind-variants';

const variants = tv({
	base: 'text-red-500'
});

interface Props extends HTMLAttributes<HTMLInputElement> {
	id: string;
	class?: string;
}

export { Root as TextInput, variants as textInputVariants, type Props as TextInputProps };
