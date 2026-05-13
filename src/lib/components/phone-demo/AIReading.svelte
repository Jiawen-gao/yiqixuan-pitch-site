<script>
  // 屏 2：AI 阅读（伪动画）
  // 8 个灰色头像横排 → 逐个点亮（绿色） → 中央文字"正在读 X/8"
  // 走完 8 个之后停在结尾态：endline 文案 + 静态的 4 色立场圆点
  import { onMount, onDestroy } from 'svelte';

  export let scenario;            // 当前实验组（取 people / consensus.screen2.endline）
  export let active = false;      // 当前屏是否被切到（控制是否启动动画）

  let readCount = 0;              // 0..8
  let timer = null;

  $: people = scenario?.people ?? [];
  $: endline = scenario?.consensus?.screen2?.endline ?? '';

  // 每次切到这屏，从头播一次
  $: if (active) startAnim();
  $: if (!active) resetAnim();

  function startAnim() {
    resetAnim();
    // 每 250ms 点亮下一个人，8 个人共 ~2s
    timer = setInterval(() => {
      readCount += 1;
      if (readCount >= 8) {
        clearInterval(timer);
        timer = null;
      }
    }, 250);
  }

  function resetAnim() {
    if (timer) { clearInterval(timer); timer = null; }
    readCount = 0;
  }

  onDestroy(resetAnim);

  // 四种立场圆点（结尾态展示）
  const stances = [
    { color: '#9CA3AF', label: '随和' },
    { color: '#D97706', label: '算账' },
    { color: '#7C3AED', label: '讲究' },
    { color: '#DC2626', label: '避雷' }
  ];

  $: done = readCount >= 8;
</script>

<div class="screen">
  <div class="top">
    <div class="hint">AI 在读 8 个人的真实偏好</div>

    <div class="avatars">
      {#each people as p, i}
        <div class="avatar-col">
          <div class="avatar" class:on={i < readCount}>
            <span class="emoji" class:fade={i >= readCount}>{p.avatar}</span>
          </div>
          <div class="dot" class:on={i < readCount}></div>
        </div>
      {/each}
    </div>
  </div>

  <div class="middle">
    {#if !done}
      <div class="progress-text">正在读 8 个人的真实偏好…</div>
      <div class="progress-num">{readCount}/8</div>
    {:else}
      <div class="endline-wrap">
        <div class="endline">{endline}</div>
        <div class="stances">
          {#each stances as s}
            <div class="stance-pill" style="background:{s.color}"></div>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <div class="footer">不替你做决定，只帮你看清分歧</div>
</div>

<style>
  .screen {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 24px 20px 20px;
    background: #FFFFFF;
  }

  .top {
    flex-shrink: 0;
  }

  .hint {
    font-size: 12px;
    color: #999;
    text-align: center;
    margin-bottom: 28px;
  }

  /* 8 个头像 4×2 grid */
  .avatars {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px 20px;
    padding: 0 24px;
  }
  .avatar-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #F3F3F3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
  }
  .avatar.on {
    background: #FFEDF0;
    box-shadow: 0 0 0 2px #FFB3C0;
  }
  .emoji {
    font-size: 26px;
    filter: grayscale(1);
    opacity: 0.4;
    transition: all 0.25s ease;
  }
  .avatar.on .emoji {
    filter: grayscale(0);
    opacity: 1;
  }
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #E5E5E5;
    transition: background 0.25s ease;
  }
  .dot.on {
    background: #22C55E;
  }

  /* 中段文字 */
  .middle {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 80px;
  }
  .progress-text {
    font-size: 14px;
    color: #333;
    margin-bottom: 8px;
  }
  .progress-num {
    font-size: 22px;
    font-weight: 600;
    color: #FF2442;
    letter-spacing: 1px;
  }

  .endline-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    animation: fadeIn 0.4s ease;
  }
  .endline {
    font-size: 14px;
    color: #1A1A1A;
    font-weight: 600;
    line-height: 1.5;
    padding: 0 12px;
  }
  .stances {
    display: flex;
    gap: 6px;
  }
  .stance-pill {
    width: 24px;
    height: 6px;
    border-radius: 3px;
    opacity: 0.85;
  }

  .footer {
    font-size: 11px;
    color: #BBB;
    text-align: center;
    margin-top: auto;
    padding-top: 12px;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
