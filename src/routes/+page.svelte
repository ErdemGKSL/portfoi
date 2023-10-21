<script lang="ts">
	import { tick } from "svelte";
	import { data } from "$lib/data";
	let locale: (typeof $data)["i18n"]["tr"]["pages"]["landing"];
	$: locale = $data.i18n[$data.lang].pages.landing;
</script>

<div class="info">
  <div class="left">
		<img
			src="https://cdn.discordapp.com/attachments/685842268606693376/1165288691405705306/9dcce394.png?ex=65464eaa&is=6533d9aa&hm=e41e6c1021815827fbdac5775dcd0b1256fba888ad0623ea75602e9ef25dc79f&"
			alt="erdem"
		/>
	</div>
	<div class="right">
		<h1>{locale.title}</h1>
		<h2>{locale.subtitle}</h2>
    <h6>{locale.whoami}</h6>
	</div>
</div>

<style lang="scss">
	.info {
		display: flex;
		justify-content: center;
    flex-wrap: wrap;
		align-items: center;
		width: 100%;
		min-height: 100%;

		& > .left {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 600px;
			padding: 0 2rem;

      @media screen and (max-width: 768px) {
        width: 400px;
      }

			img {
				width: 100%;
				object-fit: contain;
			}
		}

    & > .right {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
      // flex-wrap: wrap;
			width: auto;
			height: 100%;
			padding: 0 2rem;

			h1 {
				font-size: 3rem;
				font-weight: 700;
        min-width: 300px;
				color: var(--color-text);
			}

			h2 {
				font-size: 1.5rem;
				font-weight: 400;
        min-width: 300px;
				color: var(--color-text);
			}

      h6 {
        max-width: 600px;
      }
		}
	}
</style>
