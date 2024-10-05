import { MyComputerComponent } from "../../../types/myComputerComponents"
import { NavbarIcons } from "../../svg/index"

export const myComputerComponent: MyComputerComponent[] = [
    {
        name: "Home",
        icon: NavbarIcons.HomeIcon,
        path: "~"
    },
    {
        name: "Desktop",
        icon: NavbarIcons.DesktopIcon,
        path: "~/Desktop"
    },
    {
        name: "Documents",
        icon: NavbarIcons.DocumentsIcon,
        path: "~/Documents"
    },
    {
        name: "Downloads",
        icon: NavbarIcons.DownloadsIcon,
        path: "~/Downloads"
    },
    {
        name: "Music",
        icon: NavbarIcons.MusicIcon,
        path: "~/Music"
    },
    {
        name: "Pictures",
        icon: NavbarIcons.PicturesIcon,
        path: "~/Pictures"
    },
    {
        name: "Videos",
        icon: NavbarIcons.VideosIcon,
        path: "~/Videos"
    },
    {
        name: "Trash",
        icon: NavbarIcons.TrashIcon,
        path: "~/Trash"
    }
]