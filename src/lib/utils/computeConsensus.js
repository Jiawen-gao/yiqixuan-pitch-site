const archetypeWeights = {
	budget: {
		priceLevel: -2.2,
		queueRisk: -0.4,
		vibeFit: 0.4,
		tasteConfidence: 0.8
	},
	easygoing: {
		priceLevel: -0.6,
		queueRisk: -0.4,
		vibeFit: 0.6,
		tasteConfidence: 0.7
	},
	picky: {
		priceLevel: -0.7,
		queueRisk: -1.0,
		vibeFit: 1.4,
		tasteConfidence: 1.8
	},
	lowEnergy: {
		priceLevel: -0.5,
		queueRisk: -1.8,
		vibeFit: 0.4,
		tasteConfidence: 0.5
	}
};

function scoreOptionForMember(option, member) {
	const weights = archetypeWeights[member.archetype];

	const raw =
		10 +
		option.priceLevel * weights.priceLevel +
		option.queueRisk * weights.queueRisk +
		option.vibeFit * weights.vibeFit +
		option.tasteConfidence * weights.tasteConfidence;

	return Math.max(0, Math.min(10, raw));
}

export function computeConsensus(scenario, options) {
	const optionResults = options.map((option) => {
		const memberScores = scenario.members.map((member) => {
			const score = scoreOptionForMember(option, member);

			return {
				name: member.name,
				archetype: member.archetype,
				score
			};
		});

		const averageScore =
			memberScores.reduce((sum, item) => sum + item.score, 0) / memberScores.length;

		const strongRejectCount = memberScores.filter((item) => item.score < 4).length;
		const positiveCount = memberScores.filter((item) => item.score >= 7).length;

		const consensusScore = averageScore * 0.55 + positiveCount * 0.9 - strongRejectCount * 1.1;

		return {
			...option,
			memberScores,
			averageScore: Number(averageScore.toFixed(1)),
			strongRejectCount,
			positiveCount,
			consensusScore: Number(consensusScore.toFixed(1))
		};
	});

	const ranked = [...optionResults].sort((a, b) => b.consensusScore - a.consensusScore);
	const winner = ranked[0];

	return {
		winner,
		ranked
	};
}