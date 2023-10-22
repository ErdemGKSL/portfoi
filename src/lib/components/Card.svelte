<script lang="ts">
</script>

<div class="card">
  <slot>
    <h1>50+</h1>
    <h2>Projects</h2>
  </slot>
</div>

<style lang="scss">
	.card {
		width: 300px;
		height: 150px;
		background-color: transparent;
		border: 2px solid var(--color-secondary);
		outline: 2px solid var(--color-primary);
		outline-offset: 5px;
		margin-bottom: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0,0.5);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease-in-out;

    & > :global(h1) {
      font-size: 3rem;
      font-weight: 700;
      width: 80%;
      height: 50%;
      color: var(--color-secondary);
      text-shadow: -1px -1px 0 var(--color-primary), 1px -1px 0 var(--color-primary), -1px 1px 0 var(--color-primary), 1px 1px 0 var(--color-primary);
    }

    & > :global(h2) {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text);
      width: 100%;
      height: 50%;
      text-align: center;
    }

    & > :global(*) {
      margin: 0;
      padding: 0;
    }

    &:global(:hover) {
      transform: scale(1.2);
    }

    @media screen and (max-width: 1000px) {
      width: 45%;
      min-width: 200px;
    }
	}
</style>
