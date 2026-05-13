<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  // 聊天消息序列
  const messages = [
	{ type: 'time',  text: '下午 3:47', delay: 200 },
	{ type: 'text',  side: 'left',  text: '我们明天剧本杀之前去哪吃？我找了四家餐厅，但我没有偏好的，大家觉得不好就再找找', delay: 600 },
	{ type: 'image', side: 'left',  img: `${base}/notes/note-1.png`, delay: 1200 },
	{ type: 'image', side: 'left',  img: `${base}/notes/note-2.png`, delay: 1900 },
	{ type: 'image', side: 'left',  img: `${base}/notes/note-3.png`, delay: 2600 },
	{ type: 'image', side: 'left',  img: `${base}/notes/note-4.png`, delay: 3300 },
	{ type: 'time',  text: '下午 4:00', delay: 4000 },
	{ type: 'text',  side: 'right', text: '我也找了一家，大家一起看看', delay: 4500 },
	{ type: 'image', side: 'right', img: `${base}/notes/note-5.png`, delay: 5100 },
	{ type: 'text',  side: 'left',  text: '我随便～', delay: 5900 },
	{ type: 'text',  side: 'right', text: '我也都可以', delay: 6600 },
	{ type: 'time',  text: '沉默了一下午', delay: 7400, muted: true },
	{ type: 'time',  text: '下午 8:00', delay: 8000 },
	{ type: 'text',  side: 'left',  text: '明天到底去哪里啊', delay: 8500 },
	{ type: 'text',  side: 'right', text: '不知道啊', delay: 9200 },
];

  let visible = [];
  let chatEl;
  let sectionEl;
  let started = false;

  function startAnimation() {
    if (started) return;
    started = true;
    messages.forEach((_, i) => {
      setTimeout(() => {
        visible = [...visible, i];
        // 每次新消息出现后滚到底
        setTimeout(() => {
          if (chatEl) chatEl.scrollTop = chatEl.scrollHeight;
        }, 50);
      }, messages[i].delay);
    });
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionEl) observer.observe(sectionEl);
  });
</script>

