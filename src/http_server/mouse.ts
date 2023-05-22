import * as WebSocket from 'ws';
import {mouse, left, right, up, down, Point} from "@nut-tree/nut-js";
import {httpServer} from "./index";


export async function moveMouseUp(y: number): Promise<void> {
    const currentPosition = await mouse.getPosition();
    const points: Point[] = [{ x: currentPosition.x, y: currentPosition.y - y }];
    await mouse.move(points);
}
function moveMouseDown(y: number) {

}

function moveMouseLeft(x: number) {

}

function moveMouseRight(x: number) {

}
