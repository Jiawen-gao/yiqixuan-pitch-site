<script>
	import ExperimentPanel from '$lib/components/experiment-panel/ExperimentPanel.svelte';
	import PhoneDemo from '$lib/components/phone-demo/PhoneDemo.svelte';
	import { scenarios } from '$lib/data/scenarios';
	import { options } from '$lib/data/options';
	import { computeConsensus } from '$lib/utils/computeConsensus';

	let currentScenario = 0;

	$: activeScenario = scenarios[currentScenario];
	$: consensus = computeConsensus(activeScenario, options);
</script>

<section class="demo-section" id="demo">
	<div class="inner">
		<div class="left">
			<ExperimentPanel
				scenarios={scenarios}
				currentScenario={currentScenario}
				onChangeScenario={(index) => (currentScenario = index)}
				scenario={activeScenario}
			/>
		</div>

		<div class="right">
			<PhoneDemo
				scenario={activeScenario}
				options={options}
				consensus={consensus}
			/>
		</div>
	</div>
</section>

<style>
	.demo-section {
		padding: 88px 24px;
	}

	.inner {
		max-width: 1320px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: minmax(460px, 520px) minmax(420px, 1fr);
		gap: 32px;
		align-items: start;
	}

	.left {
		position: sticky;
		top: 24px;
	}

	.right {
		display: flex;
		justify-content: center;
	}

	@media (max-width: 980px) {
		.inner {
			grid-template-columns: 1fr;
		}

		.left {
			position: static;
		}
	}
</style>