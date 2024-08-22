"use client"

import PanelButton from "./panel-button"
import { useState } from "react"
import PanelDescription from "./panel-description"

export default function FaucetDialog() {
    const [currentNum, setCurrentNum] = useState(1)
    const [panelEnabled, setPanelEnabled] = useState({
        firstPanel: true,
        secondPanel: true,
        lastPanel: false
    })

    const PanelButtonIm = ({
        num
    } : {
        num : number
    }) => {
        const sharedProps = {
            panelnum : num,
            currentnum : currentNum,
            onClickFunction : setCurrentNum
        }

        return(
            <div className="flex flex-col mb-1">
                <PanelButton {...sharedProps} panelEnabled = {panelEnabled}/>
                <PanelDescription {...sharedProps} setPanelEnabled = {setPanelEnabled}/>
            </div>
        )
    }

    return(
        <div className="flex flex-col w-11/12 justify-center">
            <PanelButtonIm num={1}/>
            <PanelButtonIm num={2}/>
            <PanelButtonIm num={3}/>
        </div>
    )
}