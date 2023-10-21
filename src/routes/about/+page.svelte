<script lang="ts">
  import { page } from "$app/stores"
</script>

Selam {$page.url.searchParams.get("name") || "anan"}!