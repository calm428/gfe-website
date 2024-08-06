import { Button } from "@/components/ui/button"
import CustomInput from "./check-wallet-address"

const desc_txt = "If you are a developer looking to test the functionality of cheqd network or setting up a node on testnet, setting up a node on the cheqd test network, you can acquire test CHEQ tokens through this faucet."
const button_txt = ["START", "CONTINUE", "FINISH"]

const AttentionPart = ({
    num
} : {
    num : number
}) => {
    switch(num) {
        case 1:
            return (
                <h4 className="text-center">
                    {desc_txt}
                </h4>
            )
        case 2:
            return (
                <CustomInput />
            )
    }
}

const PanelDescription = ({
    panelnum,
    currentnum,
    onClickFunction
} : {
    panelnum : number,
    currentnum : number,
    onClickFunction : (num : number) => void
}) => {
    console.log(panelnum, currentnum)
    return(
        panelnum == currentnum && (
            <div className="flex flex-col items-center justify-center p-4">
                <AttentionPart num={panelnum}/>
                <Button onClick={() => onClickFunction(panelnum + 1)} className="flex bg-gradient-to-r from-[#2BADFD] to-[#1570EF] b-4 w-24 h-10">
                    { button_txt[panelnum - 1] }
                </Button>
            </div>
        )
    )
}

export default PanelDescription