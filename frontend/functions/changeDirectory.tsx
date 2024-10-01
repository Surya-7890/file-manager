import { ChangeDirectory } from "../wailsjs/go/app/Application"

export const setContents = async (location: string): Promise<any> =>  {
    try {
        /* 
            the respose will be a json string
            parse the json and return it
        */
        const response = await ChangeDirectory(location)
        console.log(response)
        const contents = JSON.parse(response)
        console.log(contents)
        return contents
    } catch (error) {
        console.log(error)
        return error
    }
}