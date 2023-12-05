<script lang="ts">
    import { onMount } from "svelte"
    import type { Socket } from "socket.io-client"
    import { makeSocket } from "../lib/ip"
    import Chat from "../lib/Chat.svelte"

    let texts: string[] = []
    let socket: Socket

    onMount(() => {
        socket = makeSocket()

        socket.on("@copy", async (text: string) => {
            texts = [text, ...texts]
        })
    })
</script>

<div class="min-h-[100svh] container mx-auto p-4 pt-12">
    <div class="mockup-browser border h-full w-full">
        <div class="mockup-browser-toolbar gap-4">
            <h1 class="font-semibold text-lg">Mr. Clippy</h1>
            <a href="/copy" class="font-semibold flex-1 text-right text-lg"
                >Copy</a
            >
        </div>
        <div class="p-5 border-t">
            <div class="overflow-y-auto no-scrollbar h-[76svh] space-y-6">
                {#each texts as text}
                    <Chat {text} />
                {/each}
            </div>
        </div>
    </div>
</div>
