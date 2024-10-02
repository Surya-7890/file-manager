export enum FILE_TYPE {
    DIRECTORY = "Directory",
    FILE = "File",
    SYMBOLIC_LINK = "Symbolic Link",
    BLOCK_DEVICE = "Block device",
    CHARACTER_DEVICE = "Character device",
    SOCKET = "Socket",
    NAMED_PIPE = "Name Pipe"
}

export type FILE = {
    permissions: string
    links: number
    user: string
    group: string
    size: number
    date: string
    time: string
    name: string
    type:  string
}