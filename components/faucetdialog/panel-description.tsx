import { useState } from 'react';
import { AttentionPart, CustomButton } from "./pre-panel-description"

type panelState = {
    firstPanel: boolean,
    secondPanel: boolean,
    lastPanel: boolean
}
export default function PanelDescription({
    panelnum,
    currentnum,
    onClickFunction,
    setPanelEnabled
} : {
    panelnum: number,
    currentnum: number,
    onClickFunction : (num: number) => void,
    setPanelEnabled: ((flag: panelState) => void)
}) {
    const [isSecondButtonEnabled, setSecondButtonEnable] = useState(true)
    const [ address, setAddress ] = useState("")

    return(
        panelnum == currentnum && (
            <div className="flex flex-col items-center justify-center p-4">
                <AttentionPart panelnum={panelnum} setSecondButtonEnable={setSecondButtonEnable} address={address} setAddress={setAddress}/>
                <CustomButton panelnum={panelnum} isSecondButtonEnabled={isSecondButtonEnabled} onClickFunction={onClickFunction} setPanelEnabled={setPanelEnabled} address={address}/>
            </div>
        )
    )
}