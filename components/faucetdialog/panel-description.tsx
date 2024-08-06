import { useState } from 'react';
import { AttentionPart, CustomButton } from "./pre-panel-description"

const PanelDescription = ({
    panelnum,
    currentnum,
    onClickFunction,
    setFinishEnabled
} : {
    panelnum : number,
    currentnum : number,
    onClickFunction : (num : number) => void,
    setFinishEnabled : (flag : boolean) => void
}) => {
    const [isButtonEnabled, setButtonEnable] = useState(true)
    return(
        panelnum == currentnum && (
            <div className="flex flex-col items-center justify-center p-4">
                <AttentionPart panelnum={panelnum} setButtonEnable={setButtonEnable}/>
                <CustomButton isButtonEnabled={isButtonEnabled} panelnum={panelnum} onClickFunction={onClickFunction} setFinishEnabled={setFinishEnabled}/>
            </div>
        )
    )
}

export default PanelDescription