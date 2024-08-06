"use client"

import PanelButton from "./panel-button"
import { useState } from "react"
import PanelDescription from "./panel-description"

export default function FaucetDialog() {
    const [currentNum, setCurrentNum] = useState(1)
    const [finishEnabled, setFinishEnabled] = useState(false)

    const PanelButtonIm = ({
        num
    } : {
        num : number
    }) => {
        const sharedProps = {
            panelnum : num,
            currentnum : currentNum,
            onClickFunction : setCurrentNum,
            setFinishEnabled : setFinishEnabled
        }

        return(
            <div className="flex flex-col">
                <PanelButton finishEnabled={finishEnabled} {...sharedProps}/>
                <PanelDescription {...sharedProps}/>
            </div>
        )
    }

    return(
        <div className="flex flex-col w-3/5">
            <span className="bg-gradient-to-r from-[#77C167] to-[#1A88F9] bg-clip-text font-semibold text-transparent">
                GFE Foundation
            </span>
            <PanelButtonIm num={1}/>
            <PanelButtonIm num={2}/>
            <PanelButtonIm num={3}/>
        </div>
    )
}