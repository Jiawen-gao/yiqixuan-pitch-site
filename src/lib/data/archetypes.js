export const archetypes = {
	budget: {
		id: 'budget',
		label: '预算型',
		tagline: '钱包有发言权',
		description: '对人均最敏感，愿意在口味和氛围上妥协。',
		concerns: ['人均太高', '性价比低', '不值这个价']
	},
	easygoing: {
		id: 'easygoing',
		label: '随和型',
		tagline: '嘴上说都行',
		description: '大多数选项都能接受，但也最容易把决定权让给别人。',
		concerns: ['都可以', '别让我决定', '别太麻烦就行']
	},
	picky: {
		id: 'picky',
		label: '挑剔型',
		tagline: '细节不会放过',
		description: '对口味、环境、排队体验更在意，偏好表达更明确。',
		concerns: ['味道不行', '环境太吵', '排队太久']
	},
	lowEnergy: {
		id: 'lowEnergy',
		label: '低能量型',
		tagline: '今天不想折腾',
		description: '对距离、等待和复杂路线敏感，容易对所有选项都不兴奋。',
		concerns: ['太远', '不想排队', '今天没心情']
	}
};