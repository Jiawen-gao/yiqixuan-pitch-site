<script>
	import { archetypes } from '$lib/data/archetypes';

	export let members = [];

	function groupMembers(list) {
		const groups = {
			budget: [],
			easygoing: [],
			picky: [],
			lowEnergy: []
		};

		for (const member of list) {
			groups[member.archetype].push(member);
		}

		return Object.entries(groups).filter(([, value]) => value.length > 0);
	}

	$: grouped = groupMembers(members);
</script>

<div class="groups">
	{#each grouped as [key, people]}
		<div class="group-card">
			<div class="group-top">
				<div>
					<strong>{archetypes[key].label}</strong>
					<p>{archetypes[key].tagline}</p>
				</div>
				<span>{people.length} 人</span>
			</div>

			<div class="avatars">
				{#each people as person}
					<div class="person">
						<div class="avatar">{person.name.slice(0, 1)}</div>
						<small>{person.name}</small>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.groups {
		display: grid;
		gap: 12px;
	}

	.group-card {
		padding: 14px;
		border-radius: 20px;
		background: rgba(255, 255, 255, 0.78);
		border: 1px solid rgba(31, 27, 22, 0.07);
	}

	.group-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 10px;
		margin-bottom: 12px;
	}

	.group-top strong {
		display: block;
		font-size: 14px;
		margin-bottom: 2px;
	}

	.group-top p {
		margin: 0;
		font-size: 12px;
		color: #6d6256;
	}

	.group-top span {
		font-size: 12px;
		font-weight: 700;
		color: #2f2922;
		background: #efe7db;
		padding: 5px 8px;
		border-radius: 999px;
	}

	.avatars {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.person {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		width: 52px;
	}

	.avatar {
		width: 40px;
		height: 40px;
		border-radius: 999px;
		display: grid;
		place-items: center;
		background: #efe7db;
		font-size: 14px;
		font-weight: 700;
	}

	.person small {
		font-size: 11px;
		color: #574d42;
		line-height: 1.2;
		text-align: center;
	}
</style>