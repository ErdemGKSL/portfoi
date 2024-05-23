<script lang="ts">
	import { data } from "$lib/data";
	import EducationCard from "./components/EducationCard.svelte";
	import SertificateCard from "./components/SertificateCard.svelte";
	let locale: (typeof $data)["i18n"]["tr"]["pages"]["education"];
	$: locale = $data.i18n[$data.lang].pages.education;

	let popUpUrl: string | null =
		"https://cdn.discordapp.com/attachments/839152912676552796/1165737451126526033/image.png?ex=6547f09a&is=65357b9a&hm=387e1e87562ed8b099195c3cff5ece1e889c5c17fb373774a12e21c01a83c830&";
	let popUp: HTMLDivElement | null = null;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="content">
	<h1>
		{locale.title}
	</h1>
	<h2>
		{locale.my_education_history}
	</h2>
	<div class="educations">
		{#each locale.my_education_history_data as education}
			<EducationCard
				school={education.school}
				year={education.year}
				grade={education.grade}
			/>
		{/each}
	</div>
	<!-- <h2>
		{locale.my_certificates}
	</h2>
	<div class="sertificates">
		{#each locale.my_certificates_data as sertificate}
			<SertificateCard
				name={sertificate.name}
				image={sertificate.image}
				onClick={() => {
					$data.popUpUrl = sertificate.image;
				}}	
			/>	
		{/each}
	</div> -->
</div>

<style lang="scss">

	.content {
		min-height: 100%;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		padding: 2rem 0;

		& > h1 {
			font-size: 5rem;
			font-weight: 700;
			color: var(--color-primary);
			text-shadow: -2px -2px 0 var(--color-secondary),
				2px -2px 0 var(--color-secondary),
				-2px 2px 0 var(--color-secondary),
				2px 2px 0 var(--color-secondary);

			@media screen and (max-width: 768px) {
				font-size: 2.5rem;
			}
		}

		& > h2 {
			font-size: 3rem;
			font-weight: 700;
			color: var(--color-secondary);

			@media screen and (max-width: 768px) {
				font-size: 2.5rem;
			}
		}

		& > .educations {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			gap: 1rem;

			width: 100%;
		}

		& > .sertificates {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			gap: 1rem;

			width: 60%;

			@media screen and (max-width: 768px) {
				width: 90%;
			}
		}
	}
</style>
