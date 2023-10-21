<script lang="ts">
	import { data, type i18nKeys } from "$lib/data";

	import Icon from "$lib/components/Icon.svelte";
	import { onMount, tick } from "svelte";
	import { browser } from "$app/environment";

	let langs = Object.keys($data.i18n) as i18nKeys[];
	let topNavBar: HTMLDivElement;
	let bottomNavBar: HTMLDivElement;
	let page: HTMLDivElement;

	let languageTransition = false;

	$: locale = $data.i18n[$data.lang];

	$: {
		if (browser) {
			document.body.classList.remove("dark-mode", "light-mode");
			document.body.classList.add(`${$data.theme}-mode`);
			localStorage.setItem("theme", $data.theme);
		}
	}

	onMount(async () => {
		$data.theme =
			(localStorage.getItem("theme") as "dark" | "light") ||
			$data.theme ||
			"light";

		await tick();

		topNavBar.classList.add("animation");
		bottomNavBar.classList.add("animation");
		page.classList.add("animation");
	});

	function routerTransition() {
		topNavBar.classList.remove("animation");
		// bottomNavBar.classList.remove("animation");
		// page.classList.remove("animation");

		setTimeout(() => {
			topNavBar.classList.add("animation");
			// bottomNavBar.classList.add("animation");
			// page.classList.add("animation");
		}, 750);
	}
</script>

<div class="h-shape" />
<div class="main">
	<div class="left" bind:this={page}>
		<slot />
	</div>

	<div class="right">
		<nav>
			<div class="top">
				<div class="container" bind:this={topNavBar}>
					<div class="buttons">
						<a href="/" title={locale.routes.home} on:click={routerTransition}>
							<Icon type="home" />
						</a>
						<a href="/about" title={locale.routes.about} on:click={routerTransition}>
							<Icon type="about" />
						</a>
					</div>
				</div>
			</div>
			<div class="bottom" bind:this={bottomNavBar}>
				<div class="left">
					<button
						on:click={async () => {
							if (languageTransition) return;
							languageTransition = true;
							page.classList.remove("animation");
							await new Promise((r) => setTimeout(r, 1500));
							$data.lang =
								langs[
									(langs.indexOf($data.lang) + 1) %
										langs.length
								];
							page.classList.add("animation");
							await new Promise((r) => setTimeout(r, 1500));
							languageTransition = false;
						}}
					>
						<img src={locale.emoji} alt="Flag" />
					</button>
				</div>
				<div class="right">
					<button
						on:click={() => {
							$data.theme =
								$data.theme === "light" ? "dark" : "light";
						}}
					>
						<Icon type="style" />
					</button>
				</div>
			</div>
		</nav>
	</div>
</div>

<style lang="scss">
	.h-shape {
		transition: all 0.4s ease-in-out;
		width: 65%;
		height: 100%;
		background-color: var(--color-secondary);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 0;
		clip-path: polygon(0 0, 46% 0, 79% 100%, 0% 100%);
	}

	:global(.main) {
		display: flex;
		width: 100%;
		min-height: 100%;
		background-color: var(--color-primary);

		& > .left {
			width: 100%;
			transform: translateX(-100%);
			transition: transform 1.5s ease-in-out;
			&:global(.animation) {
				transform: translateX(0);
			}
		}

		& > .right {
			position: fixed;
			width: 100%;
			height: 100%;
			// overflow: hidden;
			right: 0;
			bottom: 0;

			& > nav {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				height: 100%;
				width: 100%;

				// overflow: hidden;

				& > .top {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					padding: 30px;
					width: 100%;
					height: calc(100% - 150px);
					& > .container {
						border-radius: 10px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: flex-end;

						width: 100%;
						& > .buttons {
							display: flex;
							flex-direction: column;
							height: 100%;
							justify-content: center;
							align-items: center;
							padding: 5px;
							gap: 20px;

							a {
								display: flex;
								align-items: center;
								justify-content: center;
								:global(svg) {
									width: 30px;
									color: #fff;
								}

								text-decoration: none;
								font-weight: bold;
								background-color: var(--color-secondary);
								aspect-ratio: 1/1;

								padding: 15px;
								border-radius: 100%;
							}
						}

						transform: translateY(-100vh);
						transition: transform 1.5s ease-in-out;

						&:global(.animation) {
							transform: translateY(0px);
						}
					}
				}

				& > .bottom {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: flex-end;
					width: calc(100% - 30px);
					padding: 30px;
					@media screen and (max-width: 768px) {
						width: calc(100% - 10px);
						padding: 10px;
					}

					height: 50px;

					gap: 10%;

					& div {
						display: flex;
						align-items: center;
						justify-content: center;

						padding: 10px;
						background-color: var(--color-secondary);
						border-radius: 10px;
						aspect-ratio: 1/1;
						width: 70px;
						@media screen and (max-width: 768px) {
							width: 40px;
						}

						& > button {
							border: none;
							border-radius: var(--br-sm-2);
							cursor: pointer;
							width: 100%;
							background: transparent;

							:global(svg) {
								width: 40px;
								@media screen and (max-width: 768px) {
									height: 20px;
									width: 20px;
								}
								color: #fff;
							}

							img {
								width: 40px;
								@media screen and (max-width: 768px) {
									height: 20px;
									width: 20px;
								}
							}
						}
					}

					& > .left {
						background-color: var(--color-primary);
					}

					transform: translateY(100px);
					transition: transform 1.5s ease-in-out;

					&:global(.animation) {
						transform: translateY(0px);
					}
				}
			}
		}
	}
</style>
