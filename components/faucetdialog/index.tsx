"use client"

import PanelButton from "./panel-button"
import { useState, useEffect } from "react"
import PanelDescription from "./panel-description"

export default function FaucetDialog() {
    const [currentNum, setCurrentNum] = useState(1)

    const PanelButtonIm = ({
        num
    } : {
        num : number
    }) => {
        return(
            <div className="flex flex-col">
                <PanelButton panelnum={num} currentnum={currentNum} onClickFunction={setCurrentNum} />
                <PanelDescription panelnum={num} currentnum={currentNum} onClickFunction={setCurrentNum} />
            </div>
        )
    }

    useEffect(() => {
        console.log(currentNum)
    }), [currentNum]

    return(
        <div className="flex flex-col w-3/5">
        {/* <span className="bg-gradient-to-r from-[#77C167] to-[#1A88F9] bg-clip-text font-semibold text-transparent">
            GFE Foundation
        </span> */}
            <PanelButtonIm num={1}/>
            <PanelButtonIm num={2}/>
            <PanelButtonIm num={3}/>
        </div>
    )
}