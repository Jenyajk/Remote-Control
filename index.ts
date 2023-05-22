import { httpServer } from "./src/http_server/index.ts";
import { WebSocketServer } from "ws";
import { moveMouseUp } from "./src/http_server/mouse.ts";

const HTTP_PORT = 8181;



const wss = new WebSocketServer({ server: httpServer });

wss.on('listening', () => {
    console.log(`WebSocket server is running on port ${HTTP_PORT}`);
});

wss.on('connection', (ws) => {
    console.log('Connection');

    ws.on('message', (message) => {
        console.log('Message received from client:', message);
        ws.send('The message is received!');
    });

    ws.on('close', () => {
        console.log('Connection closed');
    });
});

console.log(`Start static HTTP server on port http://localhost:${HTTP_PORT}!`);
httpServer.listen(HTTP_PORT);


process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {
    const command = input.toString().trim();

    if (command.startsWith("mouse_up")) {
        const match = command.match(/mouse_up\s+(\d+)\s+px/);
        if (match) {
            const y = parseInt(match[1]);
            moveMouseUp(y);
        } else {
            console.log("Неверный формат команды mouse_up");
        }
    } else if (command === "mouse_down") {

    } else if (command === "mouse_left") {

    } else if (command === "mouse_right") {

    } else {
        console.log("Unknown command");
    }
});
