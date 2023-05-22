


interface ICommands {
    [index: string]: CommandHandler;
}

type CommandHandler = (width: number, length: number) => Promise<IRes> | Promise<void>;

export interface IRes {
    data: string;
    type?: string;
}

export async function handleCommand(command: string): Promise<IRes | void> {
    const commandHandlers: ICommands = {
        move: async (width:number, length:number) => {
            console.log(`Moving mouse to coordinates: ${width}, ${length}`);
            return { data: "Mouse moved successfully" };
        },
        click: async () => {

            console.log("Performing mouse click");
            return { data: "Mouse click performed" };
        },
    };

    const [cmd, ...args] = command.split(" ");
    const commandHandler = commandHandlers[cmd];

    if (commandHandler) {
        try {
            return await commandHandler(...(args.map(Number) as [number, number]));
        } catch (error) {
            console.error("Error executing command:", error);

        }
    } else {
        console.log("Unknown command:", cmd);

    }
}
