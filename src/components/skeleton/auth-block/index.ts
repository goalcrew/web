import type { ZodSchema } from 'zod';
import Root from './auth-block.svelte';

export type Method = 'POST' | 'GET';

interface Props {
	title: string;
	description: string;
	// TODO: Make correct when the form library is chosen
	formOptions: {
		schema: ZodSchema<any>;
		method: Method;
	};
}

export { Root as AuthBlock, type Props as AuthBlockProps };
