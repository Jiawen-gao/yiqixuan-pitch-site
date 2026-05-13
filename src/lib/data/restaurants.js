// 5 家候选餐厅 —— 来自小红书真实笔记
// 五个候选刻意覆盖：价格梯度 / 口味光谱 / 出片度 / 距离范围
export const restaurants = [
	{
		id: 'r1',
		name: '火烧云傣家菜',
		cover: '/covers/r1.jpg',
		cuisine: '云南 · 傣家菜',
		price: 180,
		district: '新天地',
		traits: ['🌶 偏辣', '⏱ 要排队', '🔥 网红头部'],
		note: {
			title: '火烧云在云南菜领域还是权威！',
			author: '做一个饮食规律的人',
			shares: 4312,
			cover: '/notes/r1-cover.jpg'
		}
	},
	{
		id: 'r2',
		name: '不是翻车鱼的西班牙菜',
		cover: '/covers/r2.jpg',
		cuisine: '西班牙 · 海鲜',
		price: 320,
		district: '静安',
		traits: ['🐟 海鲜多', '📸 出片', '💸 偏贵'],
		note: {
			title: '据说是上海最好吃的西班牙餐厅 🇪🇸',
			author: '不是翻车鱼',
			shares: 935,
			cover: '/notes/r2-cover.jpg'
		}
	},
	{
		id: 'r3',
		name: '牛 New 环球港新店',
		cover: '/covers/r3.jpg',
		cuisine: '海鲜 · 蒸鲜',
		price: 260,
		district: '普陀 · 环球港',
		traits: ['🆕 新店', '📍 偏远', '🤷 没踩过'],
		note: {
			title: '牛 New 环球港新店！！蒸蚌！！！',
			author: '仲夏之梦岳琳',
			shares: 35,
			cover: '/notes/r3-cover.jpg'
		}
	},
	{
		id: 'r4',
		name: '真·上海东北菜之光',
		cover: '/covers/r4.jpg',
		cuisine: '东北菜 · 家常',
		price: 120,
		district: '浦东',
		traits: ['💰 便宜', '🍚 量大', '📷 不出片'],
		note: {
			title: '真·上海东北菜之光',
			author: '好运多多歪女士',
			shares: 16000,
			cover: '/notes/r4-cover.jpg'
		}
	},
	{
		id: 'r5',
		name: '吴千语的麻辣火锅',
		cover: '/covers/r5.jpg',
		cuisine: '川渝 · 麻辣火锅',
		price: 220,
		district: '徐汇',
		traits: ['🌶🌶 重辣', '🔥 热闹', '👃 有气味'],
		note: {
			title: '上海这家麻辣火锅真的好吃到流泪 😭',
			author: '吴千语 Karena',
			shares: 35,
			cover: '/notes/r5-cover.jpg'
		}
	}
];
