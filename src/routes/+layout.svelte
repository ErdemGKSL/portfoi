<script lang="ts">
	import { data, type i18nKeys } from "$lib/data";

	import Icon from "$lib/components/Icon.svelte";
	import { onMount, tick } from "svelte";
	import { browser } from "$app/environment";

	let langs = Object.keys($data.i18n) as i18nKeys[];
	let topNavBar: HTMLDivElement;
	let bottomNavBar: HTMLDivElement;
	let page: HTMLDivElement;

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
</script>

<div class="main">
	<div class="left" bind:this={page}>
		<slot />
	</div>

	<div class="right">
		<nav>
			<div class="top" bind:this={topNavBar}>
				<div class="container">
					<div class="buttons">
						<a href="/" title={locale.routes.home}>
							<Icon type="home" />
						</a>
						<a href="/about?name=sosis">{locale.routes.about}</a>
					</div>
				</div>
			</div>
			<div class="bottom" bind:this={bottomNavBar}>
				<div class="left">
					<button
						on:click={() => {
							$data.lang =
								langs[
									(langs.indexOf($data.lang) + 1) %
										langs.length
								];
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
	:global(.main) {
		display: flex;
		width: 100%;
		min-height: 100%;
		background-color: var(--color-primary);

		& > .left {
			width: 100%;
			transform: translateX(-100%);
			transition: transform 0.5s ease-in-out;
			&:global(.animation) {
				transform: translateX(0);
			}
		}

		& > .right {
			position: absolute;
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
					justify-content: flex-end;
					align-items: flex-end;
					width: 100%;
					height: 100%;
					& > .container {
						border-radius: 10px;
						display: flex;
						flex-direction: column;
						justify-content: flex-end;
						align-items: flex-end;

						width: 100%;
						& > .buttons {
							display: flex;
							flex-direction: column;
							// width: 100%;
							height: 100%;
							justify-content: center;
							align-items: center;
							padding: 5px;
							gap: 20px;
							& > a {
							:global(svg) {
								width: 30px;
								color: #fff;
							}

							text-decoration: none;
							font-weight: bold;
							background-color: var(--color-secondary);

							padding: 15px;
							border-radius: 100%;
						}
						}

						transform: translateY(-200px);
						transition: transform 0.5s ease-in-out;

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
					width: 100%;
					height: 50px;

					gap: 10%;

					& div {
						display: flex;
						align-items: center;
						justify-content: center;

						padding: 10px;
						background-color: var(--color-secondary);
						border-radius: 10px;
						width: 70px;
						aspect-ratio: 1/1;

						& > button {
							border: none;
							border-radius: var(--br-sm-2);
							cursor: pointer;
							width: 100%;
							background: transparent;

							:global(svg) {
								width: 50px;
								color: #fff;
							}

							img {
								width: 50px;
							}
						}
					}

					transform: translateY(100px);
					transition: transform 0.5s ease-in-out;

					&:global(.animation) {
						transform: translateY(0px);
					}
				}
			}
		}
	}
</style>
