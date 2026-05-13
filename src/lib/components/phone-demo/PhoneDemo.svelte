<script>
	import PhoneFrame from './PhoneFrame.svelte';
	import ScreenBoardSetup from './ScreenBoardSetup.svelte';
	import ScreenOptions from './ScreenOptions.svelte';
	import ScreenPreferences from './ScreenPreferences.svelte';
	import ScreenRecommendation from './ScreenRecommendation.svelte';

	export let scenario;
	export let options;
	export let consensus;

	let currentScreen = 0;

	const screens = [
		{ label: '创建本次约饭局' },
		{ label: '收集候选餐厅' },
		{ label: '查看群体偏好' },
		{ label: '生成共识建议' }
	];

	function next() {
		if (currentScreen < screens.length - 1) currentScreen += 1;
	}

	function prev() {
		if (currentScreen > 0) currentScreen -= 1;
	}
</script>

<div class="demo">
	<div class="topbar">
		{#each screens as screen, index}
			<button
				class:active={index === currentScreen}
				on:click={() => (currentScreen = index)}
			>
				{index + 1}
			</button>
		{/each}
	</div>

	<p class="screen-title">{screens[currentScreen].label}</p>

	<PhoneFrame>
		{#if currentScreen === 0}
			<ScreenBoardSetup {scenario} />
		{:else if currentScreen === 1}
			<ScreenOptions {scenario} {options} />
		{:else if currentScreen === 2}
			<ScreenPreferences {scenario} {options} />
		{:else}
			<ScreenRecommendation {scenario} {consensus} />
		{/if}
	</PhoneFrame>

	<div class="controls">
		<button on:click={prev} disabled={currentScreen === 0}>上一屏</button>
		<button on:click={next} disabled={currentScreen === screens.length - 1}>下一屏</button>
	</div>
</div>

<style>
	.demo {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
	}

	.topbar {
		display: flex;
		gap: 8px;
	}

	.topbar button {
		width: 34px;
		height: 34px;
		border-radius: 999px;
		border: 0;
		background: #e8dfd2;
		cursor: pointer;
		font-weight: 700;
		color: #433a31;
	}

	.topbar button.active {
		background: #1f1b16;
		color: #f7f3ea;
	}

	.screen-title {
		margin: 0;
		font-size: 14px;
		color: #5c5246;
	}

	.controls {
		display: flex;
		gap: 10px;
	}

	.controls button {
		border: 0;
		border-radius: 999px;
		padding: 12px 18px;
		font-weight: 600;
		cursor: pointer;
		background: #1f1b16;
		color: #f7f3ea;
	}

	.controls button:disabled {
		opacity: 0.35;
		cursor: not-allowed;
	}
</style>