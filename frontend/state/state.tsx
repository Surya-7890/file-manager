import { create } from "zustand"
import { setContents } from "../functions/changeDirectory"
import { FILE } from "../types/file"

/*  
    interface contains the total state of the application 
*/
interface Application {
    /* 
        the current working directory of the user 
        initially at the root directory
    */
    current_location: string[]

    show_all: boolean

    toggle_hidden: () => void

    go_back: (count: number) => Promise<void>

    go_forward: (new_path: string) => void

    replace_location: (path: string) => void

    get_contents: () => Promise<void>

    /*
        this array contains the files and folders at the pwd
        updated when change_location function is called
        @todo ~ need to define a type for this
    */
        contents: FILE[]
} 

export const app = create<Application>((set, get) =>({
    current_location: [ "/" ],
    contents: [],
    show_all: false,
    toggle_hidden: () => {
        set((state => ({
            ...state, 
            show_all: !state.show_all
        })))
    },
    go_back: async (count: number) => {
        const new_path = get().current_location.slice(0, -count) || [ "/" ]
        set(state => ({
            ...state,
            current_location: new_path.length > 0 ? new_path : [ "/" ]
        }))
        await get().get_contents()
    },
    go_forward: (new_path: string) => {
        set((state) => ({
            ...state,
            current_location: [ ...state.current_location, new_path ]
        }))
    },
    replace_location: (new_path: string) => {
        set((state) => ({
            ...state,
            current_location: [ ...new_path.split("/") ]
        }))
    },
    get_contents: async () => {
        const path_string = get().current_location.join("/")
        let result = await setContents(path_string)

        result = result.map(entry => {
            if (entry.permissions.at(0) === "l") {
                return {
                    ...entry, 
                    name: entry.name.split("->")[0]
                }
            }
            return entry
        })

        if (!get().show_all) {
            result = result.filter(item => (item.name.length > 0 && item.name.at(0) !== "."))
        }   

        set(state => ({
            ...state,
            contents: result
        }))
    }
})) 