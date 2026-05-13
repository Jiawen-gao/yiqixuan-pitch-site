<section class="hero" id="top">
  <div class="inner">
    <p class="eyebrow">一起选 · 小红书多人共享决策板</p>
    <h1>大家说的都很好，<br>所以我们究竟去哪呢。</h1>
    <p class="sub">
      「一起选」是一个小红书多人共享决策板，帮朋友们把散落的种草链接变成可比较、可表态、可拍板的共同选择。每个人都能匿名选择顾虑，AI 负责给出中立推荐，让决定不再卡在群聊里。
    </p>

    <nav class="hero-nav" aria-label="页面导航">
      <a href="#problem">问题</a>
      <a href="#solution">方案</a>
      <a href="#demo">实验</a>
      <a href="#ai-insight">AI</a>
    </nav>
  </div>
</section>

<style>
  .hero {
    padding: clamp(64px, 10vw, 120px) clamp(16px, 4vw, 48px) clamp(48px, 8vw, 72px);
  }

  .inner {
    max-width: 980px;
    margin: 0 auto;
  }

  .eyebrow {
    font-size: clamp(11px, 1.2vw, 14px);
    letter-spacing: 0.08em;
    color: #7c6d5c;
    margin-bottom: clamp(12px, 2vw, 20px);
  }

  h1 {
    font-size: clamp(36px, 7vw, 88px);
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin: 0 0 clamp(16px, 2.5vw, 24px);
  }

  .sub {
    font-size: clamp(15px, 1.8vw, 20px);
    line-height: 1.6;
    color: #52483c;
    margin-bottom: clamp(24px, 3vw, 32px);
  }

  /* Hero 底部导航：胶囊按钮 */
  .hero-nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: clamp(8px, 1vw, 12px);
    margin-top: clamp(8px, 1.5vw, 16px);
  }

  .hero-nav a {
    font-size: clamp(13px, 1.3vw, 15px);
    color: #52483c;
    text-decoration: none;
    letter-spacing: 0.02em;
    padding: 8px 18px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(124, 109, 92, 0.18);
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  }

  .hero-nav a:hover {
    color: #FF2442;
    background: #ffffff;
    border-color: rgba(255, 36, 66, 0.35);
    transform: translateY(-1px);
  }
</style>