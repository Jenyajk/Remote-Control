import { printRectangle, printScreen, printSquare} from "./screen.ts";


interface ICommands {
    [index: string]: CommandHandler;
}

type CommandHandler = (width: number, length: number) => Promise<IRes> | Promise<void>;

export interface IRes {
    data: string;
    type?: string;
}

export async function handleCommand(command: string): Promise<IRes | void> {
    const [cmd, width, length] = command.split(" ");

    const commandHandlers: ICommands = {
        move: async (width: number, length: number) => {
            console.log(`Moving mouse to coordinates: ${width}, ${length}`);
            return { data: "Mouse moved successfully" };
        },
        click: async () => {
            console.log("Performing mouse click");
            return { data: "Mouse click performed" };
        },
        prnt_scrn: async () => {
            const imgData = await printScreen();
            return { data: imgData, type: "image/png" };
        },
        draw_square: async () => {
            const imgData = await printSquare('draw_square',width);
            return { data: imgData, type: "image/png" };
        },
        //draw_circle: async () => {
         //   const imgData = await printCircle('draw_square',width);
         //   return { data: imgData, type: "image/png" };
       // },
        draw_rectangle: async () => {
            const imgData = await printRectangle('draw_square', width, length);
            return { data: imgData, type: "image/png" };
        },
    };


    const commandHandler = commandHandlers[cmd];
    if (commandHandler) {
        try {
            return await commandHandler(Number(cmd), Number(width));
        } catch (error) {
            console.error("Error executing command:", error);
        }
    } else {
        console.log("Unknown command:", cmd);
    }
}
