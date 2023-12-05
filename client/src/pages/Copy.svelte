<script lang="ts">
    import type { Socket } from "socket.io-client"
    import { onMount } from "svelte"
    import { makeSocket } from "../lib/ip"
    import Copied from "../lib/Copied.svelte"

    let socket: Socket
    let texts: string[] = []
    let currentText: string | undefined = undefined
    $: {
        if (currentText) {
            socket.emit("@copy", currentText)
            texts = [...texts, currentText]
        }
    }

    async function readText() {
        try {
            return await navigator.clipboard.readText()
        } catch {
            return undefined
        }
    }

    async function recursion() {
        const read = await readText()
        if (read === undefined) {
            await wait()
            return recursion()
        }

        if (currentText !== read) {
            currentText = read.trim()
        }

        await wait()
        return recursion()
    }

    async function wait(ms: number = 300) {
        return new Promise((r) => setTimeout(r, ms))
    }

    onMount(async () => {
        socket = makeSocket()

        if (document.hasFocus()) currentText = await readText()
        recursion()
    })
</script>

<div class="min-h-[100svh] container mx-auto p-4 pt-12">
    <div class="mockup-browser border h-full w-full">
        <div class="mockup-browser-toolbar gap-4">
            <h1 class="font-semibold text-lg">Mr. Clippy</h1>
            <a href="/" class="font-semibold flex-1 text-right text-lg">Home</a>
        </div>
        <div class="p-5 border-t">
            <div class="overflow-y-auto no-scrollbar h-[76svh] space-y-6">
                {#each texts as text}
                    <Copied {text} />
                {/each}
            </div>
        </div>
    </div>
</div>
