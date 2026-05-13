<script>
	import { createEventDispatcher } from 'svelte';

	export let scenarios = [];
	export let activeIdx = 0;

	const dispatch = createEventDispatcher();

	$: active = scenarios[activeIdx];

	function selectScenario(i) {
		dispatch('select', i);
	}
</script>

<div class="eyebrow">实验场景</div>
<p class="experiment-intro">
  3 种典型场景 × 8 个真实角色<br>——切换实验组看人群配比怎么影响共识，点头像看 TA 的真实表态；<br>右侧手机演示「匿名投票 → AI 在读 → 共识答案」全链路。
</p>

<div class="scenario-tabs">
	{#each scenarios as s, i}
		<button
			class="tab"
			class:active={i === activeIdx}
			on:click={() => selectScenario(i)}
		>
			<div class="tab-num">{String(i + 1).padStart(2, '0')}</div>
			<div class="tab-name">{s.title}</div>
		</button>
	{/each}
</div>

{#if active}
	<div class="scenario-intro">
		<div class="scenario-headline">{@html active.headline}</div>
		<div class="scenario-desc">{active.desc}</div>
	</div>
{/if}

<style>
	.eyebrow {
	font-size: 12px;
	color: #8B8472;
	letter-spacing: 0.08em;
	margin-bottom: 10px;   /* 14px 改 10px */
	text-transform: uppercase;
	}

	.experiment-intro {
	font-size: 13px;
	line-height: 1.7;
	color: #6B6452;
	margin: 0 0 20px 0;
	letter-spacing: 0;
	}

	.scenario-tabs {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 8px;
		margin-bottom: 28px;
	}

	.tab {
		background: transparent;
		border: 1px solid #E0D8C5;
		border-radius: 14px;
		padding: 14px 12px;
		cursor: pointer;
		transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
		text-align: left;
		position: relative;
		overflow: hidden;
		font-family: inherit;
	}

	.tab-num {
		font-size: 11px;
		color: #A89F8C;
		letter-spacing: 0.08em;
		margin-bottom: 6px;
		font-feature-settings: "tnum";
	}

	.tab-name {
		font-size: 14px;
		font-weight: 600;
		color: #6B6452;
		line-height: 1.3;
	}

	.tab:hover {
		background: #F1EAD7;
		border-color: #C8C0AE;
	}

	.tab.active {
		background: #1A1A1A;
		border-color: #1A1A1A;
		transform: translateY(-2px);
		box-shadow: 0 8px 20px -8px rgba(26, 26, 26, 0.4);
	}

	.tab.active .tab-num {
		color: rgba(255, 255, 255, 0.5);
	}

	.tab.active .tab-name {
		color: #FFFFFF;
	}

	.scenario-intro {
		margin-bottom: 28px;
	}

	.scenario-headline {
		font-size: 24px;
		font-weight: 700;
		line-height: 1.35;
		margin-bottom: 10px;
		letter-spacing: -0.02em;
		color: #1A1A1A;
	}

	.scenario-desc {
		font-size: 14px;
		color: #6B6452;
		line-height: 1.65;
	}
</style>
