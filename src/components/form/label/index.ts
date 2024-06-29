import type { HTMLAttributes } from 'svelte/elements';
import Root from './label.svelte';
import { tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';

const variants = tv({
	base: 'text-red-500'
});

interface Props extends HTMLAttributes<HTMLLabelElement> {
	id: string;
	children: Snippet;
	class?: string;
}

export { Root as Label, variants as labelVariants, type Props as LabelProps };
