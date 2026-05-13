<script>
	export let scenario;
	export let consensus;

	$: winner = consensus.winner;
	$: ranked = consensus.ranked;

	function buildReason(name, winner) {
		if (name === '预算局') {
			return `${winner.name} 在价格阻力最小的同时，没有引发过多强烈反对。`;
		}
		if (name === '高要求局') {
			return `${winner.name} 在口味、环境和整体接受度之间取得了最稳的平衡。`;
		}
		return `${winner.name} 不是所有人最喜欢的选项，但它最容易形成一个大家都能接受的决定。`;
	}

	function toPercent(score) {
		return `${Math.max(10, Math.round((score / 10) * 100))}%`;
	}
</script>

<div class="screen">
	<div class="winner-card">
		<p class="kicker">AI 共识建议</p>
		<h3>推荐 {winner.name}</h3>
		<p>{buildReason(scenario.name, winner)}</p>
	</div>

	<div class="rankings">
		{#each ranked as item}
			<div class:item-winner={item.id === winner.id} class="rank-item">
				<div class="row">
					<strong>{item.name}</strong>
					<span>{item.averageScore}/10</span>
				</div>
				<div class="track">
					<div class="fill" style={`width:${toPercent(item.averageScore)}`}></div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.screen {
		display: flex;
		flex-direction: column;
		gap: 14px;
		height: 100%;
	}

	.winner-card {
		padding: 18px;
		border-radius: 24px;
		background: #1f1b16;
		color: #f7f3ea;
	}

	.kicker {
		margin: 0 0 8px;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: rgba(247, 243, 234, 0.7);
	}

	h3 {
		margin: 0 0 10px;
		font-size: 28px;
		line-height: 1.05;
	}

	.winner-card p:last-child {
		margin: 0;
		line-height: 1.7;
		font-size: 14px;
	}

	.rankings {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.rank-item {
		padding: 12px 14px;
		border-radius: 18px;
		background: white;
		border: 1px solid rgba(31, 27, 22, 0.08);
	}

	.rank-item.item-winner {
		background: #f3ece1;
		border-color: rgba(31, 27, 22, 0.2);
	}

	.row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 8px;
		font-size: 13px;
	}

	.track {
		height: 8px;
		border-radius: 999px;
		background: #eee5d8;
		overflow: hidden;
	}

	.fill {
		height: 100%;
		background: #1f1b16;
		border-radius: 999px;
	}
</style>