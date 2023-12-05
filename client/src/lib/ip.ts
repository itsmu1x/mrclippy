import { io } from "socket.io-client"

export const SOCKET_IP = "http://192.168.0.162:5000"

export const makeSocket = () => {
    return io(SOCKET_IP)
}
