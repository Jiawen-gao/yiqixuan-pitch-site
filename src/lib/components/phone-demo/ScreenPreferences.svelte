<script>
	import { archetypes } from '$lib/data/archetypes';

	export let scenario = null;
	export let options = [];

	let activeMemberIndex = 0;

	$: members = scenario?.members ?? [];
	$: activeMember = members[activeMemberIndex] ?? null;

	function nextMember() {
		if (activeMemberIndex < members.length - 1) activeMemberIndex += 1;
	}

	function prevMember() {
		if (activeMemberIndex > 0) activeMemberIndex -= 1;
	}

	function getAIGeneratedTags(option) {
		const tags = [];

		if (option.priceLevel >= 3) tags.push('人均偏高');
		if (option.priceLevel <= 2) tags.push('价格友好');
		if (option.queueRisk >= 3) tags.push('排队风险高');
		if (option.queueRisk <= 2) tags.push('省时省事');
		if (option.vibeFit >= 4) tags.push('适合聊天');
		if (option.tasteConfidence >= 4) tags.push('口味稳妥');

		return tags.slice(0, 4);
	}

	function getSelectedTags(member, option) {
		if (!member || !option) return [];

		const selected = [];
		const aiTags = getAIGeneratedTags(option);

		if (member.archetype === 'budget') {
			if (aiTags.includes('人均偏高')) selected.push('人均偏高');
			if (aiTags.includes('价格友好')) selected.push('价格友好');
		}

		if (member.archetype === 'easygoing') {
			if (aiTags.includes('适合聊天')) selected.push('适合聊天');
			if (aiTags.includes('省时省事')) selected.push('省时省事');
		}

		if (member.archetype === 'picky') {
			if (aiTags.includes('口味稳妥')) selected.push('口味稳妥');
			if (aiTags.includes('适合聊天')) selected.push('适合聊天');
			if (aiTags.includes('排队风险高')) selected.push('排队风险高');
		}

		if (member.archetype === 'lowEnergy') {
			if (aiTags.includes('省时省事')) selected.push('省时省事');
			if (aiTags.includes('排队风险高')) selected.push('排队风险高');
		}

		return selected;
	}
</script>

<div class="screen">
	<div class="header">
		<div>
			<p class="kicker">成员偏好输入</p>
			<h3>AI 先从每条笔记里提炼标签，用户再点选真正 relevant 的顾虑。</h3>
		</div>

		{#if activeMember}
			<div class="active-user">
				<div class="avatar">{activeMember.name.slice(0, 1)}</div>
				<div>
					<strong>{activeMember.name}</strong>
					<span>{archetypes[activeMember.archetype].label}</span>
				</div>
			</div>
		{/if}
	</div>

	<div class="member-nav">
		<button on:click={prevMember} disabled={activeMemberIndex === 0}>上一位</button>
		<button on:click={nextMember} disabled={activeMemberIndex === members.length - 1}>下一位</button>
	</div>

	<div class="cards">
		{#each options as option}
			<div class="option-card">
				<div class="thumb">{option.name.slice(0, 1)}</div>

				<div class="body">
					<div class="top">
						<strong>{option.name}</strong>
						<span>AI 标签</span>
					</div>

					<div class="tags">
						{#each getAIGeneratedTags(option) as tag}
							<span class:selected={getSelectedTags(activeMember, option).includes(tag)}>
								{tag}
							</span>
						{/each}
					</div>
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
		overflow: auto;
	}

	.header {
		display: flex;
		justify-content: space-between;
		gap: 12px;
		align-items: flex-start;
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
		font-size: 21px;
		line-height: 1.14;
		max-width: 15ch;
	}

	.active-user {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 8px 10px;
		border-radius: 16px;
		background: white;
		border: 1px solid rgba(31, 27, 22, 0.08);
	}

	.avatar {
		width: 34px;
		height: 34px;
		border-radius: 999px;
		display: grid;
		place-items: center;
		background: #efe7db;
		font-weight: 700;
		font-size: 13px;
	}

	.active-user strong {
		display: block;
		font-size: 12px;
	}

	.active-user span {
		display: block;
		font-size: 11px;
		color: #7b7064;
	}

	.member-nav {
		display: flex;
		gap: 8px;
	}

	.member-nav button {
		border: 0;
		padding: 8px 12px;
		border-radius: 999px;
		background: #ece4d8;
		color: #3f372f;
		font-size: 12px;
		cursor: pointer;
	}

	.cards {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.option-card {
		display: grid;
		grid-template-columns: 68px 1fr;
		gap: 12px;
		padding: 12px;
		border-radius: 18px;
		background: white;
		border: 1px solid rgba(31, 27, 22, 0.08);
	}

	.thumb {
		aspect-ratio: 3 / 4;
		border-radius: 14px;
		background: #e9dfd2;
		display: grid;
		place-items: center;
		font-weight: 700;
		font-size: 20px;
		color: #3f372f;
	}

	.body {
		min-width: 0;
	}

	.top {
		display: flex;
		justify-content: space-between;
		gap: 8px;
		margin-bottom: 10px;
	}

	.top strong {
		font-size: 14px;
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
		background: #f3ece1;
		font-size: 12px;
		color: #4c4339;
	}

	.tags span.selected {
		background: #1f1b16;
		color: #f7f3ea;
	}
</style>