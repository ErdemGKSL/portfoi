<script lang="ts">
	import Card from "./components/Card.svelte";
	import { data } from "$lib/data";
	let locale: (typeof $data)["i18n"]["tr"]["pages"]["about"];
	$: locale = $data.i18n[$data.lang].pages.about;

</script>

<div class="content">
	<h1>{locale.aboutme}</h1>
	<div class="about">
		<div class="info">
			<h1>{locale.title}</h1>
			<p>{locale.description}</p>
		</div>
		<div class="cards">
			<Card>
				<h1>3+</h1>
				<h2>{locale.year_of_exp}</h2>
			</Card>
			<Card>
				<h1>100%</h1>
				<h2>{locale.systematic_code}</h2>
			</Card>
			<Card>
				<h1>100%</h1>
				<h2>{locale.performance_based}</h2>
			</Card>
			<Card>
				<h1>100%</h1>
				<h2>{locale.quality}</h2>
			</Card>
		</div>
	</div>
	<div class="abilities-wrapper">
		<h1>{locale.abilities}</h1>
		<div class="abilities">
			<div class="ability">
				<div class="name">Node.js</div>
				<div class="bar">
					<div class="percent">100%</div>
					<div class="progress-bar"><span class="progress" id="node" /></div>
				</div>
			</div>

			<div class="ability">
				<div class="name">Typescript (Node.js)</div>
				<div class="bar">
					<div class="percent">100%</div>
					<div class="progress-bar"><span class="progress" id="ts" /></div>
				</div>
			</div>

			<div class="ability">
				<div class="name">Svelte/SvelteKit</div>
				<div class="bar">
					<div class="percent">95%</div>
					<div class="progress-bar"><span class="progress" id="sveltekit" /></div>
				</div>
			</div>

			<div class="ability">
				<div class="name">HTML/CSS</div>
				<div class="bar">
					<div class="percent">90%</div>
					<div class="progress-bar"><span class="progress" id="htmlcss" /></div>
				</div>
			</div>

			<div class="ability">
				<div class="name">Postgresql</div>
				<div class="bar">
					<div class="percent">90%</div>
					<div class="progress-bar"><span class="progress" id="psql"/></div>
				</div>
			</div>

			<div class="ability">
				<div class="name">{locale.other} Sql</div>
				<div class="bar">
					<div class="percent">75%</div>
					<div class="progress-bar"><span class="progress" id="sql"/></div>
				</div>
			</div>

			<div class="ability">
				<div class="name">Kotlin/Java</div>
				<div class="bar">
					<div class="percent">60%</div>
					<div class="progress-bar"><span class="progress" id="java" /></div>
				</div>
			</div>

			<div class="ability">
				<div class="name">Rust</div>
				<div class="bar">
					<div class="percent">20%</div>
					<div class="progress-bar"><span class="progress" id="rust" /></div>
				</div>
			</div>

		</div>
	</div>
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		min-height: 100%;

		& > h1 {
			font-size: 6rem;
			font-weight: 700;
			color: var(--color-primary);
			text-shadow: -2px -2px 0 var(--color-secondary),
				2px -2px 0 var(--color-secondary),
				-2px 2px 0 var(--color-secondary),
				2px 2px 0 var(--color-secondary);

			@media screen and (max-width: 768px) {
				font-size: 3rem;
			}
		}
		& > .about {
			min-height: 600px;
			width: 80%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: flex-start;
			flex-wrap: wrap;
			padding: 2rem;
      gap: 0rem;

			& > .info {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				min-width: 300px;
				width: 50%;
				height: 100%;
				padding: 2rem;

				@media screen and (max-width: 1000px) {
					padding: 0.1rem;
					padding-bottom: 3rem;
          width: 100%;
				}

				& > h1 {
					font-size: 4.5rem;
					font-weight: 700;
					min-width: 250px;
					color: var(--color-secondary);
					text-shadow: -2px -2px 0 var(--color-primary),
						2px -2px 0 var(--color-primary),
						-2px 2px 0 var(--color-primary),
						2px 2px 0 var(--color-primary);
					text-align: center;

					@media screen and (max-width: 768px) {
						font-size: 2.5rem;
					}
				}

				& > p {
					font-size: 2rem;
					font-weight: 400;
					color: var(--color-text);
					margin-top: 2rem;
					min-width: 250px;
					width: 100%;
					max-width: 600px;
					line-height: 1.5;
					text-align: left;

					@media screen and (max-width: 768px) {
						font-size: 1.3rem;
						min-width: 150px;
						width: 80vw;
					}
				}
			}

			& > .cards {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				min-width: 300px;
				width: 50%;
				height: 100%;
				padding: 2rem;
				gap: 2rem;

        @media screen and (max-width: 1000px) {
          padding: 0.1rem;
          padding-bottom: 3rem;
          width: 100%;
        }
			}
		}

		& > .abilities-wrapper {
			min-height: 600px;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			& > h1 {
				font-size: 4.5rem;
				font-weight: 700;
				color: var(--color-primary);
				text-shadow: -2px -2px 0 var(--color-secondary),
					2px -2px 0 var(--color-secondary),
					-2px 2px 0 var(--color-secondary),
					2px 2px 0 var(--color-secondary);
				margin-top: 2rem;

				@media screen and (max-width: 768px) {
					font-size: 2.5rem;
				}
			}

			& > .abilities {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				min-width: 400px;
				width: 80%;
				& > .ability {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 50%;
					min-width: 400px;
					height: 100%;
					padding: 2rem;
					gap: 0.2rem;

					& > .name {
						font-size: 2rem;
						font-weight: 700;
						color: var(--color-text);
						min-width: 300px;
						width: 100%;
						text-align: left;
						height: 10%;

						@media screen and (max-width: 768px) {
							font-size: 1.5rem;
							min-width: 150px;
							width: 80vw;
						}
					}

					& > .bar {
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						width: 100%;
						height: 50%;
						padding: 0rem;
						gap: 2rem;

						& > .percent {
							font-size: 2rem;
							font-weight: 700;
							color: var(--color-text);
							min-width: 60px;
							width: 10%;
							text-align: left;

							@media screen and (max-width: 768px) {
								font-size: 1.5rem;
								min-width: 30px;
							}
						}

						& > .progress-bar {
							width: 80%;
							min-width: 100px;
							height: 20px;
							background-color: var(--color-grey-2);
							border-radius: 10px;
							position: relative;
							outline: 2px solid var(--color-primary);

							& > .progress {
								position: absolute;
								top: 0;
								left: 0;
								height: 100%;
								width: 0%;
								background-color: var(--color-secondary);
								border-radius: 10px;

                &#node {
                  width: 100%;
                }

                &#ts {
                  width: 100%;
                }

                &#psql {
                  width: 90%;
                }

								&#sveltekit {
									width: 95%;
								}

								&#htmlcss {
									width: 90%;
								}

								&#sql {
                  width: 75%;
                }

                &#java {
                  width: 60%;
                }

                &#rust {
                  width: 20%;
                }

							}
						}
					}
				}
			}
		}
	}
</style>
