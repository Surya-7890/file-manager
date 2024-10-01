import { create } from "zustand"
import { setContents } from "../functions/changeDirectory"

/*  
    interface contains the total state of the application 
*/
interface Application {
    
    /* 
        the current working directory of the user 
        initially at the root directory
    */
    current_location: string

    /* 
        used to change the pwd 
        calls go bound method 
        returns an array of files and folders present at pwd
    */
    change_location: (path: string) => Promise<void>


    /*
        this array contains the files and folders at the pwd
        updated when change_location function is called
        @todo ~ need to define a type for this
    */
    contents: any
} 

export const app = create<Application>((set) =>({
    current_location: "~",
    contents: [],
    change_location: async (path: string) => {
        console.log("1")
        const contents = await setContents(path)
        console.log(contents)
        console.log("2")
        set((state) => ({
            ...state,
            current_location: path,
            contents: contents
        }))
    }
})) 