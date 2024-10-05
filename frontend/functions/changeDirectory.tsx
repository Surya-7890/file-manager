import { FILE } from "../types/file"
import { ChangeDirectory } from "../wailsjs/go/app/Application"

export const setContents = async (location: string): Promise<FILE[]> =>  {
    try {
        /* 
            the respose will be a json string
            parse the json and return it
        */
        const response = await ChangeDirectory(location)
        const contents = JSON.parse(response)
        return contents
    } catch (error) {
        console.log(error)
        return []
    }
}