export const scenarios = [
	{
		id: 'balanced',
		name: '默认局',
		subtitle: '一个比较真实、均衡的 8 人约饭局',
		description: '每类人都有，冲突分布比较平均，适合作为第一次实验入口。',
		members: [
			{
				name: '林林',
				archetype: 'budget',
				note: '人均过百我会开始犹豫'
			},
			{
				name: '阿周',
				archetype: 'budget',
				note: '可以好吃，但别让我心疼'
			},
			{
				name: 'Mia',
				archetype: 'easygoing',
				note: '我都能吃，但别让我定'
			},
			{
				name: '可可',
				archetype: 'easygoing',
				note: '都行，离地铁近一点更好'
			},
			{
				name: '小唐',
				archetype: 'picky',
				note: '排队太久会直接下头'
			},
			{
				name: 'Raye',
				archetype: 'picky',
				note: '环境和口味至少得有一个在线'
			},
			{
				name: '阿北',
				archetype: 'lowEnergy',
				note: '今天真的不想跑太远'
			},
			{
				name: '七喜',
				archetype: 'lowEnergy',
				note: '如果还要等位，我可能就不想去了'
			}
		]
	},
	{
		id: 'budget-pressure',
		name: '预算局',
		subtitle: '当价格焦虑成为主导因素',
		description: '预算敏感人数上升，系统需要更谨慎地处理人均和性价比。',
		members: [
			{
				name: '林林',
				archetype: 'budget',
				note: '人均最好别破 80'
			},
			{
				name: '阿周',
				archetype: 'budget',
				note: '最近吃饭预算比较紧'
			},
			{
				name: '小何',
				archetype: 'budget',
				note: '贵一点我就会想不值'
			},
			{
				name: 'Mia',
				archetype: 'easygoing',
				note: '都可以，有座位就行'
			},
			{
				name: '可可',
				archetype: 'easygoing',
				note: '不挑，但别太折腾'
			},
			{
				name: '小唐',
				archetype: 'picky',
				note: '至少别踩味道雷'
			},
			{
				name: '阿北',
				archetype: 'lowEnergy',
				note: '下班后不想绕路'
			},
			{
				name: '七喜',
				archetype: 'lowEnergy',
				note: '如果流程复杂我会想回家'
			}
		]
	},
	{
		id: 'high-standards',
		name: '高要求局',
		subtitle: '当体验要求比预算更重要',
		description: '挑剔型人数增加，系统更需要平衡“值不值得去”和“大家能不能接受”。',
		members: [
			{
				name: '林林',
				archetype: 'budget',
				note: '别太夸张就行'
			},
			{
				name: 'Mia',
				archetype: 'easygoing',
				note: '大部分都可接受'
			},
			{
				name: '可可',
				archetype: 'easygoing',
				note: '我跟着大家走'
			},
			{
				name: '小唐',
				archetype: 'picky',
				note: '不好吃真的不行'
			},
			{
				name: 'Raye',
				archetype: 'picky',
				note: '环境吵会很影响体验'
			},
			{
				name: '玖玖',
				archetype: 'picky',
				note: '排队和服务我都很在意'
			},
			{
				name: '阿北',
				archetype: 'lowEnergy',
				note: '今天只想去省事的地方'
			},
			{
				name: '七喜',
				archetype: 'lowEnergy',
				note: '如果还要来回折腾，我会直接退出'
			}
		]
	}
];