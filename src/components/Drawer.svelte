<div class="menu-wrap">
	<input type="checkbox" class="toggler" />

	<div class="hamburger">
		<div></div>
	</div>
	<div>Acknowledgements</div>
	<div class="menu">
		<slot />
	</div>
</div>

<style>
	:root {
		--menu-speed: 0.75s;
	}

	.menu-wrap {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
	}
	.toggler {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		height: 50px;
		width: 50px;
		cursor: pointer;
		z-index: 2;
	}
	.hamburger {
		position: absolute;
		top: 0;
		left: 0;
		height: 60px;
		width: 60px;
		background: transparent;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 1;
	}

	/* Hamburger line */
	.hamburger > div {
		position: relative;
		bottom: 0;
		right: 0;
		width: 50%;
		height: 2px;
		background: #fafafa;
		flex: none;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.4s;
	}

	/* Hamburger top & bottom line */
	.hamburger > div:before,
	.hamburger > div:after {
		content: '';
		position: absolute;
		top: 10px;
		left: 0;
		background: inherit;
		height: 2px;
		width: 100%;
		z-index: 11;
	}
	.menu-wrap .hamburger > div:after {
		top: -10px;
	}

	/* Toggler Animation */
	.toggler:checked + .hamburger > div {
		transform: rotate(135deg);
	}
	.toggler:checked + .hamburger > div:before,
	.toggler:checked + .hamburger > div:after {
		top: 0;
		transform: rotate(90deg);
	}

	/* Rotate on hover when checked */
	.toggler:checked:hover + .hamburger > div {
		transform: rotate(225deg);
	}
	.menu {
		position: fixed;
		top: 0;
		left: 0;
		background: rgb(77, 58, 58, 0.8);
		height: 0vh;
		width: 100vw;
		display: flex;
		align-items: start;
		justify-content: start;
		text-align: center;
		opacity: 0;
		padding-top: 70px;
		padding-left: 25px;
		transition: all var(--menu-speed) ease;
		flex-direction: column;
	}

	/* Show Menu */
	.toggler:checked ~ .menu {
		opacity: 1;
		height: 30vh;
		transition: all var(--menu-speed) ease-in-out;
	}

	@media (max-width: 500px) {
		.menu-wrap .toggler:checked ~ .menu {
			width: 65vw;
		}
	}
</style>
