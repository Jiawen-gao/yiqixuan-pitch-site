<script>
  import { onMount } from 'svelte';

  let visible = false;
  let sectionEl;

  const cards = [
    {
      num: '01',
      tag: '读偏好',
      title: '把"我都行"翻译成"我其实在意X"',
      mechanism: {
        label: '机制',
        text: '根据场景类型（聚餐 / 旅行 / 买东西）+ 候选项特征，AI 生成多维度的匿名顾虑标签。',
      },
      demoBridge: 'Demo 里你看到的「太贵了 / 不顺路 / 太吵 / 不出片」这些标签——不是预设词库，是 AI 看你这次的场景和候选项当场生成的。',
      value: {
        label: '价值',
        text: '让沉默的人也能表达。点一下 vs 打字，表达成本从 30 秒降到 1 秒；匿名机制让"嫌贵""怕踩雷"这种话不必撕脸说出来。',
      },
    },
    {
      num: '02',
      tag: '找共识',
      title: '把"共识"翻译成"为什么这家最多人支持"',
      mechanism: {
        label: '机制',
        text: '综合所有人的态度投票 + 顾虑标签分布 + 候选项属性，AI 输出一段自然语言推荐语，解释为什么是这个选项、谁还在犹豫、为什么不是其他。',
      },
      demoBridge: '「8 个人里 6 个能接受。这群人嘴上"都行"，但每家都有人悄悄贴了标签——火烧云太吵、西班牙菜太贵、东北菜不出片、火锅有人不吃辣。只有环球港这家，8个人没有一个贴过负面标签。不是它最好，是它没有人真心反对。」——就是这条推荐语的真实输出。',
      value: {
        label: '价值',
        text: '不是冷冰冰的得分排序，是带共情的解释，用户一眼读懂"为什么是这家"。',
      },
    },
  ];

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionEl) observer.observe(sectionEl);
  });
</script>

<section class="section" id="ai-insight" bind:this={sectionEl}>
  <div class="inner">
    <p class="label">AI 在做什么</p>
    <h2>在「一起选」里，AI 只做两件事。</h2>
    <p class="lead">不是泛泛的"AI 赋能"——是两个可以独立验证、对用户体验有清晰边际收益的应用点。</p>

    <div class="cards">
      {#each cards as card, i}
        <div class="card {visible ? 'show' : ''}" style="--i: {i}">
          <div class="card-top">
            <div class="num">{card.num}</div>
            <div class="tag">{card.tag}</div>
          </div>

          <h3 class="card-title">{card.title}</h3>

          <div class="block">
            <span class="block-label">{card.mechanism.label}</span>
            <p class="block-text">{card.mechanism.text}</p>
          </div>

          <div class="bridge">
            <span class="bridge-arrow">→</span>
            <p class="bridge-text">{card.demoBridge}</p>
          </div>

          <div class="block">
            <span class="block-label">{card.value.label}</span>
            <p class="block-text">{card.value.text}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="tagline {visible ? 'show' : ''}">
      不替你做决定，只把"群体的潜台词"翻译给你看。
    </div>
  </div>
</section>

<style>
  .section {
    padding: clamp(48px, 8vw, 80px) clamp(16px, 4vw, 48px);
  }

  .inner {
    max-width: 980px;
    margin: 0 auto;
  }

  .label {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #8a7966;
    margin: 0 0 16px;
  }

  h2 {
    font-size: clamp(28px, 5vw, 52px);
    line-height: 1.1;
    margin: 0 0 20px;
    color: #1f1b16;
  }

  .lead {
    font-size: clamp(15px, 1.6vw, 18px);
    color: #5f5549;
    line-height: 1.6;
    margin: 0 0 56px;
    max-width: 760px;
  }

  /* 两张大卡 */
  .cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(20px, 3vw, 32px);
  }

  .card {
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(31, 27, 22, 0.08);
    border-radius: 24px;
    padding: clamp(28px, 4vw, 44px);
    opacity: 0;
    transform: translateY(32px);
    transition:
      opacity 0.6s ease calc(var(--i) * 0.18s),
      transform 0.6s ease calc(var(--i) * 0.18s),
      box-shadow 0.25s ease,
      border-color 0.25s ease;
  }

  .card.show {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover {
    box-shadow: 0 12px 32px rgba(31, 27, 22, 0.08);
    border-color: rgba(31, 27, 22, 0.18);
  }

  .card-top {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  .num {
    font-size: clamp(36px, 4.5vw, 56px);
    font-weight: 700;
    line-height: 1;
    color: #FF2442;
    letter-spacing: -0.04em;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 6px 14px;
    background: rgba(255, 36, 66, 0.08);
    color: #FF2442;
    font-size: 13px;
    font-weight: 600;
    border-radius: 999px;
    letter-spacing: 0.02em;
  }

  .card-title {
    font-size: clamp(20px, 2.4vw, 26px);
    font-weight: 600;
    line-height: 1.35;
    color: #1f1b16;
    margin: 0 0 28px;
    letter-spacing: -0.01em;
  }

  /* 机制 / 价值 区块 */
  .block {
    margin-bottom: 20px;
  }

  .block-label {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #8a7966;
    margin-bottom: 8px;
  }

  .block-text {
    font-size: clamp(13px, 1.3vw, 15px);
    color: #3f3a32;
    line-height: 1.7;
    margin: 0;
  }

  /* Demo 对位桥接段——用红色细线条 + 引文样式 */
  .bridge {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    padding: 14px 16px;
    background: rgba(255, 36, 66, 0.04);
    border-left: 2px solid #FF2442;
    border-radius: 0 8px 8px 0;
    margin: 0 0 20px;
  }

  .bridge-arrow {
    color: #FF2442;
    font-size: 14px;
    font-weight: 600;
    flex-shrink: 0;
    line-height: 1.7;
  }

  .bridge-text {
    font-size: clamp(12px, 1.2vw, 14px);
    color: #5f5549;
    line-height: 1.65;
    margin: 0;
  }

  /* 底部 tagline */
  .tagline {
    margin-top: 56px;
    font-size: clamp(15px, 1.8vw, 20px);
    color: #8a7966;
    text-align: center;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s;
  }

  .tagline.show {
    opacity: 1;
    transform: translateY(0);
  }

  /* 响应式：窄屏堆叠 */
  @media (max-width: 760px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }
</style>
