<script>
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import ProblemSection from '$lib/components/sections/ProblemSection.svelte';
	import SolutionSection from '$lib/components/sections/SolutionSection.svelte';
	import DemoSection from '$lib/components/sections/DemoSection.svelte';
	import InsightSection from '$lib/components/sections/InsightSection.svelte';
	import FutureSection from '$lib/components/sections/FutureSection.svelte';
</script>

<svelte:head>
	<title>一起选 · 小红书多人共享决策板</title>
	<meta
		name="description"
		content="一个把小红书发现内容转化为多人共识决策的实验型 pitch site。"
	/>
</svelte:head>

<div class="page">
	<HeroSection />
	<ProblemSection />
	<SolutionSection />
	<DemoSection />
	<InsightSection />
	<FutureSection />
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		background: #f7f3ea;
		color: #1f1b16;
	}

	:global(*) {
		box-sizing: border-box;
	}

	.page {
		width: 100%;
		min-height: 100vh;
	}
</style>