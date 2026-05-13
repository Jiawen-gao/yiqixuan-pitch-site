<script>
  import { onMount } from 'svelte';

  let visible = false;
  let sectionEl;

  const steps = [
    {
      num: '01',
      title: '发起',
      sub: '输入场景描述',
      desc: '创建决策板，添加候选餐厅，AI根据场景自动生成顾虑标签。',
      icon: '✦',
      color: '#1f1b16',
    },
    {
      num: '02',
      title: '投票',
      sub: '朋友匿名表态',
      desc: '分享链接，每个人选态度、贴顾虑标签，安全表达真实偏好。',
      icon: '✦',
      color: '#1f1b16',
    },
    {
      num: '03',
      title: '共识',
      sub: 'AI生成推荐',
      desc: '汇总所有人的偏好与分歧，AI给出没有立场的最终建议。',
      icon: '✦',
      color: '#1f1b16',
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
      { threshold: 0.2 }
    );
    if (sectionEl) observer.observe(sectionEl);
  });
</script>

<section class="section" id="solution" bind:this={sectionEl}>
  <div class="inner">
    <p class="label">解决方案</p>
    <h2>三步，从种草到共识。</h2>

    <div class="flow">
      {#each steps as step, i}
        <div class="step {visible ? 'show' : ''}" style="--i: {i}">
          <div class="step-inner">
            <div class="num">{step.num}</div>
            <div class="title">{step.title}</div>
            <div class="sub">{step.sub}</div>
            <div class="desc">{step.desc}</div>
          </div>
        </div>

        {#if i < steps.length - 1}
          <div class="arrow {visible ? 'show' : ''}" style="--i: {i}">
            <svg viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="12" x2="68" y2="12" stroke="#1f1b16" stroke-width="1.5" stroke-dasharray="80" stroke-dashoffset="80" class="arrow-line"/>
              <polyline points="60,4 72,12 60,20" stroke="#1f1b16" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        {/if}
      {/each}
    </div>

    <!-- 底部一句话 -->
    <div class="tagline {visible ? 'show' : ''}">
      不是帮你找最好的答案，而是帮一群人找到都能接受的那个。
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
    margin-bottom: 16px;
  }

  h2 {
    font-size: clamp(28px, 5vw, 52px);
    line-height: 1.1;
    margin: 0 0 56px;
  }

  /* 流程横排 */
  .flow {
    display: flex;
    align-items: center;
    gap: 0;
  }

  /* 步骤卡片 */
  .step {
    flex: 1;
    opacity: 0;
    transform: translateY(32px);
    transition:
      opacity 0.5s ease calc(var(--i) * 0.18s),
      transform 0.5s ease calc(var(--i) * 0.18s);
  }

  .step.show {
    opacity: 1;
    transform: translateY(0);
  }

  .step-inner {
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(31, 27, 22, 0.08);
    border-radius: 20px;
    padding: clamp(20px, 3vw, 32px);
    height: 100%;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    cursor: default;
  }

  .step-inner:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(31, 27, 22, 0.1);
    border-color: rgba(31, 27, 22, 0.2);
  }

  .step-inner:hover .num {
    transform: scale(1.08);
  }

  .num {
    font-size: clamp(48px, 6vw, 80px);
    font-weight: 700;
    line-height: 1;
    color: #1f1b16;
    margin-bottom: 16px;
    display: block;
    transition: transform 0.25s ease;
    letter-spacing: -0.04em;
  }

  .title {
    font-size: clamp(20px, 2.5vw, 28px);
    font-weight: 600;
    color: #1f1b16;
    margin-bottom: 4px;
  }

  .sub {
    font-size: clamp(12px, 1.2vw, 14px);
    color: #8a7966;
    margin-bottom: 16px;
    letter-spacing: 0.02em;
  }

  .desc {
    font-size: clamp(13px, 1.3vw, 15px);
    color: #5f5549;
    line-height: 1.65;
  }

  /* 箭头 */
  .arrow {
    width: clamp(40px, 5vw, 80px);
    flex-shrink: 0;
    padding: 0 8px;
    opacity: 0;
    transition: opacity 0.4s ease calc(var(--i) * 0.18s + 0.4s);
  }

  .arrow.show {
    opacity: 1;
  }

  .arrow svg {
    width: 100%;
    height: auto;
    overflow: visible;
  }

  /* 箭头线条动画 */
  .arrow.show .arrow-line {
    animation: drawLine 0.5s ease calc(var(--i) * 0.18s + 0.5s) forwards;
  }

  @keyframes drawLine {
    to {
      stroke-dashoffset: 0;
    }
  }

  /* 底部tagline */
  .tagline {
    margin-top: 48px;
    font-size: clamp(15px, 1.8vw, 20px);
    color: #8a7966;
    text-align: center;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.5s ease 0.7s, transform 0.5s ease 0.7s;
  }

  .tagline.show {
    opacity: 1;
    transform: translateY(0);
  }

  /* 响应式 */
  @media (max-width: 680px) {
    .flow {
      flex-direction: column;
      gap: 16px;
    }

    .arrow {
      transform: rotate(90deg);
      width: 40px;
    }
  }
</style>
