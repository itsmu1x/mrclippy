import { io } from "socket.io-client"

export const makeSocket = () => {
    return io()
}
