import { MyComputerComponent } from "../../../types/myComputerComponents"
import { NavbarIcons } from "../../svg/index"
import { app as application } from "../../../state/state"

export const myComputerComponent = (): MyComputerComponent[] => {
    const dir = application(state => state.home_directiry)
    return [
        {
            name: "Home",
            icon: NavbarIcons.HomeIcon,
            path: dir
        },
        {
            name: "Desktop",
            icon: NavbarIcons.DesktopIcon,
            path: dir + "/Desktop"
        },
        {
            name: "Documents",
            icon: NavbarIcons.DocumentsIcon,
            path: dir + "/Documents"
        },
        {
            name: "Downloads",
            icon: NavbarIcons.DownloadsIcon,
            path: dir + "/Downloads"
        },
        {
            name: "Music",
            icon: NavbarIcons.MusicIcon,
            path: dir + "/Music"
        },
        {
            name: "Pictures",
            icon: NavbarIcons.PicturesIcon,
            path: dir + "/Pictures"
        },
        {
            name: "Videos",
            icon: NavbarIcons.VideosIcon,
            path: dir + "/Videos"
        },
        {
            name: "Trash",
            icon: NavbarIcons.TrashIcon,
            path: dir + "/Trash"
        }
    ]
}