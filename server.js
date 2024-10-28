const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 })

server.on("connection", (ws) => {
    console.log("Connected to the server");
    
    ws.on("message", (message => {
        console.log("Cliente: ", message)
    }))
})
