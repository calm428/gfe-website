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
}: {
    panelnum: number,
    currentnum: number,
    onClickFunction: (num: number) => void,
    setPanelEnabled: ((flag: panelState) => void)
}) {
    type ApiRes = {
        id: number,
        message: string
    }
    const [isSecondButtonEnabled, setSecondButtonEnable] = useState(true)
    const [address, setAddress] = useState("")
    const [res, setRes] = useState<ApiRes>({
        id: -1,
        message: "Sorry. We can't connect to faucet server."
    })

    return (
        panelnum == currentnum && (
            <div className="flex flex-col items-center justify-center pt-4">
                <AttentionPart panelnum={panelnum} setSecondButtonEnable={setSecondButtonEnable} setAddress={setAddress} />
                <CustomButton panelnum={panelnum} isSecondButtonEnabled={isSecondButtonEnabled} onClickFunction={onClickFunction} setPanelEnabled={setPanelEnabled} address={address} />
            </div>
        )
    )
}