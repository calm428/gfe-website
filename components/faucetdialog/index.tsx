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
            onClickFunction : setCurrentNum,
            panelEnabled: panelEnabled,
            setPanelEnabled : setPanelEnabled
        }

        return(
            <div className="flex flex-col">
                <PanelButton {...sharedProps}/>
                <PanelDescription {...sharedProps}/>
            </div>
        )
    }

    return(
        <div className="flex flex-col w-11/12 justify-center">
            <PanelButtonIm num={1}/>
            <PanelButtonIm num={2}/>
            <PanelButtonIm num={3}/>
            {/* <FaucetSender
                faucetAddress="cosmos15aptdqmm7ddgtcrjvc5hs988rlrkze40l4q0he"
                rpcUrl="https://rpc.sentry-01.theta-testnet.polypore.xyz" 
            /> */}
        </div>
    )
}