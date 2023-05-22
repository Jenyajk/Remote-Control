import { mouse, Region, screen} from "@nut-tree/nut-js";
import Jimp from "jimp";


export async function printScreen(): Promise<string> {
    const location = await mouse.getPosition();
    const img = await screen.grabRegion(new Region(location.x, location.y, 200, 200));
    const newData = await new Jimp(await img.toRGB()).getBase64Async(Jimp.MIME_PNG);
    return newData.replace('data:image/png;base64,', '');
}

