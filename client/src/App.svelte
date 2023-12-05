<script>
    import Copy from "./pages/Copy.svelte"
    import Main from "./pages/Main.svelte"

    const url = window.location.pathname
</script>

{#if url.includes("copy")}
    <Copy />
{:else}
    <Main />
{/if}
