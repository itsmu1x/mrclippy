import { createServer } from "http"
import { Server } from "socket.io"
import os from "os"
import qrcode from "qrcode-terminal"

const httpServer = createServer()
const io = new Server(httpServer as any, {
    cors: {
        origin: "*",
    },
})

io.on("connection", (socket) => {
    socket.on("@copy", (text: string) => {
        io.emit("@copy", text)
        console.log("@copy", text)
    })
})

httpServer.listen(5000, localIP(), () => {
    qrcode.generate(`http://${localIP()}:5173/`, { small: true })
})

function localIP() {
    var interfaces = os.networkInterfaces()
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            // @ts-ignore
            var address = interfaces[k][k2]
            if (address.family === "IPv4" && !address.internal) {
                return address.address
            }
        }
    }
    return null
}
