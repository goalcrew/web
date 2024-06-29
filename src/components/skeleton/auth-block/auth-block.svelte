<script lang="ts">
	import { Label } from '$components/form/label';
	import { TextInput } from '$components/form/text-input';
	import type { AuthBlockProps, Method } from '.';

	let { title, description, formOptions }: AuthBlockProps = $props();
</script>

<div>
	<section></section>

	<section>
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>

		{#snippet textInput()}
			<div>
				<Label id="test">test</Label>
				<TextInput id="test" class="bg-green-500" />
			</div>
		{/snippet}

		{#snippet form(method: Method)}
			<form {method}>
				{@render textInput()}
			</form>
		{/snippet}

		{#if formOptions}
			{@render form(formOptions.method)}
		{/if}
	</section>
</div>
