<script lang="ts">
	import { data, type i18nKeys } from "$lib/data";
	import Icon from "$lib/components/Icon.svelte";
	import { onMount, tick } from "svelte";
	import { browser } from "$app/environment";
	import { afterNavigate, goto } from "$app/navigation";
	import { page } from "$app/stores";

	let langs = Object.keys($data.i18n) as i18nKeys[];
	let topNavBar: HTMLDivElement;
	let bottomNavBar: HTMLDivElement;
	let mainContent: HTMLDivElement;
	let languageButton: HTMLDivElement;

	let nowLanguageTransition = false;
	let nowRouterTransition = false;

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
		mainContent.classList.add("animation");

		$page.url && onNavigate($page.url);
	});

	function onNavigate(url?: URL) {
		const buttons = topNavBar.querySelectorAll("button");
		if (!url) return;
		buttons.forEach((button) => {
			if (button.dataset.to === url.pathname) {
				button.classList.add("selected");
			} else {
				button.classList.remove("selected");
			}
		});

		if (url.pathname !== "/") {
			const shape = document?.querySelector(".h-shape");
			shape && shape.classList.add("invisible");
			languageButton && languageButton.classList.remove("primary-button");
		} else {
			const shape = document?.querySelector(".h-shape");
			shape && shape.classList.remove("invisible");
			languageButton && languageButton.classList.add("primary-button");
		}
	}

	afterNavigate((navigation) => {
		onNavigate(navigation.to?.url);
	});

	async function routerTransition(path: string) {
		if (nowRouterTransition) return;
		nowRouterTransition = true;
		mainContent.classList.remove("animation");
		await new Promise((r) => setTimeout(r, 750));
		goto(path);
		mainContent.classList.add("animation");
		await new Promise((r) => setTimeout(r, 750));
		nowRouterTransition = false;
	}

	let popUp = null as HTMLDivElement | null;

	$: {
		if ($data.popUpUrl) {
			popUp?.classList.remove("disabled");
		} else {
			popUp?.classList.add("disabled");
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="pop-up disabled"
	bind:this={popUp}
	on:click={async () => {
		popUp?.classList.add("disabled");
		let url = $data.popUpUrl;
		await new Promise((resolve) => setTimeout(resolve, 750));
		if ($data.popUpUrl === url) $data.popUpUrl = "";
	}}
>
	<img src={$data.popUpUrl} alt="pop-up" />
</div>

<div class="h-shape" />

<div class="main">
	<div class="left" bind:this={mainContent}>
		<slot />
	</div>

	<div class="right">
		<nav>
			<div class="top">
				<div class="container" bind:this={topNavBar}>
					<div class="buttons">
						<button
							title={locale.routes.home}
							data-to="/"
							on:click={() => routerTransition("/")}
						>
							<Icon type="home" />
						</button>
						<button
							title={locale.routes.about}
							data-to="/about"
							on:click={() => routerTransition("/about")}
						>
							<Icon type="about" />
						</button>
						<button
							title={locale.routes.education}
							data-to="/education"
							on:click={() => routerTransition("/education")}
						>
							<Icon type="education" />
						</button>
					</div>
				</div>
			</div>
			<div class="bottom" bind:this={bottomNavBar}>
				{#if $page.url.pathname === "/"}
					<div class="left" bind:this={languageButton}>
						<button
							on:click={async () => {
								if (nowLanguageTransition) return;
								nowLanguageTransition = true;
								mainContent.classList.remove("animation");
								await new Promise((r) => setTimeout(r, 750));
								$data.lang =
									langs[
										(langs.indexOf($data.lang) + 1) %
											langs.length
									];
								mainContent.classList.add("animation");
								await new Promise((r) => setTimeout(r, 750));
								nowLanguageTransition = false;
							}}
						>
							<img src={locale.emoji} alt="Flag" />
						</button>
					</div>
				{/if}
				{#if $page.url.pathname === "/"}
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
				{/if}
			</div>
		</nav>
	</div>
</div>

<style lang="scss">
	.pop-up {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		opacity: 1;
		z-index: 1000;

		&:global(.disabled) {
			opacity: 0;
			pointer-events: none;
		}

		background-color: rgba(0, 0, 0, 0.5);
		transition: opacity 0.75s ease-in-out;

		& > img {
			max-width: 90%;
			max-height: 90%;
			width: 90%;
			object-fit: contain;
		}
	}
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

		&:global(.invisible) {
			opacity: 0;
			// background-color: transparent;
		}
	}

	:global(.main) {
		display: flex;
		width: 100%;
		min-height: 100%;
		background-color: var(--color-primary);

		& > .left {
			width: 100%;
			transform: translateX(-100%);
			transition: transform 0.75s ease-in-out;
			&:global(.animation) {
				transform: translateX(0);
			}
		}

		& > .right {
			position: fixed;
			pointer-events: none;
			width: 100%;
			height: 100%;
			// overflow: hidden;
			top: 0;
			left: 0;

			& > nav {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				height: 100%;
				width: 100%;

				& > .top {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					padding: 30px;
					width: 100%;
					height: 100%;

					@media screen and (max-width: 768px) {
						padding: 2px;
					}

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

							button {
								display: flex;
								align-items: center;
								justify-content: center;
								cursor: pointer;
								pointer-events: all;
								:global(svg) {
									width: 30px;
									color: #fff;
								}

								text-decoration: none;
								font-weight: bold;
								background-color: var(--color-grey-3);
								aspect-ratio: 1/1;

								padding: 15px;
								border-radius: 100%;
								border: none;

								&:global(.selected) {
									background-color: var(--color-secondary);
								}
							}
						}

						transform: translateY(-100vh);
						transition: transform 0.75s ease-in-out;

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
					height: 100px !important;
					width: 100vw !important;
					padding: 30px;
					@media screen and (max-width: 768px) {
						padding: 20px;
					}

					height: 50px;
					gap: 10%;

					& div {
						&:global(.primary-button) {
							background-color: var(--color-primary);
						}

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
							pointer-events: all;

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

					transform: translateY(100px);
					transition: transform 0.75s ease-in-out;

					&:global(.animation) {
						transform: translateY(0px);
					}
				}
			}
		}
	}
</style>
