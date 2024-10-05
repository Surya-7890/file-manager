import { app as application } from "../../../state/state"

export default function Main() {
    const contents = application(state => state.contents)
    return (
        <div className="h-full w-[90%]">
            <div className="h-[5%] w-full bg-white"></div>
            <div className="h-[90%] w-full">
                <div className="h-fit grid grid-cols-10 gap-y-10 pt-5 px-5">
                {
                    contents.map(item => (
                        <div className="h-[100px] aspect-square" key={item.name}>
                            <img src="src/assets/images/folder_icon.png" className="cursor-pointer" />
                            <div className="text-center">{item.name}</div> 
                        </div>
                    ))  
                }
                </div>
            </div>
            <div className="h-[5%] w-full bg-white"></div>
        </div>
    )
}