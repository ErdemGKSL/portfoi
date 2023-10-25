<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";

  export let school: string = "School Name";
  export let year: string = "0000 - 9999";
  export let grade: string = "Grade";

</script>

<div class="card">
  <div class="top">
    <Icon type="education"/>
    <h3>{school}</h3>
  </div>
  <div class="bottom">
    <p>{grade}</p>
    <p>{year}</p>
  </div>
</div>

<style lang="scss">

  .card {

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 1rem 2rem;
    min-width: 350px;
    width: 40%;
    // background-color: brown;
    
    & > .top {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: auto;
      min-width: 250px;
      padding: 0.2rem 2rem;
      border-radius: 1rem;
      border: 2px solid var(--color-secondary);

      & > :global(svg) {
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
        color: var(--color-secondary);
      }

      & > h3 {
        white-space: nowrap;
        font-size: 1.2rem;

        @media screen and (max-width: 768px) {
          font-size: 0.9rem;
        }
      }
    }

    & > .bottom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: auto;
      min-width: 150px;
      padding: 0.2rem 1rem;
      border-radius: 0 0 1rem 1rem;
      border: 2px solid var(--color-secondary);
      border-top: none;

      & > p {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-secondary);
        white-space: nowrap;
      }
    }
  }

</style>