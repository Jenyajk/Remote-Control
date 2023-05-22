import {Button, down, left, mouse, Point, Region, right, screen, straightTo, up} from "@nut-tree/nut-js";
import Jimp from "jimp";


export async function printScreen(): Promise<string> {
    const location = await mouse.getPosition();
    const img = await screen.grabRegion(new Region(location.x, location.y, 200, 200));
    const newData = await new Jimp(await img.toRGB()).getBase64Async(Jimp.MIME_PNG);
    return newData.replace('data:image/png;base64,', '');
}


export async function printSquare(command: string, width: string): Promise<string> {
    await mouse.releaseButton(Button.LEFT);
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(Number(width)));
    await mouse.releaseButton(Button.LEFT);
    await mouse.pressButton(Button.LEFT);
    await mouse.move(down(Number(width)));
    await mouse.releaseButton(Button.LEFT);
    await mouse.pressButton(Button.LEFT);
    await mouse.move(left(Number(width)));
    await mouse.releaseButton(Button.LEFT);
    await mouse.pressButton(Button.LEFT);
    await mouse.move(up(Number(width)));
    await mouse.releaseButton(Button.LEFT);
    return command;
}

// export async function printCircle(command: string, radius: string): Promise<string>{
//     const {x,y} = await mouse.getPosition()
//     await mouse.releaseButton(Button.LEFT)
//     await mouse.pressButton(Button.LEFT)
//     for (let i=0; i<=360; i++){
//         const radians = (Math.PI/180) * i
//         const cx = radius * Math.cos(radians) + x - radius
//         const cy = radius * Math.sin(radians) + y
//         await mouse.move(straightTo(new Point(cx, cy)))
//     }
//     await mouse.releaseButton(Button.LEFT)
//     return command
// }
export async function printRectangle(command: string, x: string, y: string){
    await mouse.releaseButton(Button.LEFT)
    await mouse.pressButton(Button.LEFT)
    await mouse.move(right(Number(x)))
    await mouse.releaseButton(Button.LEFT)
    await mouse.pressButton(Button.LEFT)
    await mouse.move(down(Number(y)))
    await mouse.releaseButton(Button.LEFT)
    await mouse.pressButton(Button.LEFT)
    await mouse.move(left(Number(x)))
    await mouse.releaseButton(Button.LEFT)
    await mouse.pressButton(Button.LEFT)
    await mouse.move(up(Number(y)))
    await mouse.releaseButton(Button.LEFT)
    return command
}


