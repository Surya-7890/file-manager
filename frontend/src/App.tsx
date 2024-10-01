import { useEffect } from "react"
import { app as application } from "../state/state"

export default function App() {
    const app = application(state => state)

    useEffect(() => {
        app.change_location(app.current_location)
    }, [])


    return (
        <div className="h-screen w-screen bg-gray-950">
        </div>
    )
}