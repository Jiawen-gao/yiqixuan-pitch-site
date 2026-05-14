<script>
  import { onMount } from 'svelte';

  let sectionEl;
  let visible = false;

  onMount(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible = true;
            io.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    if (sectionEl) io.observe(sectionEl);
    return () => io.disconnect();
  });
</script>

<section
  id="voice"
  class="section"
  class:is-visible={visible}
  bind:this={sectionEl}
>
  <div class="inner">

    <div class="timestamp anim" style="--delay: 0ms;">
      <span class="dot"></span>
      48 HOURS LATER · 一个新的念头
    </div>

    <h2 class="title anim" style="--delay: 80ms;">
      48 小时之后，我又想到<span class="accent">一件事</span>。
    </h2>

    <p class="lede anim" style="--delay: 160ms;">
      提交 Demo 的当晚，睡前想到一篇 vibe coding 笔记——有人在讲 AI 语音输入正在改变她的工作流：灵感来的时候对着麦克风口喷，思路像倒水一样流出来，再让 AI 整理成结构，反而比打字顺畅得多。<em>我突然意识到，这件事和「一起选」有关。</em>
    </p>

    <div class="note-block anim" style="--delay: 240ms;">
      <div class="note-num">01</div>
      <div class="note-content">
        <div class="note-headline">标签解决的是「不知道怎么说」，但解决不了「说不全」。</div>
        <p class="note-body">预设标签把表达成本压到最低——5 秒，点一下，完成。它的价值是让本来就不想多说话的人，也能留下一个有效的偏好信号。</p>
        <p class="note-body">但每个人对一家餐厅的真实顾虑，不一定都能被预设标签捕捉到——有时候是一段很私人的经历，有时候是一个很具体的身体状态。她只能点「不想去」，理由消失了。<strong>语音输入想留住的，就是这些消失的理由。</strong></p>
      </div>
    </div>

    <div class="product-card anim" style="--delay: 320ms;">
      <div class="card-text">
        <div class="product-tag">NEW · 投票页语音入口</div>
        <h3>不想选标签时，对着麦说话就够了。</h3>
        <p>AI 转录之后，直接和标签数据一起送入共识算法。表达成本不再是「打不打字」，而是「说不说」。</p>
      </div>
      <div class="quotes">
        <div class="quote">
          我最近胃不太好，不太想吃辣的。
          <div class="mic"><span class="rec"></span> 0:03 · 已转录</div>
        </div>
        <div class="quote">
          这家上次去过，体验一般。
          <div class="mic"><span class="rec"></span> 0:02 · 已转录</div>
        </div>
      </div>
    </div>

    <div class="note-block anim" style="--delay: 400ms;">
      <div class="note-num">02</div>
      <div class="note-content">
        <div class="note-headline">为什么这个功能值得做。</div>
        <div class="reasoning">
          <div class="reason-card">
            <h4>习惯迁移正在发生</h4>
            <p>语音输入在年轻人群体里的普及速度比想象中快。办公室、咖啡馆、黑客松现场——越来越多人开始对着屏幕说话而不是打字。你对一家餐厅的真实顾虑，往往是脱口而出的，不是从列表里挑出来的。</p>
          </div>
          <div class="reason-card">
            <h4>强化最核心的承诺</h4>
            <p>让真实的想法不再因为表达成本而消失。无论是懒得打字的人，还是有一肚子顾虑的人，都能用最适合自己的方式，把真实的偏好留在这一次决策里。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="coda anim" style="--delay: 480ms;">
      <p class="coda-text">
        这是 48 小时之外的想法，还没有实现。但我开始真的相信，这个产品可以<span class="grow">继续生长</span>。
      </p>
    </div>

  </div>
</section>

