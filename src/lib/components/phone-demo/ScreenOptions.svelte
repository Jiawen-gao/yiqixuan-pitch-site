<script>
	export const scenario = undefined;
	export let options = [];
</script>

<div class="screen">
	<div class="header">
		<p class="kicker">候选项</p>
		<h3>大家丢进来的餐厅，先放在一个板上比较。</h3>
	</div>

	<div class="list">
		{#each options as option}
			<div class="option">
				<div class="top">
					<strong>{option.name}</strong>
					<span>候选</span>
				</div>

				<div class="tags">
					{#each option.tags as tag}
						<span>{tag}</span>
					{/each}
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

	.kicker {
		margin: 0 0 6px;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #8a7966;
	}

	h3 {
		margin: 0;
		font-size: 24px;
		line-height: 1.12;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.option {
		padding: 14px;
		border-radius: 18px;
		background: white;
		border: 1px solid rgba(31, 27, 22, 0.08);
	}

	.top {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		margin-bottom: 10px;
	}

	.top span {
		font-size: 11px;
		color: #8a7966;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.tags span {
		padding: 7px 10px;
		border-radius: 999px;
		background: #efe7db;
		font-size: 12px;
		color: #433a31;
	}
</style>