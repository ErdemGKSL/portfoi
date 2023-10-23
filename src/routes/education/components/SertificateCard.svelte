<script lang="ts">
  export let onClick: () => void = () => {};
  export let name: string = "Sertificate Name";
  export let image: string = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-MJPIUGr6H2c%2FXnnFB3CKr2I%2FAAAAAAAAH0M%2FXZp196mRbNkM1-3fueRhvKsdv8r-2AmMwCLcBGAsYHQ%2Fs1600%2Fpowerful-interview-tip-say-for-example.jpg&f=1&nofb=1&ipt=bcf729e778394eea348e368b32828faa8503541c7ee2a6fe8bbb22b7badc8e34&ipo=images";

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card" on:click={onClick}>
  <div class="top">
    <img src={image} alt={name} />
  </div>
  <div class="bottom">
    <p>{name}</p>
  </div>
</div>

<style lang="scss">
  .card {
    width: 50%;
    height: fit-content;
    border-radius: 1rem;
    border: 2px solid var(--color-secondary);
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & > .top {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    & > .bottom {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-top: 1rem;

      & > p {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--color-secondary);
        text-align: center;
      }
    }


    @media screen and (max-width: 768px) {
      width: 70%;
    }
  }
</style>