<script>
	import { createEventDispatcher } from 'svelte';
	import { scenarios } from '$lib/data/scenarios.js';
	import ScenarioSwitcher from './ScenarioSwitcher.svelte';
	import ParticipantGrid from './ParticipantGrid.svelte';

	const dispatch = createEventDispatcher();

	let activeIdx = 0;
	let selectedPersonId = scenarios[0].people[0].id;

	$: activeScenario = scenarios[activeIdx];
	$: selectedPerson = activeScenario.people.find((p) => p.id === selectedPersonId) ?? null;

	// 把状态向上抛 —— 给右侧手机用
	$: dispatch('change', { scenario: activeScenario, person: selectedPerson });

	function handleSelectScenario(e) {
		activeIdx = e.detail;
		selectedPersonId = scenarios[0].people[0].id;
	}

	function handleSelectPerson(e) {
		selectedPersonId = e.detail;
	}
</script>

<aside class="panel">
	<ScenarioSwitcher
		{scenarios}
		{activeIdx}
		on:select={handleSelectScenario}
	/>

	<div class="divider"></div>

	<ParticipantGrid
		people={activeScenario.people}
		selectedId={selectedPersonId}
		on:select={handleSelectPerson}
	/>

	<div class="hint">
		<span class="hint-dot"></span>
		点头像，看 TA 在决策板上的真实表态
	</div>
</aside>

<style>
	.panel {
		background: #FAF7EF;
		border: 1px solid #E8E1CF;
		border-radius: 28px;
		padding: 32px 28px;
		position: sticky;
		top: 24px;
	}

	.divider {
		height: 1px;
		background: #E8E1CF;
		margin: 24px 0;
	}

	.hint {
		font-size: 12px;
		color: #A89F8C;
		display: flex;
		align-items: center;
		gap: 6px;
		padding-top: 4px;
	}

	.hint-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #A89F8C;
		opacity: 0.6;
	}
</style>
