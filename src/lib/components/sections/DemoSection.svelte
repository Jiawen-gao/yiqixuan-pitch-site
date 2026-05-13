<script>
	import ExperimentPanel from '$lib/components/experiment-panel/ExperimentPanel.svelte';
	import PhoneDemo from '$lib/components/phone-demo/PhoneDemo.svelte';
	import { scenarios } from '$lib/data/scenarios';

	let activeScenario = scenarios[0];
	let activePerson = null;
	let phoneScreen = 0;

	// ExperimentPanel 抛 'change'，payload = { scenario, person }
	function handlePanelChange(e) {
		const { scenario, person } = e.detail ?? {};

		if (scenario) activeScenario = scenario;

		// 点头像：联动跳回屏 1，看 TA 的真实表态
		if (person && person !== activePerson) {
			activePerson = person;
			phoneScreen = 0;
		} else if (!person) {
			// 取消选中（换实验组时 selectedPersonId 被清空）→ 视角回到第一个人
			activePerson = null;
		}
	}
</script>

<section class="demo-section" id="demo">
	<div class="inner">
		<div class="left">
			<ExperimentPanel on:change={handlePanelChange} />
		</div>

		<div class="right">
			<PhoneDemo
				person={activePerson}
				scenario={activeScenario}
				bind:screen={phoneScreen}
			/>
		</div>
	</div>
</section>

<style>
	.demo-section {
		padding: clamp(48px, 8vw, 80px) clamp(16px, 4vw, 48px);
	}

	.inner {
		max-width: 980px;
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
