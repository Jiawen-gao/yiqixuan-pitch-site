<script>
  // 极简手机壳：白色圆角容器 + 顶部 toolbar
  // 不要 iPhone 黑边、不要状态栏、不要灵动岛——用户嫌丑
  export let title = '';
  export let showBack = true;

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<div class="phone">
  <div class="toolbar">
    {#if showBack}
      <button class="back" on:click={() => dispatch('back')} aria-label="返回">‹</button>
    {/if}
    {#if title}
      <span class="title">{title}</span>
    {/if}
  </div>
  <div class="body">
    <slot />
  </div>
</div>

<style>
  .phone {
    width: 100%;
    max-width: 390px;
    height: 760px;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 12px 32px -12px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
  }
  .toolbar {
    height: 52px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    position: relative;
    border-bottom: 0.5px solid #F0F0F0;
  }
  .back {
    background: none;
    border: none;
    padding: 0;
    font-size: 22px;
    line-height: 1;
    color: #1A1A1A;
    cursor: pointer;
    font-family: inherit;
  }
  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    font-weight: 600;
    color: #1A1A1A;
    white-space: nowrap;
  }
  .body {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
</style>
