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
    panelEnabled,
    setPanelEnabled
} : {
    panelnum: number,
    currentnum: number,
    onClickFunction : (num: number) => void,
    panelEnabled: panelState,
    setPanelEnabled: ((flag: panelState) => void)
}) {
    const [isSecondButtonEnabled, setSecondButtonEnable] = useState(true)
    return(
        panelnum == currentnum && (
            <div className="flex flex-col items-center justify-center p-4">
                <AttentionPart panelnum={panelnum} setSecondButtonEnable={setSecondButtonEnable}/>
                <CustomButton panelnum={panelnum} isSecondButtonEnabled={isSecondButtonEnabled} onClickFunction={onClickFunction} panelEnabled={panelEnabled} setPanelEnabled={setPanelEnabled}/>
            </div>
        )
    )
}