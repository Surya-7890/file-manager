import { useState } from "react";
import { ArrowDown } from "../../svg/arrowDown";

export default function MyComputer() {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <>
            <div className="flex justify-between items-center select-none cursor-pointer hover:bg-[#333333  ] px-3 py-2 transition-colors duration-100 ease-linear" onClick={() => setIsOpen(state => !state)}>
                <div>My Computer</div>
                <div className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all duration-200 ease-in-out`}><ArrowDown/></div>
            </div>
        </>
    )
}   