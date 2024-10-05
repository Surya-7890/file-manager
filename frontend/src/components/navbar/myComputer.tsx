import { useState } from "react";
import { ArrowDown } from "../../svg/navbar/arrowDown";
import MyComputerComponents from "./myComputerComponent";
import { myComputerComponent } from "../../utils/myComputer/myComupter";

export default function MyComputer() {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div> 
            <div className="flex justify-between items-center select-none cursor-pointer hover:bg-[#333333] px-3 py-2 transition-colors duration-100 ease-linear" onClick={() => setIsOpen(state => !state)}>
                <div className="font-extrabold">My Computer</div>
                <div className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all duration-200 ease-in-out`}><ArrowDown/></div>
            </div>
            <div className={`${isOpen ? "h-[400px]" : "h-0"} overflow-hidden transition-all duration-200`}>
                {
                    myComputerComponent.map(element => {
                        return (
                            <MyComputerComponents key={element.name} element={element}/>
                        )
                    })
                }
            </div>
        </div>
    )
}   