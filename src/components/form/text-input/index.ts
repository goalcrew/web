import type { HTMLAttributes } from 'svelte/elements';
import Root from './text-input.svelte';
import { tv, type VariantProps } from 'tailwind-variants';
import type { LabelProps } from '$components/form/label';
import type { Component } from 'svelte';

const variants = tv(
	{
		base: 'text-input',
		variants: {
			variant: {
				flat: 'text-input-flat',
				bordered: 'text-input-bordered',
				faded: 'text-input-faded',
				underlined: 'text-input-underlined'
			},
			color: {
				default: 'text-input-default',
				info: 'text-input-info',
				success: 'text-input-success',
				warning: 'text-input-warning',
				error: 'text-input-error'
			},
			size: {
				sm: 'text-input-sm',
				md: 'text-input-md',
				lg: 'text-input-lg'
			},
			radius: {
				none: 'text-input-radius-none',
				sm: 'text-input-radius-sm',
				md: 'text-input-radius-md',
				lg: 'text-input-radius-lg',
				full: 'text-input-radius-full'
			}
		}
	},
	{
		twMerge: false
	}
);

type Variant = VariantProps<typeof variants>['variant'];
type Color = VariantProps<typeof variants>['color'];
type Size = VariantProps<typeof variants>['size'];
type Radius = VariantProps<typeof variants>['radius'];

interface Props extends HTMLAttributes<HTMLInputElement> {
	id: string;
	class?: string;
	variant?: Variant;
	color?: Color;
	size?: Size;
	radius?: Radius;
	label?: {
		content: Component | string;
		id: string;
		labelPlacement?: 'inside' | 'outside';
		props?: Omit<LabelProps, 'children' | 'id'>;
	};
}

export { Root as TextInput, variants as textInputVariants, type Props as TextInputProps };
