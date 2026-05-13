// 4 类决策人格 —— 群体决策里 TA 最先按下的那个按钮
export const archetypes = {
	easygoing: {
		id: 'easygoing',
		label: '随和派',
		emoji: '🤝',
		color: '#9CA3AF',
		tagline: '嘴上"都可以"，心里其实有数',
		description: '最怕扫兴、怕麻烦、怕替别人决定。沉默不代表没意见。',
		typicalConcerns: ['都可以', '听你们的']
	},
	budget: {
		id: 'budget',
		label: '算账派',
		emoji: '💰',
		color: '#D97706',
		tagline: '每一块钱都要花得明白',
		description: '群里最早开口反对的人——不是反对吃饭，是反对不值。',
		typicalConcerns: ['太贵了', '不值这个价']
	},
	picky: {
		id: 'picky',
		label: '讲究派',
		emoji: '✨',
		color: '#7C3AED',
		tagline: '这顿饭得有点意思',
		description: '最早开口推荐的人——拒绝平庸，要有谈资或出片。',
		typicalConcerns: ['不出片', '太网红']
	},
	constraint: {
		id: 'constraint',
		label: '避雷派',
		emoji: '🩺',
		color: '#DC2626',
		tagline: '这顿我有硬指标',
		description: '不是挑，是真的不能——身体、禁忌、特殊状态。一票否决。',
		typicalConcerns: ['不吃辣', '怕过敏']
	}
};
