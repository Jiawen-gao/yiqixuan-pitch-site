// 全局顾虑标签库 —— 12 固定 + 1 自定义入口
// 与餐厅无关。每个人对每家餐厅独立勾选。
// 维度信息仅用于后台共识算法和"反向揭示"，前台 UI 不暴露维度名。
export const dimensions = {
	budget:    { id: 'budget',    icon: '💰', label: '预算' },
	distance:  { id: 'distance',  icon: '📍', label: '距离' },
	taste:     { id: 'taste',     icon: '👅', label: '口味' },
	efficiency:{ id: 'efficiency',icon: '⏱',  label: '效率' },
	occasion:  { id: 'occasion',  icon: '📸', label: '场合' },
	taboo:     { id: 'taboo',     icon: '🩺', label: '禁忌' }
};

export const concernTags = [
	// 💰 预算
	{ id: 't1',  text: '太贵了',      dim: 'budget' },
	{ id: 't2',  text: '不值这个价',   dim: 'budget' },
	// 📍 距离
	{ id: 't3',  text: '离我太远',    dim: 'distance' },
	{ id: 't4',  text: '不顺路',      dim: 'distance' },
	// 👅 口味
	{ id: 't5',  text: '不吃辣',      dim: 'taste' },
	{ id: 't6',  text: '吃不饱',      dim: 'taste' },
	// ⏱ 效率
	{ id: 't7',  text: '要排队',      dim: 'efficiency' },
	{ id: 't8',  text: '时间紧',      dim: 'efficiency' },
	// 📸 场合
	{ id: 't9',  text: '不出片',      dim: 'occasion' },
	{ id: 't10', text: '太网红',      dim: 'occasion' },
	// 🩺 禁忌
	{ id: 't11', text: '怕过敏',      dim: 'taboo' },
	{ id: 't12', text: '上次吃过',    dim: 'taboo' },
	// 👅 口味 / 食材
	{ id: 't13', text: '不新鲜',      dim: 'taste' },
	{ id: 't14', text: '食材一般',    dim: 'taste' },
	// 📸 场合 / 环境
	{ id: 't15', text: '太吵',        dim: 'occasion' },
	{ id: 't16', text: '没座位',      dim: 'occasion' }
];

// 自定义入口 —— 用户可填写的自由文本
// demo 数据里会预埋几条"已被某 persona 写过的自定义标签"，体现真实感
export const customTagEntry = {
	id: 'custom',
	text: '其他…',
	dim: null
};
