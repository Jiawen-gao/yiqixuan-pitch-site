<script>
  // 屏 1：投票板（完全匿名、只看 TA 的视角）
  // 双列瀑布流：首图 + 餐厅名 + 三档态度（只 emoji）+ 标签 2 行横滑
  // TA 选中的顾虑标签排在最前
  import { restaurants } from '$lib/data/restaurants.js';
  import { concernTags } from '$lib/data/tags.js';

  // 当前视角的 person 对象（含 votes）
  export let person;

  // 安全兜底：万一 person 为空就显示一个占位
  $: votes = person?.votes ?? {};

  // 为每家餐厅算「TA 选中的在前」的标签顺序
  function tagsFor(restaurantId, votesMap) {
    const vote = votes[restaurantId];
    const selected = new Set(vote?.tags ?? []);
    return [...concernTags].sort((a, b) => {
      const aOn = selected.has(a.id) ? 0 : 1;
      const bOn = selected.has(b.id) ? 0 : 1;
      return aOn - bOn;
    }).map(t => ({ ...t, active: selected.has(t.id) }));
  }
</script>

<div class="grid">
  {#each restaurants as r (r.id)}
    {@const vote = votes[r.id] ?? { stance: null, tags: [] }}
    {@const tagList = tagsFor(r.id, votes)}
    <div class="card" data-r={r.id}>
      <div class="cover-wrap">
        <img class="cover" src={r.cover} alt={r.name} loading="lazy" />
      </div>
      <div class="card-body">
        <div class="restaurant-name">{r.name}</div>

        <div class="stance-row">
          <div class="stance-btn" class:selected={vote.stance === 'love'}>❤️</div>
          <div class="stance-btn" class:selected={vote.stance === 'meh'}>😐</div>
          <div class="stance-btn" class:selected={vote.stance === 'pass'}>🙅</div>
        </div>

        <div class="tags-scroller">
          {#each tagList as t (t.id)}
            <div class="tag" class:active={t.active}>{t.text}</div>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .grid {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 10px 20px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-auto-rows: max-content;
    gap: 8px;
    align-content: start;
    align-items: start;
  }
  .grid::-webkit-scrollbar { display: none; }

  .card {
    background: #FFFFFF;
    border-radius: 12px;
    border: 1px solid #F0F0F0;
    min-width: 0;
    overflow: hidden;
  }
  .cover-wrap {
    position: relative;
    width: 100%;
    padding-bottom: 133.333%; /* 3:4 比例 */
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    overflow: hidden;
    background: #F5F5F5;
  }
  .cover {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .card-body {
    padding: 10px 10px 12px;
    min-width: 0;
  }
  .restaurant-name {
    font-size: 14px;
    font-weight: 600;
    color: #1A1A1A;
    line-height: 1.35;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* 三档态度（只 emoji，无文字） */
  .stance-row {
    display: flex;
    gap: 6px;
    margin-bottom: 10px;
  }
  .stance-btn {
    flex: 1;
    height: 32px;
    background: #F7F7F7;
    border: 1px solid transparent;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    opacity: 0.28;
    transition: all 0.25s ease;
  }
  .stance-btn.selected {
    opacity: 1;
    background: #FFF0F2;
    border-color: #FFB4C0;
  }

  /* 标签：2 行横滑 grid */
  .tags-scroller {
    display: grid;
    grid-template-rows: auto auto;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 4px;
    overflow-x: auto;
    min-width: 0;
    max-width: 100%;
    padding-bottom: 2px;
    -webkit-mask-image: linear-gradient(to right, #000 calc(100% - 16px), transparent 100%);
            mask-image: linear-gradient(to right, #000 calc(100% - 16px), transparent 100%);
  }
  .tags-scroller::-webkit-scrollbar { display: none; }

  .tag {
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 8px;
    background: #FAFAFA;
    color: #BBB;
    border: 1px solid #F0F0F0;
    white-space: nowrap;
    transition: all 0.25s ease;
  }
  .tag.active {
    background: #FFEDF0;
    color: #FF2442;
    border-color: #FFB3C0;
    font-weight: 500;
  }
</style>