<style>
  .section {
    padding: clamp(48px, 8vw, 80px) clamp(16px, 4vw, 48px);
    color: #1f1b16;
  }

  /* 容器宽度 + padding 与 AIInsight 完全一致 */
  .inner {
    max-width: 980px;
    margin: 0 auto;
  }

  /* 长段落在容器内再限 760px（跟 AIInsight .lead 一样） */
  .lede,
  .note-block .note-content {
    max-width: 980px;
  }

  /* 滚入动画 */
  .anim {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.7s ease, transform 0.7s ease;
    transition-delay: var(--delay, 0ms);
  }
  .is-visible .anim {
    opacity: 1;
    transform: translateY(0);
  }

  /* 顶部 label —— 跟 AIInsight .label 一致的另一种变体（徽章状，加一个点） */
  .timestamp {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #8a7966;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin: 0 0 16px;
  }
  .timestamp .dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #FF2442;
  }

  /* 标题 —— 完全跟 AIInsight h2 */
  .title {
    font-size: clamp(28px, 5vw, 52px);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.01em;
    margin: 0 0 20px;
    color: #1f1b16;
  }
  .title .accent { color: #FF2442; }

  /* 引子 —— 完全跟 AIInsight .lead */
  .lede {
    font-size: clamp(15px, 1.6vw, 18px);
    line-height: 1.6;
    color: #5f5549;
    margin: 0 0 56px;
  }
  .lede em {
    font-style: normal;
    color: #1f1b16;
    font-weight: 500;
  }

  /* 笔记块：编号列 + 内容列 */
  .note-block {
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: 24px;
    margin-bottom: 36px;
  }
  .note-num {
    font-size: 12px;
    font-weight: 600;
    color: #b8a994;
    letter-spacing: 0.15em;
    padding-top: 8px;
    border-top: 1px solid rgba(124, 109, 92, 0.22);
  }
  .note-content {
    min-width: 0;
  }
  .note-headline {
    font-size: clamp(18px, 1.9vw, 22px);
    font-weight: 600;
    line-height: 1.4;
    color: #1f1b16;
    margin: 0 0 12px;
    letter-spacing: -0.005em;
  }
  .note-body {
    font-size: clamp(14px, 1.4vw, 15.5px);
    line-height: 1.5;
    color: #5f5549;
    margin: 0;
  }
  .note-body + .note-body { margin-top: 10px; }
  .note-body strong {
    color: #1f1b16;
    font-weight: 500;
  }

  /* 产品卡：跟 AIInsight .card 同样的 24px 圆角 + 半透明白底 */
  .product-card {
    margin: 32px 0 32px;
    padding: clamp(28px, 2vw, 44px);
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(31, 27, 22, 0.08);
    border-radius: 24px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: clamp(24px, 3vw, 40px);
    align-items: center;
  }
  .product-tag {
    display: inline-block;
    font-size: 11px;
    letter-spacing: 0.18em;
    color: #FF2442;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .product-card h3 {
    font-size: clamp(20px, 2.4vw, 26px);
    font-weight: 600;
    line-height: 1.35;
    margin: 0 0 14px;
    color: #1f1b16;
    letter-spacing: -0.01em;
  }
  .product-card .card-text p {
    font-size: clamp(13px, 1.3vw, 15px);
    line-height: 1.7;
    color: #3f3a32;
    margin: 0;
  }
  .quotes {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .quote {
    position: relative;
    padding: 12px 16px 12px 38px;
    background: #ffffff;
    border-radius: 14px;
    border: 1px solid rgba(255, 36, 66, 0.12);
    font-size: 13.5px;
    line-height: 1.55;
    color: #1f1b16;
  }
  .quote::before {
    content: '\201C';
    position: absolute;
    left: 12px;
    top: 4px;
    font-size: 28px;
    color: #FF2442;
    line-height: 1;
    font-family: Georgia, serif;
  }
  .quote .mic {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: #FF2442;
    margin-top: 4px;
    letter-spacing: 0.06em;
  }
  .quote .rec {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #FF2442;
    box-shadow: 0 0 0 0 rgba(255, 36, 66, 0.6);
    animation: rec-pulse 1.6s ease-out infinite;
  }
  @keyframes rec-pulse {
    0% { box-shadow: 0 0 0 0 rgba(255, 36, 66, 0.5); }
    70% { box-shadow: 0 0 0 6px rgba(255, 36, 66, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 36, 66, 0); }
  }

  /* 论证双卡：复用 AIInsight .bridge 的语言——红左竖线 + 浅红底 */
  .reasoning {
    display: grid;
    grid-template-columns: 1.35fr 1fr;
    gap: clamp(16px, 2vw, 24px);
    margin-top: 8px;
  }
  .reason-card {
    padding: 16px 20px;
    border-left: 2px solid #FF2442;
    background: rgba(255, 36, 66, 0.04);
    border-radius: 0 8px 8px 0;
  }
  .reason-card h4 {
    font-size: 11px;
    color: #FF2442;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0 0 8px;
  }
  .reason-card p {
    font-size: clamp(12px, 1.2vw, 14px);
    line-height: 1.65;
    color: #5f5549;
    margin: 0;
  }

  /* 结尾：参考 AIInsight .tagline 的居中调 */
  .coda {
    margin-top: 56px;
    text-align: center;
  }
  .coda-text {
    font-size: clamp(15px, 1.8vw, 20px);
    font-weight: 500;
    line-height: 1.6;
    color: #1f1b16;
    margin: 0;
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
  }
  .coda-text .grow {
    position: relative;
    color: #FF2442;
    font-weight: 600;
    display: inline-block;
  }
  .coda-text .grow::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    bottom: -2px;
    height: 2px;
    background: #FF2442;
    border-radius: 2px;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: opacity 0.4s ease 1.0s, transform 0.8s ease 1.0s;
  }
  .is-visible .coda-text .grow::after {
    opacity: 0.55;
    transform: scaleX(1);
  }

  /* 响应式 */
  @media (max-width: 760px) {
    .product-card {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 24px;
    }
    .reasoning {
      grid-template-columns: 1fr;
      gap: 14px;
    }
    .note-block {
      grid-template-columns: 40px 1fr;
      gap: 16px;
    }
    .title {
      font-size: clamp(24px, 6vw, 32px);
    }
  }
</style>
