// 三个实验组 —— 同 1 套餐厅、同 1 套标签库、同 1 套角色类型
// 唯一变量：8 人里四类角色的配比
// 投票字段：stance = 'love' | 'meh' | 'pass'，对应 ❤️ / 😐 / 🙅
// tags = 该 persona 对该餐厅勾选的全局标签 id 数组
// custom = （可选）该 persona 自填的标签文本，体现"匿名后能说真话"
//
// 设计原则：
//   - stance 和 pickId 不动（consensus 逻辑要闭环）
//   - 每人至少 2 个不同维度的标签（除少数极致"随和"留白突出对比）
//   - 每组用满 8+ 个不同标签
//   - t13 不新鲜 / t14 食材一般 / t15 太吵 / t16 没座位 必须被用到

export const scenarios = [
	// ─────────────────────────────────────────────────────────────
	// 实验组 ① 都可以小队 —— 5 随和 / 1 算账 / 1 讲究 / 1 避雷
	// 预期共识：R3 牛 New 环球港
	// ─────────────────────────────────────────────────────────────
	{
		id: 's1',
		title: '都可以小队',
		subtitle: '一群嘴上说"都行"的人，怎么定一家店？',
		headline: '一群嘴上说"都行"的人，<br>怎么定一家店？',
		desc: '最怕扫兴、最爱沉默——但每个人心里都有一杆秤。AI 要在"都可以"的表象下，读出真正的偏好。',
		composition: { easygoing: 5, budget: 1, picky: 1, constraint: 1 },
		people: [
			{
				id: 'p1', name: '阿菜', archetype: 'easygoing', avatar: '🐱',
				votes: {
					r1: { stance: 'meh',  tags: ['t7', 't15'] },        // 火烧云：要排队 + 太吵
					r2: { stance: 'meh',  tags: ['t4'] },               // 西班牙：不顺路
					r3: { stance: 'love', tags: [] },
					r4: { stance: 'meh',  tags: ['t8'] },               // 时间紧
						r5: { stance: 'pass', tags: ['t5'] }                // 不吃辣 + 今天直接劝退
				}
			},
			{
				id: 'p2', name: '小鹿', archetype: 'easygoing', avatar: '🦌',
				votes: {
						r1: { stance: 'pass', tags: ['t15', 't16'] },       // 太吵 + 没座位
					r2: { stance: 'meh',  tags: [] },
					r3: { stance: 'meh',  tags: [] },
					r4: { stance: 'meh',  tags: ['t3'] },               // 离我太远
					r5: { stance: 'meh',  tags: [] }
				}
			},
			{
				id: 'p3', name: 'Tim', archetype: 'easygoing', avatar: '🦝',
				votes: {
					r1: { stance: 'pass', tags: ['t7', 't16'] },        // 要排队 + 没座位
					r2: { stance: 'meh',  tags: ['t4'] },
					r3: { stance: 'love', tags: [] },
					r4: { stance: 'meh',  tags: ['t8'] },               // 时间紧
					r5: { stance: 'meh',  tags: ['t7'] }
				}
			},
			{
				id: 'p4', name: '圆圆', archetype: 'easygoing', avatar: '🐼',
				votes: {
					r1: { stance: 'meh',  tags: ['t15'] },              // 太吵
					r2: { stance: 'love', tags: [] },                   // 偷偷想出片
					r3: { stance: 'love', tags: [] },
					r4: { stance: 'pass', tags: ['t9', 't15'] },        // 不出片 + 太吵 → pass
					r5: { stance: 'meh',  tags: [] }
				}
			},
			{
				id: 'p5', name: '大壮', archetype: 'easygoing', avatar: '🐻',
				votes: {
					r1: { stance: 'love', tags: [] },
					r2: { stance: 'pass', tags: ['t6', 't1'] },         // 吃不饱 + 太贵
						r3: { stance: 'pass', tags: ['t13'] },              // 新店没把握「不新鲜」
					r4: { stance: 'love', tags: [] },
					r5: { stance: 'love', tags: [] }
				}
			},
			{
				id: 'p6', name: '阿哲', archetype: 'budget', avatar: '💼',
				votes: {
					r1: { stance: 'meh',  tags: ['t1', 't15'] },        // 太贵 + 太吵
					r2: { stance: 'pass', tags: ['t1', 't2'] },         // 太贵 + 不值
						r3: { stance: 'pass', tags: ['t2'] },               // 新店「不值这个价」
					r4: { stance: 'love', tags: [] },
					r5: { stance: 'meh',  tags: ['t1', 't7'] }          // 太贵 + 要排队
				}
			},
			{
				id: 'p7', name: 'Vivi', archetype: 'picky', avatar: '🦋',
				votes: {
					r1: { stance: 'meh',  tags: ['t10', 't14'] },       // 太网红 + 食材一般
					r2: { stance: 'love', tags: [] },
					r3: { stance: 'love', tags: [] },                   // 没人种草反而新鲜
					r4: { stance: 'pass', tags: ['t9', 't14'] },        // 不出片 + 食材一般
					r5: { stance: 'meh',  tags: ['t10', 't13'] }        // 太网红 + 不新鲜
				}
			},
			{
				id: 'p8', name: '安安', archetype: 'constraint', avatar: '🩺',
				votes: {
					r1: { stance: 'meh',  tags: ['t5', 't16'] },        // 不吃辣 + 没座位
					r2: { stance: 'love', tags: [] },
					r3: { stance: 'love', tags: [] },
					r4: { stance: 'meh',  tags: ['t11'] },              // 怕过敏
					r5: { stance: 'pass', tags: ['t5', 't11'] },        // 不吃辣 + 怕过敏
					customTag: { restaurantId: 'r5', text: '今天胃不舒服' }
				}
			}
		],
		consensus: {
			pickId: 'r3',
			phoneTitle: '这周聚餐去哪儿？',
			screen2: {
				endline: '识别到 5 家餐厅都有顾虑 · 但有一家餐厅没人贴标签'
			},
			screen3: {
				acceptance: '8 个人里 6 个能接受。',
				reason: '其他 4 家每家都有至少 4 个人贴过负面标签——只有这家没人嫌吵、没人嫌贵、没人挑食材。对一群嘴上"都可以"的人来说，没人想反对，就是最好的答案。',
				secondaryCTA: '换一个推荐'
			},
			headline: '建议去 牛 New 环球港新店。',
			body: '不是因为它得分最高，而是它**没有人强烈反对**。8 个人里 6 个选了"想去"或"都行"，没人贴负面标签——这对一群嘴上"都可以"的人来说，是最难得的状态。',
			reasoning: [
				'R5 火锅：1 人贴"不吃辣"（避雷派），整组里有 3 人选了"算了"或贴标签 → 否决。',
				'R2 西班牙：算账派贴了"太贵了 / 不值这个价"，大壮觉得"吃不饱" → 风险高。',
				'R4 东北菜：讲究派贴了"不出片"，圆圆悄悄也贴了 → 隐性反对 2 票。',
				'R1 火烧云：2 人独立贴了"要排队"，Tim 直接选了"算了" → 效率风险。',
				'R3 环球港：0 个负面标签，5 个"想去"。'
			],
			footer: '一起选 · 不站队的最终建议'
		}
	},

	// ─────────────────────────────────────────────────────────────
	// 实验组 ② 精打细算队 —— 5 算账 / 1 随和 / 1 讲究 / 1 避雷
	// 预期共识：R4 东北菜
	// ─────────────────────────────────────────────────────────────
	{
		id: 's2',
		title: '精打细算队',
		subtitle: '一群盯紧人均的人，AI 怎么选才不挨骂？',
		headline: '一群盯紧人均的人，<br>AI 怎么选才不挨骂？',
		desc: '每一块钱都要花得明白。AI 不能只看好评，得在"不值这个价"的红线里，找到那个让钱包和肚子都没意见的答案。',
		composition: { budget: 5, easygoing: 1, picky: 1, constraint: 1 },
		people: [
			{
				id: 'p1', name: '老 K', archetype: 'budget', avatar: '🧮',
				votes: {
					r1: { stance: 'meh',  tags: ['t1', 't15'] },        // 太贵 + 太吵
					r2: { stance: 'pass', tags: ['t1', 't2'] },
					r3: { stance: 'pass', tags: ['t1', 't3'] },         // 太贵 + 离我太远
					r4: { stance: 'love', tags: [] },
					r5: { stance: 'meh',  tags: ['t1'] }
				}
			},
			{
				id: 'p2', name: '糖糖', archetype: 'budget', avatar: '🍬',
				votes: {
					r1: { stance: 'pass', tags: ['t1', 't16'] },        // 太贵 + 没座位
					r2: { stance: 'pass', tags: ['t1', 't2'] },
					r3: { stance: 'pass', tags: ['t1', 't4'] },         // 太贵 + 不顺路
					r4: { stance: 'love', tags: [] },
					r5: { stance: 'meh',  tags: ['t1'] }
				}
			},
			{
				id: 'p3', name: '阿哲', archetype: 'budget', avatar: '💼',
				votes: {
					r1: { stance: 'meh',  tags: ['t2', 't15'] },        // 不值 + 太吵
					r2: { stance: 'pass', tags: ['t1', 't2', 't6'] },   // 太贵 + 不值 + 吃不饱
					r3: { stance: 'meh',  tags: ['t2'] },
					r4: { stance: 'love', tags: [] },
					r5: { stance: 'meh',  tags: ['t2'] },
					customTag: { restaurantId: 'r2', text: '量太少' }
				}
			},
			{
				id: 'p4', name: '小满', archetype: 'budget', avatar: '🧾',
				votes: {
					r1: { stance: 'meh',  tags: ['t1', 't7'] },         // 太贵 + 要排队
					r2: { stance: 'pass', tags: ['t1'] },
					r3: { stance: 'pass', tags: ['t1', 't3'] },         // 太贵 + 离我太远
					r4: { stance: 'love', tags: [] },
					r5: { stance: 'meh',  tags: ['t8'] }                // 时间紧
				}
			},
			{
				id: 'p5', name: '阿强', archetype: 'budget', avatar: '🐂',
				votes: {
					r1: { stance: 'meh',  tags: ['t1'] },
					r2: { stance: 'pass', tags: ['t1', 't6'] },         // 太贵 + 吃不饱
					r3: { stance: 'meh',  tags: ['t2'] },
					r4: { stance: 'love', tags: [] },
					r5: { stance: 'love', tags: [] }
				}
			},
			{
				id: 'p6', name: '小鹿', archetype: 'easygoing', avatar: '🦌',
				votes: {
					r1: { stance: 'meh',  tags: ['t15'] },              // 太吵
					r2: { stance: 'meh',  tags: [] },
					r3: { stance: 'meh',  tags: ['t3'] },               // 离我太远
					r4: { stance: 'love', tags: [] },
					r5: { stance: 'meh',  tags: [] }
				}
			},
			{
				id: 'p7', name: 'Karen', archetype: 'picky', avatar: '👜',
				votes: {
					r1: { stance: 'meh',  tags: ['t10', 't14'] },       // 太网红 + 食材一般
					r2: { stance: 'love', tags: [] },                   // 唯一力挺 R2
					r3: { stance: 'meh',  tags: ['t13'] },              // 不新鲜
					r4: { stance: 'pass', tags: ['t9', 't14'] },        // 不出片 + 食材一般
					r5: { stance: 'meh',  tags: ['t10'] }
				}
			},
			{
				id: 'p8', name: '小鱼', archetype: 'constraint', avatar: '🐟',
				votes: {
					r1: { stance: 'meh',  tags: ['t16'] },              // 没座位
					r2: { stance: 'pass', tags: ['t11', 't13'] },       // 怕过敏 + 不新鲜
					r3: { stance: 'pass', tags: ['t11'] },              // 蒸蚌也是海鲜
					r4: { stance: 'love', tags: [] },
					r5: { stance: 'pass', tags: ['t5', 't11'] },        // 不吃辣 + 怕过敏
					customTag: { restaurantId: 'r2', text: '我对海鲜过敏，不想扫兴' }
				}
			}
		],
		consensus: {
			pickId: 'r4',
			phoneTitle: '这次 AA 去哪吃？',
			screen2: {
				endline: '识别到 1 个核心分歧：价位'
			},
			screen3: {
				acceptance: '8 个人里 7 个能接受。',
				reason: '7 个人选了"想去"，没有一个人贴过价格相关的负面标签——这是这桌唯一让钱包没意见的选项。',
				secondaryCTA: '看更实惠的'
			},
			headline: '建议去 真·上海东北菜之光。',
			body: '5 个算账派给所有 200+ 的店贴了"太贵了 / 不值这个价"，避雷派对海鲜过敏直接否掉了 2 家。讲究派想去西班牙菜，但全场没有第二个人附和。R4 是这桌唯一**没有人贴负面标签**的选项。',
			reasoning: [
				'R2 西班牙：6 人贴"太贵"，1 人海鲜过敏 → 双重劝退。',
				'R3 环球港：海鲜过敏 + 5 人贴价格相关 → 风险叠加。',
				'R5 火锅：算账派觉得"不值"，避雷派"不吃辣" → 隐性多数反对。',
				'R1 火烧云：4 人贴价格 → 安全垫不够。',
				'R4 东北菜：7 个"想去"，0 个负面标签，唯一可以让讲究派"勉为其难"接受的选项。'
			],
			footer: '一起选 · 不站队的最终建议'
		}
	},

	// ─────────────────────────────────────────────────────────────
	// 实验组 ③ 美食侦探团 —— 5 讲究 / 1 算账 / 1 随和 / 1 避雷
	// 预期共识：R2 西班牙
	// ─────────────────────────────────────────────────────────────
	{
		id: 's3',
		title: '美食侦探团',
		subtitle: '一群嘴叼的人，AI 怎么不被骂"没品"？',
		headline: '一群嘴叼的人，<br>AI 怎么不被骂"没品"？',
		desc: '小众、出片、不踩雷——每一项都是雷区。AI 要在"太网红"和"太平庸"之间，找出那个还能让人发朋友圈的选项。',
		composition: { picky: 5, budget: 1, easygoing: 1, constraint: 1 },
		people: [
			{
				id: 'p1', name: '林夕', archetype: 'picky', avatar: '🍷',
				votes: {
					r1: { stance: 'meh',  tags: ['t10', 't15'] },       // 太网红 + 太吵
					r2: { stance: 'love', tags: [] },
						r3: { stance: 'pass', tags: ['t13', 't14'] },       // 不新鲜 + 食材一般 → pass
					r4: { stance: 'pass', tags: ['t9', 't14'] },        // 不出片 + 食材一般
					r5: { stance: 'meh',  tags: ['t10'] }
				}
			},
			{
				id: 'p2', name: 'Vivi', archetype: 'picky', avatar: '🦋',
				votes: {
					r1: { stance: 'pass', tags: ['t10', 't12'] },       // 太网红 + 上次吃过
					r2: { stance: 'love', tags: [] },
						r3: { stance: 'pass', tags: ['t13', 't14'] },       // 食材一般 + 不新鲜 → pass
					r4: { stance: 'pass', tags: ['t9'] },
					r5: { stance: 'meh',  tags: ['t10', 't15'] }        // 太网红 + 太吵
				}
			},
			{
				id: 'p3', name: '老饕周', archetype: 'picky', avatar: '🧐',
				votes: {
					r1: { stance: 'pass', tags: ['t10', 't13'] },       // 太网红 + 不新鲜
					r2: { stance: 'love', tags: [] },
					r3: { stance: 'meh',  tags: ['t14'] },
					r4: { stance: 'meh',  tags: ['t9', 't14'] },
					r5: { stance: 'pass', tags: ['t10', 't13'] }
				}
			},
			{
				id: 'p4', name: 'Jenny', archetype: 'picky', avatar: '🌍',
				votes: {
					r1: { stance: 'meh',  tags: ['t15'] },              // 太吵
					r2: { stance: 'love', tags: [] },                   // 海归，吃西餐多
					r3: { stance: 'meh',  tags: ['t13'] },
					r4: { stance: 'meh',  tags: ['t9'] },
					r5: { stance: 'pass', tags: ['t5', 't15'] }
				}
			},
			{
				id: 'p5', name: '圆圆', archetype: 'picky', avatar: '📷',
				votes: {
					r1: { stance: 'meh',  tags: ['t12', 't15'] },       // 上次吃过 + 太吵
					r2: { stance: 'love', tags: [] },                   // 出片冠军
					r3: { stance: 'pass', tags: ['t9'] },               // 新店没参考
					r4: { stance: 'pass', tags: ['t9'] },
					r5: { stance: 'meh',  tags: ['t14'] }
				}
			},
			{
				id: 'p6', name: '阿哲', archetype: 'budget', avatar: '💼',
				votes: {
					r1: { stance: 'meh',  tags: ['t1', 't16'] },        // 太贵 + 没座位
					r2: { stance: 'pass', tags: ['t1', 't2'] },         // 唯一反对 R2
					r3: { stance: 'meh',  tags: ['t2'] },
					r4: { stance: 'love', tags: [] },
					r5: { stance: 'meh',  tags: ['t1', 't7'] },         // 太贵 + 要排队
					customTag: { restaurantId: 'r2', text: '一人 320 是不是有点离谱' }
				}
			},
			{
				id: 'p7', name: '小鹿', archetype: 'easygoing', avatar: '🦌',
				votes: {
					r1: { stance: 'meh',  tags: ['t15'] },              // 太吵
						r2: { stance: 'pass', tags: ['t1'] },               // 这家太贵了，撑不住
					r3: { stance: 'meh',  tags: [] },
					r4: { stance: 'meh',  tags: ['t3'] },               // 离我太远
					r5: { stance: 'meh',  tags: [] }
				}
			},
			{
				id: 'p8', name: '周周', archetype: 'constraint', avatar: '🤰',
				votes: {
					r1: { stance: 'pass', tags: ['t5', 't11'] },        // 不吃辣 + 怕过敏
						r2: { stance: 'pass', tags: ['t11'] },              // 西餐生火腿/生海鲜也是雷区
					r3: { stance: 'meh',  tags: ['t11'] },              // 怕过敏
					r4: { stance: 'meh',  tags: ['t16'] },              // 没座位
					r5: { stance: 'pass', tags: ['t5', 't11'] },
					customTag: { restaurantId: 'r5', text: '油烟味重' }
				}
			}
		],
		consensus: {
			pickId: 'r2',
			phoneTitle: '想找一家不翻车的店',
			screen2: {
				endline: '识别到 3 类雷区：网红 · 食材 · 出片'
			},
			screen3: {
				acceptance: '8 个人里 5 个能接受。',
				reason: '这桌每家店都被挑出毛病，没有皆大欢喜的答案。但这家是唯一有 5 个人真心想去的——没人贴过"太网红 / 不出片 / 食材一般 / 不新鲜"中的任何一个。',
				secondaryCTA: '换一个推荐'
			},
			headline: '建议去 不是翻车鱼的西班牙菜。',
			body: '讲究派 5 人把"太网红 / 不出片"贴遍其他 4 家，避雷派孕期忌辣排掉了 2 家辣的，新店没参考也被否。R2 是这桌**唯一同时满足"出片、独特、不踩雷"的选项**——代价是贵，但只有 1 个算账派反对，没掀桌。',
			reasoning: [
				'R1 火烧云：3 人贴"太网红"，孕妇忌辣 → 讲究派的红线。',
				'R5 麻辣火锅：3 人贴"太网红/不吃辣"，孕妇直接劝退。',
				'R4 东北菜：3 人贴"不出片" → 这桌人最敏感的标签。',
				'R3 环球港：新店无种草，讲究派"不冒险" → 2 人选"算了"。',
				'R2 西班牙：5 个讲究派全部"想去"，避雷派孕妇也选"想去"（西餐熟食安全），仅 1 算账派反对。'
			],
			footer: '一起选 · 不站队的最终建议'
		}
	}
];
