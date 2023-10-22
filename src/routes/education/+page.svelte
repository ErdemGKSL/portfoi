<script lang="ts">
	import { data } from "$lib/data";
	import EducationCard from "./components/EducationCard.svelte";
	let locale: (typeof $data)["i18n"]["tr"]["pages"]["education"];
	$: locale = $data.i18n[$data.lang].pages.education;
</script>

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
	}
</style>
