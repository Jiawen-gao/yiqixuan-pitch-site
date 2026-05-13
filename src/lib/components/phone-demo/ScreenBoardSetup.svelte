<script>
	export let scenario;
</script>

<div class="screen">
	<div class="hero-card">
		<p class="kicker">一起选</p>
		<h3>周五晚饭吃什么？</h3>
		<p>8 人已加入 · 当前场景：{scenario.name}</p>
	</div>

	<div class="info">
		<div>
			<span>决策目标</span>
			<strong>找到最少人强烈反对的餐厅</strong>
		</div>
		<div>
			<span>当前状态</span>
			<strong>等待大家补充候选项</strong>
		</div>
	</div>
</div>

<style>
	.screen {
		display: flex;
		flex-direction: column;
		gap: 16px;
		height: 100%;
	}

	.hero-card,
	.info div {
		background: white;
		border-radius: 22px;
		padding: 18px;
		border: 1px solid rgba(31, 27, 22, 0.08);
	}

	.kicker {
		margin: 0 0 8px;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #8a7966;
	}

	h3 {
		margin: 0 0 8px;
		font-size: 28px;
		line-height: 1.08;
	}

	.hero-card p:last-child,
	.info span {
		color: #6d6256;
		font-size: 13px;
	}

	.info {
		display: grid;
		gap: 12px;
		margin-top: auto;
	}

	.info strong {
		display: block;
		margin-top: 4px;
		font-size: 15px;
	}
</style>