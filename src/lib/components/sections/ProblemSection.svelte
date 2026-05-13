<section class="section" id="problem">
	<div class="inner">
		<p class="label">问题</p>
		<h2>小红书解决了发现，却没有解决“和别人一起决定”。</h2>
		<div class="grid">
			<div class="card">
				<h3>候选越来越多</h3>
				<p>群里不断转链接，选择看起来更多了，但决定反而更难了。</p>
			</div>
			<div class="card">
				<h3>真实偏好说不出口</h3>
				<p>“都可以”“我随便”常常不是没有意见，而是不想伤关系。</p>
			</div>
			<div class="card">
				<h3>没人想背拍板责任</h3>
				<p>谁来下最后决定，往往比去哪儿本身更让人尴尬。</p>
			</div>
		</div>
	</div>
</section>

<style>
	.section {
		padding: 72px 24px;
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
		line-height: 1.05;
		max-width: 12ch;
		margin: 0 0 32px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
	}

	.card {
		padding: 24px;
		border-radius: 24px;
		background: rgba(255, 255, 255, 0.45);
		border: 1px solid rgba(31, 27, 22, 0.08);
	}

	.card h3 {
		margin: 0 0 10px;
		font-size: 20px;
	}

	.card p {
		margin: 0;
		line-height: 1.6;
		color: #5f5549;
	}

	@media (max-width: 820px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>