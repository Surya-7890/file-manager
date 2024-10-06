import { useEffect } from "react"
import { app as application } from "../state/state"
import Navbar from "./components/Navbar"
import Historybar from "./components/Historybar"
import Main from "./components/main/main"

export default function App() {
    const get_contents = application(state => state.get_contents)
    const dir = application(state => state.home_directiry)
    const change_home_directory = application(state => state.change_home_directory)

    // for debugging purposes
    const contents = application(state => state.contents)

    useEffect(() => {
        if (dir === "") {
            change_home_directory()
        }
        get_contents()
    }, [])

    useEffect(() => {
        console.table(contents)
    }, [ contents.length ])


    return (
        <div className="h-screen w-screen bg-[#2E2E2E] text-white">
            <Historybar/>
            <div className="flex h-[90%] w-full">
                <Navbar/>
                <Main/>
            </div>
        </div>
    )
}