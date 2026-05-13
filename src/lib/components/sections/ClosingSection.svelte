<script>
  import { onMount } from 'svelte';

  let visible = false;
  let sectionEl;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionEl) observer.observe(sectionEl);
  });
</script>

<section class="section" id="closing" bind:this={sectionEl}>
  <div class="inner">
    <p class="line line-1 {visible ? 'show' : ''}">小红书是看见生活的地方。</p>
    <p class="line line-2 {visible ? 'show' : ''}">
      现在我们让它，也是<span class="accent">一起决定生活</span>的地方。
    </p>

    <div class="signature {visible ? 'show' : ''}">
      <span class="dot"></span>
      <span class="signature-text">RFT AI DEMO ·「一起选」 · 高佳雯</span>
    </div>
  </div>
</section>

<style>
  .section {
    padding: clamp(80px, 14vw, 160px) clamp(16px, 4vw, 48px);
    color: #1f1b16;
    position: relative;
    overflow: hidden;
  }

  /* 背景红色光晕——隐约的品牌色情感铺底 */
  .section::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: clamp(400px, 60vw, 800px);
    height: clamp(400px, 60vw, 800px);
    background: radial-gradient(circle, rgba(255, 36, 66, 0.08) 0%, transparent 65%);
    pointer-events: none;
  }

  .inner {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .line {
    font-size: clamp(28px, 5.5vw, 60px);
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin: 0;
    opacity: 0;
    transform: translateY(24px);
  }

  .line-1 {
    color: #8a7966;
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .line-1.show {
    opacity: 1;
    transform: translateY(0);
  }

  .line-2 {
    color: #1f1b16;
    margin-top: 16px;
    transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
  }

  .line-2.show {
    opacity: 1;
    transform: translateY(0);
  }

  .accent {
    color: #FF2442;
    position: relative;
    white-space: nowrap;
  }

  /* 红字下面的小下划线，强调"一起决定生活" */
  .accent::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 3px;
    background: #FF2442;
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s ease 1.2s;
  }

  .line-2.show .accent::after {
    transform: scaleX(1);
  }

  /* 签名 */
  .signature {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: clamp(48px, 8vw, 80px);
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(31, 27, 22, 0.1);
    border-radius: 999px;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.6s ease 1.5s, transform 0.6s ease 1.5s;
  }

  .signature.show {
    opacity: 1;
    transform: translateY(0);
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #FF2442;
    box-shadow: 0 0 12px rgba(255, 36, 66, 0.6);
  }

  .signature-text {
    font-size: 13px;
    color: #5f5549;
    letter-spacing: 0.04em;
  }
</style>
