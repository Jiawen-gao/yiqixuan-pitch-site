<script>
	export let scenarios = [];
	export let currentScenario = 0;
	export let onChangeScenario = () => {};
</script>

<div class="switcher">
	{#each scenarios as item, index}
		<button
			class:active={index === currentScenario}
			on:click={() => onChangeScenario(index)}
		>
			<span>{item.name}</span>
			<small>{item.subtitle}</small>
		</button>
	{/each}
</div>

<style>
	.switcher {
		display: grid;
		gap: 10px;
	}

	button {
		text-align: left;
		padding: 14px 16px;
		border-radius: 20px;
		border: 1px solid rgba(31, 27, 22, 0.08);
		background: #f5eee3;
		cursor: pointer;
		transition: 180ms ease;
	}

	button.active {
		background: #1f1b16;
		color: #f7f3ea;
		border-color: #1f1b16;
	}

	button span {
		display: block;
		font-size: 14px;
		font-weight: 700;
		margin-bottom: 4px;
	}

	button small {
		display: block;
		font-size: 12px;
		line-height: 1.5;
		opacity: 0.78;
	}
</style>