<section class="section" id="problem" bind:this={sectionEl}>
  <div class="inner">
    <p class="label">问题</p>
    <h2>小红书解决了「发现好去处」，<br>却没有解决「和别人一起决定」。</h2>

    <div class="layout">
      <!-- 左：微信群聊 -->
      <div class="wechat-wrap">
        <!-- 顶部导航栏 -->
        <div class="wechat-nav">
          <div class="nav-title">周末来聚</div>
          <div class="nav-count">8人</div>
        </div>

        <!-- 聊天内容区（可滚动） -->
        <div class="wechat-body" bind:this={chatEl}>
          {#each messages as msg, i}
            {#if visible.includes(i)}
              {#if msg.type === 'time'}
                <div class="time-divider {msg.muted ? 'muted' : ''} msg-enter">{msg.text}</div>
              {:else if msg.type === 'text'}
                <div class="row {msg.side} msg-enter">
                  <div class="bubble {msg.side}">{msg.text}</div>
                </div>
              {:else if msg.type === 'image'}
                <div class="row {msg.side} msg-enter">
                  <img src={msg.img} alt="笔记" class="note-img" />
                </div>
              {/if}
            {/if}
          {/each}
        </div>

        <!-- 底部输入栏 -->
        <div class="wechat-input">
          <div class="input-fake">说点什么…</div>
        </div>
      </div>

      <!-- 右：三个card -->
      <div class="cards">
        <div class="card">
          <div class="card-icon">📎</div>
          <h3>候选越来越多</h3>
          <p>群里不断转发笔记，选择看起来更多了，但决定反而更难了。</p>
        </div>
        <div class="card">
          <div class="card-icon">🤐</div>
          <h3>真实偏好说不出口</h3>
          <p>"都可以""我随便"常常不是没有意见，而是不想伤关系。</p>
        </div>
        <div class="card">
          <div class="card-icon">🫣</div>
          <h3>没人想背拍板责任</h3>
          <p>谁来下最后决定，往往比去哪儿本身更让人尴尬。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .section {
    padding: clamp(48px, 8vw, 72px) clamp(16px, 4vw, 48px);
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
    font-size: clamp(24px, 4vw, 48px);
    line-height: 1.15;
    margin: 0 0 48px;
  }

  /* 左右布局 */
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: stretch;
  }

  /* 微信外壳 */
  .wechat-wrap {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 32px rgba(0,0,0,0.12);
    background: #ededed;
    display: flex;
    flex-direction: column;
    height: 500px;
  }

  /* 顶部导航 */
  .wechat-nav {
    background: #f7f7f7;
    border-bottom: 0.5px solid #d0d0d0;
    padding: 12px 16px 10px;
    text-align: center;
    flex-shrink: 0;
  }

  .nav-title {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    font-family: -apple-system, 'PingFang SC', sans-serif;
  }

  .nav-count {
    font-size: 12px;
    color: #999;
    margin-top: 2px;
    font-family: -apple-system, 'PingFang SC', sans-serif;
  }

  /* 聊天内容区 */
  .wechat-body {
    flex: 1;
    overflow-y: auto;
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #ededed;
    scroll-behavior: smooth;
  }

  /* 隐藏滚动条但保留功能 */
  .wechat-body::-webkit-scrollbar {
    width: 0;
  }

  /* 时间分割线 */
  .time-divider {
    text-align: center;
    font-size: 11px;
    color: #999;
    font-family: -apple-system, 'PingFang SC', sans-serif;
    margin: 4px 0;
  }

  .time-divider.muted {
    color: #b0b0b0;
    font-style: italic;
  }

  /* 消息行 */
  .row {
    display: flex;
  }

  .row.left {
    justify-content: flex-start;
  }

  .row.right {
    justify-content: flex-end;
  }

  /* 文字气泡 */
  .bubble {
    padding: 9px 12px;
    border-radius: 6px;
    font-size: 15px;
    line-height: 1.5;
    max-width: 70%;
    font-family: -apple-system, 'PingFang SC', sans-serif;
    position: relative;
    word-break: break-all;
  }

  .bubble.left {
    background: #ffffff;
    color: #1a1a1a;
  }

  .bubble.left::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 10px;
    border: 6px solid transparent;
    border-right-color: #ffffff;
    border-left: 0;
  }

  .bubble.right {
    background: #95ec69;
    color: #1a1a1a;
  }

  .bubble.right::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 10px;
    border: 6px solid transparent;
    border-left-color: #95ec69;
    border-right: 0;
  }

  /* 图片笔记 */
  .note-img {
	width: 200px;
	height: auto;        /* 改这里：auto而不是固定160px */
	max-height: 280px;   /* 加这行：防止超长图 */
	object-fit: contain; /* 改这里：contain而不是cover */
	border-radius: 8px;
	display: block;
	background: #d4d4d4;
}

  /* 底部输入栏 */
  .wechat-input {
    background: #f7f7f7;
    border-top: 0.5px solid #d0d0d0;
    padding: 10px 16px;
    flex-shrink: 0;
  }

  .input-fake {
    background: #ffffff;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 14px;
    color: #bbb;
    font-family: -apple-system, 'PingFang SC', sans-serif;
  }

  /* 出现动画 */
  .msg-enter {
    animation: fadeUp 0.25s ease forwards;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 右侧卡片 */
  .cards {
    display: flex;
    flex-direction: column;
    gap: 16px;
	justify-content: space-between;
  }

  .card {
    padding: 24px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.45);
    border: 1px solid rgba(31, 27, 22, 0.08);
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    cursor: default;
  }

  .card:hover {
    transform: translateY(-4px);
    border-color: rgba(31, 27, 22, 0.18);
    box-shadow: 0 8px 24px rgba(31, 27, 22, 0.08);
  }

  .card-icon {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .card h3 {
    margin: 0 0 8px;
    font-size: clamp(15px, 1.6vw, 18px);
  }

  .card p {
    margin: 0;
    line-height: 1.6;
    color: #5f5549;
    font-size: clamp(13px, 1.3vw, 15px);
  }

  /* 响应式 */
  @media (max-width: 720px) {
    .layout {
      grid-template-columns: 1fr;
    }

    .wechat-wrap {
      height: 420px;
    }
  }
</style>