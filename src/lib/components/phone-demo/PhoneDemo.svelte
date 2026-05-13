<script>
  // 右侧手机 Demo —— 三屏壳
  // 屏 1：投票板（VoteBoard）
  // 屏 2：AI 阅读伪动画（AIReading）
  // 屏 3：共识答案（ConsensusAnswer）
  // 切屏：dots 手动点 / 左侧头像联动跳屏 1
  import PhoneFrame from './PhoneFrame.svelte';
  import VoteBoard from './VoteBoard.svelte';
  import AIReading from './AIReading.svelte';
  import ConsensusAnswer from './ConsensusAnswer.svelte';

  // 当前视角 person（优先）
  export let person = null;
  // 备选：当 person 为空时，从 scenario.people[0] 兑底
  export let scenario = null;
  // 当前屏索引：0/1/2
  export let screen = 0;

  $: activePerson = person ?? scenario?.people?.[0] ?? null;
  // 顶部标题随实验组切换
  $: phoneTitle = scenario?.consensus?.phoneTitle ?? '这周聚餐去哪儿？';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function goTo(i) {
    screen = i;
    dispatch('screenchange', { index: i });
  }

  const tabs = ['匿名投票', 'AI 在读', '共识答案'];

</script>

<div class="phone-demo">
  <div class="tabs" role="tablist">
    {#each tabs as t, i}
      <button
        class="tab"
        class:active={i === screen}
        on:click={() => goTo(i)}
        role="tab"
        aria-selected={i === screen}
      >
        <span class="tab-num">{i + 1}</span>
        <span class="tab-label">{t}</span>
      </button>
    {/each}
  </div>

  <PhoneFrame title={phoneTitle} on:back>
    {#if screen === 0}
      <div class="subtitle">匿名投票 · 只有你能看到自己的选择</div>
      <VoteBoard person={activePerson} />
    {:else if screen === 1}
      <AIReading {scenario} active={screen === 1} />
    {:else}
      <ConsensusAnswer {scenario} />
    {/if}
  </PhoneFrame>
</div>

<style>
  .phone-demo {
    width: 100%;
    max-width: 390px;
    display: flex;
    flex-direction: column;
    align-items: stretch;   /* center 改 stretch */
    gap: 16px;
  }
  .subtitle {
    padding: 12px 16px 14px;
    font-size: 12px;
    color: #999;
    text-align: center;
    flex-shrink: 0;
  }
  .tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  background: #F5F3EE;
  padding: 4px;
  border-radius: 10px;
}
.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 36px;
  padding: 0 8px;
  background: transparent;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-family: inherit;
  color: #888;
  transition: all 0.2s ease;
  min-width: 0;
}
.tab:hover:not(.active) {
  color: #555;
  background: rgba(255, 255, 255, 0.5);
}
.tab.active {
  background: #FFFFFF;
  color: #1A1A1A;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}
.tab-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #E5E1D8;
  color: #888;
  font-size: 11px;
  font-weight: 600;
  flex-shrink: 0;
  transition: all 0.2s ease;
}
.tab.active .tab-num {
  background: #FF2442;
  color: #FFFFFF;
}
.tab-label {
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
