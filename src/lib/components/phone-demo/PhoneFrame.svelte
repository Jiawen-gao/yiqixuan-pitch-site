<div class="phone-shell">
	<div class="notch"></div>
	<div class="screen">
		<slot />
	</div>
</div>

<style>
	.phone-shell {
		position: relative;
		width: 360px;
		aspect-ratio: 390 / 844;
		border-radius: 42px;
		background: #111;
		padding: 14px;
		box-shadow:
			0 24px 60px rgba(0, 0, 0, 0.18),
			inset 0 0 0 1px rgba(255, 255, 255, 0.08);
	}

	.notch {
		position: absolute;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);
		width: 126px;
		height: 26px;
		border-radius: 999px;
		background: #1b1b1b;
		z-index: 2;
	}

	.screen {
		height: 100%;
		border-radius: 30px;
		background: #f8f4ec;
		overflow: hidden;
		padding: 36px 14px 14px;
		display: flex;
		flex-direction: column;
	}
</style>