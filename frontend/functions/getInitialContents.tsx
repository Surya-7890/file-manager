import { GetInitialData } from "../wailsjs/go/app/Application"

export const GetInitialContents = async (): Promise<string> => {
    try {
        const response = await GetInitialData()
        return response
    } catch (err) {
        console.log(err)
        return "error"
    }
}