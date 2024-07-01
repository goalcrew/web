<script lang="ts">
	import { Fragment } from '@master/css.svelte';
	import { onMount } from 'svelte';

	let CSSRuntimeProvider = $state(Fragment as any);

	onMount(async () => {
		CSSRuntimeProvider = (await import('@master/css.svelte')).default;
	});

	const { children } = $props();
</script>

<svelte:component this={CSSRuntimeProvider} config={import('../../master.css')}>
	{@render children()}
</svelte:component>
