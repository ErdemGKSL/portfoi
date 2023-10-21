<script lang="ts">
	import { data, type i18nKeys } from "$lib/data";

	import Icon from "$lib/components/Icon.svelte";
	import { onMount, tick } from "svelte";
	import { browser } from "$app/environment";

	let langs = Object.keys($data.i18n) as i18nKeys[];
	let topNavBar: HTMLDivElement;
	let bottomNavBar: HTMLDivElement;

	$: locale = $data.i18n[$data.lang];

	$: {
		if (browser) {
			document.body.classList.remove("dark-mode", "light-mode");
			document.body.classList.add(`${$data.theme}-mode`);
      localStorage.setItem("theme", $data.theme);
		}
	}

	onMount(async () => {
		$data.theme = (localStorage.getItem("theme") as "dark" | "light") || $data.theme || "light";

		await tick();

		topNavBar.classList.add("animation");
		bottomNavBar.classList.add("animation");
	});
</script>

<div class="main">
	<div class="left">
		<slot />
	</div>

	<div class="right">
		<nav>
			<div class="top" bind:this={topNavBar}>
				<a href="/" title={locale.routes.home}>
					<Icon type="home" />
				</a>
				<a href="/about?name=sosis">{locale.routes.about}</a>
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
	.main {
		display: flex;
		flex-direction: row;
		height: 100%;
		background-color: var(--color-primary);

		& > .left {
			flex: 1;
		}

		& > .right {
			height: 100%;
			& > nav {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				height: 100%;
				width: 200px;

				overflow: hidden;

				& > .top {
					border-radius: 10px;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: center;

					width: 100%;

					padding-top: 30px;
					padding-bottom: 30px;
					margin-top: 10px;

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

					transform: translateY(-200px);
					transition: transform 0.5s ease-in-out;

					&:global(.animation) {
						transform: translateY(0px);
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
						width: 40%;
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
