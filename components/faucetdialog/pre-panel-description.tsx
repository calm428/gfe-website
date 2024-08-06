import { Button } from "@/components/ui/button"
import CustomInput from "./check-wallet-address"

const desc_txt1 = "If you are a developer looking to test the functionality of cheqd network or setting up a node on testnet, setting up a node on the cheqd test network, you can acquire test CHEQ tokens through this faucet."
const desc_txt3 = "20 tokens are successfully transferred. Check your wallet."
const button_txt = ["START", "CONTINUE", "FINISH"]

const AttentionPart = ({
    panelnum,
    setButtonEnable
} : {
    panelnum : number,
    setButtonEnable : (checkState : boolean) => void
}) => {
    switch(panelnum) {
        case 1:
            return (
                <h4 className="text-center">
                    {desc_txt1}
                </h4>
            )
        case 2:
            return (
                <CustomInput setButtonEnable={setButtonEnable} />
            )
        case 3:
            return (
                <h4 className="text-center">
                    {desc_txt3}
                </h4>
            )
    }
}

const CustomButton = ({
    isButtonEnabled,
    panelnum,
    onClickFunction,
    setFinishEnabled
} : {
    isButtonEnabled: boolean,
    panelnum: number,
    onClickFunction: (num: number) => void,
    setFinishEnabled : (flag : boolean) => void
}) => {
    const handleClick = () => {
        if (panelnum == 2)
            setFinishEnabled(true)
        onClickFunction(panelnum + 1)
    }

    return(
        <Button 
            onClick={handleClick}
            className={`flex bg-gradient-to-r ${isButtonEnabled ? 'from-[#2BADFD] to-[#1570EF]' : 'from-[#ff5533] to-[#fc0303]'} b-4 w-24 h-10`}  
            disabled={!isButtonEnabled}
        >
            { button_txt[panelnum - 1] }
        </Button>
    )
}

export {AttentionPart, CustomButton}