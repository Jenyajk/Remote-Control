
import {mouse, left, right, up, down, Point} from "@nut-tree/nut-js";
import Jimp from "jimp";


export async function mousePosition(command: string): Promise<string> {
    const pos = await mouse.getPosition();
    return `${pos.x}px,${pos.y}px`;
}


export async function mouseUp(command: string, distance: string): Promise<string> {
    await mouse.move(up(Number(distance)));

    return `Mouse moved up by ${distance} pixels`;

}

export async function mouseDown(command: string, distance: string): Promise<string> {
    await mouse.move(down(Number(distance)));

    return `Mouse moved down by ${distance} pixels`;
}

export async function mouseLeft(command: string, distance: string): Promise<string> {
    await mouse.move(left(Number(distance)));

    return `Mouse moved left by ${distance} pixels`;
}

export async function mouseRight(command: string, distance: string): Promise<string> {
    await mouse.move(right(Number(distance)));

    return `Mouse moved right by ${distance} pixels`;
}
