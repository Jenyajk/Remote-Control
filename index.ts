import { httpServer } from "./src/http_server/index.ts";
import { WebSocketServer, createWebSocketStream } from "ws";
import { createServer } from "http";
import {handleCommand} from "./src/http_server/command.ts";



const HTTP_PORT = 8181;
const WS_PORT = 8080

console.log(`Start static HTTP server on port http://localhost:${HTTP_PORT}!`);
httpServer.listen(HTTP_PORT);


function createWebSocketServer(port: number) {
    const server = createServer();
    const wss = new WebSocketServer({ server });

    wss.on("connection", (ws) => {
        const wsStream = createWebSocketStream(ws, { decodeStrings: false });

        wsStream.on("data", async (data) => {
            console.log(`received: ${data}`);
            const res = await handleCommand(data.toString());
            const msg = res ? res.data : "";
            wsStream.write(`${data.toString().split(" ")[0]} ${msg}`);
        });

        wsStream.on("close", () => {
            console.log("Connection closed");
        });
    });

    server.listen(port, () => {
        console.log(`WebSocket server started on port http://localhost:${port}`);
    });
}
createWebSocketServer(WS_PORT);

