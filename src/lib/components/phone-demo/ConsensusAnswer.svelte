<script>
  // 屏 3：共识答案
  // 顶部小标签 + 首图大卡 + 接受度大字 + 匿名理由 + 双 CTA
  import { restaurants } from '$lib/data/restaurants.js';

  export let scenario;

  $: pick = scenario?.consensus?.pickId;
  $: pickedRestaurant = restaurants.find(r => r.id === pick);
  $: s3 = scenario?.consensus?.screen3 ?? {};
  $: acceptance = s3.acceptance ?? '';
  $: reason = s3.reason ?? '';
  $: secondaryCTA = s3.secondaryCTA ?? '换一个推荐';
</script>

<div class="screen">
  <div class="badge">AI 共识建议</div>

  {#if pickedRestaurant}
    <div class="cover-card">
      <img class="cover" src={pickedRestaurant.cover} alt={pickedRestaurant.name} />
      <div class="cover-overlay">
        <div class="restaurant-name">{pickedRestaurant.name}</div>
      </div>
    </div>
  {/if}

  <div class="acceptance">{acceptance}</div>
  <div class="reason">{reason}</div>

  <div class="cta-row">
    <button class="cta primary">确定就这家</button>
    <button class="cta secondary">{secondaryCTA}</button>
  </div>
</div>

<style>
  .screen {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 18px 18px 24px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .screen::-webkit-scrollbar { display: none; }

  .badge {
    align-self: center;
    font-size: 11px;
    color: #FF2442;
    background: #FFEDF0;
    border: 1px solid #FFB3C0;
    padding: 4px 10px;
    border-radius: 999px;
    letter-spacing: 0.5px;
  }

  .cover-card {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 16px;
    overflow: hidden;
    background: #F5F5F5;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  }
  .cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .cover-overlay {
    position: absolute;
    inset: auto 0 0 0;
    background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%);
    padding: 32px 14px 14px;
  }
  .restaurant-name {
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  }

  .acceptance {
    font-size: 17px;
    font-weight: 700;
    color: #1A1A1A;
    line-height: 1.4;
    margin-top: 4px;
  }

  .reason {
    font-size: 13px;
    color: #555;
    line-height: 1.7;
  }

  .cta-row {
    display: flex;
    gap: 8px;
    margin-top: auto;
    padding-top: 12px;
  }
  .cta {
    flex: 1;
    height: 40px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
  }
  .cta.primary {
    background: #FF2442;
    color: #FFFFFF;
  }
  .cta.primary:hover {
    background: #E81E3D;
  }
  .cta.secondary {
    background: #FFFFFF;
    color: #555;
    border: 1px solid #E5E5E5;
  }
  .cta.secondary:hover {
    border-color: #BBB;
  }
</style>
