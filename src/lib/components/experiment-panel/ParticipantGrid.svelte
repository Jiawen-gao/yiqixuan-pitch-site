<script>
	import { createEventDispatcher } from 'svelte';
	import { archetypes } from '$lib/data/archetypes.js';

	export let people = [];
	export let selectedId = null;

	const dispatch = createEventDispatcher();

	// 4 类按固定顺序：随和 → 算账 → 讲究 → 避雷
	const order = ['easygoing', 'budget', 'picky', 'constraint'];

	$: sorted = [...people].sort(
		(a, b) => order.indexOf(a.archetype) - order.indexOf(b.archetype)
	);

	const blockColor = {
		easygoing:  '#D8D2C0',
		budget:     '#E8B547',
		picky:      '#B59CE0',
		constraint: '#E08A8A'
	};

	function selectPerson(id) {
		dispatch('select', selectedId === id ? null : id);
	}
</script>

<div class="composition">
	<div class="composition-header">
		<span class="composition-label">人格配比</span>
		<span class="composition-count">{sorted.length} 人</span>
	</div>

	<div class="blocks">
		{#each sorted as p (p.id)}
			<div class="block" style="background:{blockColor[p.archetype]}"></div>
		{/each}
	</div>

	<div class="legend">
		{#each order as key}
			<div class="legend-item">
				<span class="legend-dot" style="background:{blockColor[key]}"></span>
				{archetypes[key].label}
			</div>
		{/each}
	</div>
</div>

<div class="people-grid">
	{#each sorted as p (p.id)}
		<button
			type="button"
			class="person"
			class:active={selectedId === p.id}
			on:click={() => selectPerson(p.id)}
		>
			<div class="avatar">
				{p.avatar}
				<span class="dot" style="background:{archetypes[p.archetype].color}"></span>
			</div>
			<div class="person-name">{p.name}</div>
		</button>
	{/each}
</div>

<style>
	.composition {
		margin-bottom: 8px;
	}

	.composition-header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		margin-bottom: 14px;
	}

	.composition-label {
		font-size: 12px;
		color: #8B8472;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.composition-count {
		font-size: 12px;
		color: #8B8472;
	}

	.blocks {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: 4px;
		margin-bottom: 12px;
	}

	.block {
		height: 28px;
		border-radius: 5px;
		transition: background 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.legend {
		display: flex;
		gap: 18px;
		flex-wrap: wrap;
		font-size: 12px;
		color: #6B6452;
		margin-bottom: 20px;
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.legend-dot {
		width: 8px;
		height: 8px;
		border-radius: 2px;
	}

	.people-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 14px 4px;
		margin-bottom: 24px;
		margin-top: 16px;
	}

	.person {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		padding: 6px 2px;
		border-radius: 14px;
		background: transparent;
		border: none;
		transition: background 0.2s ease;
		font-family: inherit;
	}

	.person:hover {
		background: #F1EAD7;
	}

	.person.active {
		background: #ECE3C9;
	}

	.avatar {
		width: 68px;
		height: 68px;
		border-radius: 50%;
		background: #FFFFFF;
		border: 2px solid #E8E1CF;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32px;
		position: relative;
		margin-bottom: 10px;
		transition: all 0.2s ease;
	}

	.dot {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		border: 3px solid #FAF7EF;
	}

	.person.active .avatar {
		border-color: #1A1A1A;
		transform: scale(1.05);
	}

	.person-name {
		font-size: 13px;
		color: #4B4538;
	}
</style>
