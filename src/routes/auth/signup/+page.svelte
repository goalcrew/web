<script lang="ts">
	import { z } from 'zod';
	import AuthBlock from '$components/skeleton/auth-block/auth-block.svelte';

	const signUpSchema = z.object({
		email: z.string().email()
	});
</script>

<AuthBlock
	title="Create an account"
	description="Which instead determine the dependencies of their expressions when they are evaluated"
	formOptions={{
		schema: signUpSchema,
		method: 'POST'
	}}
></AuthBlock>
