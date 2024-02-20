import { defineConfig, type ViteDevServer } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { Server } from "socket.io"

const socketServer = {
    name: "socketServer",
    configureServer(server: ViteDevServer) {
        if (!server.httpServer) return

        const io = new Server(server.httpServer)

        io.on("connection", (socket) => {
            socket.on("@copy", (text: string) => {
                if (!text) return
                io.emit("@copy", text.trim())
            })
        })
    },
}

export default defineConfig({
    plugins: [svelte(), socketServer],
})
