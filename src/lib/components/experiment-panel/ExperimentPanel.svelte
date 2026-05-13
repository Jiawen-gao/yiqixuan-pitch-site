<script>
	import ScenarioSwitcher from './ScenarioSwitcher.svelte';
	import ParticipantGrid from './ParticipantGrid.svelte';

	import { archetypes } from '$lib/data/archetypes';

	export let scenarios = [];
	export let currentScenario = 0;
	export let onChangeScenario = () => {};
	export let scenario;
</script>

<div class="panel">
	<p class="eyebrow">实验设定</p>
	<h2>同一个决策板，在不同 8 人局里，会给出不同的共识结果。</h2>
	<p class="intro">
		我们用三种朋友约饭场景做对照实验。左侧切换局，右侧实时查看这个工具如何收集候选项、汇总偏好，并生成最终建议。
	</p>

	<ScenarioSwitcher
		{scenarios}
		{currentScenario}
		{onChangeScenario}
	/>

	<div class="scenario-meta">
		<h3>{scenario.name}</h3>
		<p>{scenario.subtitle}</p>
	</div>

	<ParticipantGrid members={scenario.members} {archetypes} />
</div>

<style>
	.panel {
		padding: 28px;
		border-radius: 28px;
		background: rgba(255, 255, 255, 0.52);
		border: 1px solid rgba(31, 27, 22, 0.08);
		backdrop-filter: blur(12px);
	}

	.eyebrow {
		margin: 0 0 12px;
		font-size: 12px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #8a7966;
	}

	h2 {
		margin: 0 0 14px;
		font-size: clamp(28px, 4vw, 44px);
		line-height: 1.05;
		letter-spacing: -0.03em;
		max-width: 11ch;
	}

	.intro {
		margin: 0 0 24px;
		line-height: 1.75;
		color: #5f5549;
		max-width: 44ch;
	}

	.scenario-meta {
		margin: 20px 0 18px;
	}

	.scenario-meta h3 {
		margin: 0 0 6px;
		font-size: 20px;
	}

	.scenario-meta p {
		margin: 0;
		font-size: 14px;
		line-height: 1.6;
		color: #6a5f53;
	}
</style>