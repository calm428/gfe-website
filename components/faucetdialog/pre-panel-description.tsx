import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import CustomInput from "./check-wallet-address"
import React from "react"

const desc_txt1 = "If you are a developer looking to test the functionality of GFE network or setting up a node on testnet, setting up a node on the GFE test network, you can acquire test GFE tokens through this faucet."
const desc_txt3 = "20 tokens are successfully transferred. Check your wallet."
const button_txt = ["START", "CONTINUE", "FINISH"]
type panelState = {
    firstPanel: boolean,
    secondPanel: boolean,
    lastPanel: boolean
}

const AttentionPart = ({
    panelnum,
    setSecondButtonEnable
}: {
    panelnum: number,
    setSecondButtonEnable: (checkState: boolean) => void
}) => {
    switch (panelnum) {
        case 1:
            return (
                <h4 className="text-center">
                    {desc_txt1}
                </h4>
            )
        case 2:
            return (
                <CustomInput setSecondButtonEnable={setSecondButtonEnable} />
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
    isSecondButtonEnabled,
    panelnum,
    onClickFunction,
    panelEnabled,
    setPanelEnabled
}: {
    isSecondButtonEnabled: boolean,
    panelnum: number,
    onClickFunction: (num: number) => void,
    panelEnabled: panelState,
    setPanelEnabled: ((flag: panelState) => void)
}) => {
    const router = useRouter();
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const temp = panelEnabled
        if (panelnum == 2) {
            e.preventDefault();

            const dataToSend = { "Address": "evmos17u6aw9l89myt7mmfr3vfluzkst4w7ths0sa9ru" }

            try {
                const response = await fetch('http://65.108.65.169:8080', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataToSend)
                });
                console.log(JSON.stringify(dataToSend))
                if (!response.ok)
                    throw new Error('Network response was not ok');
                const result = await response.json()
                console.log('Response:', result)
            } catch (error) {
                console.log('Error fetching data: ', error)
            }

            setPanelEnabled({
                firstPanel: false,
                secondPanel: false,
                lastPanel: true
            })
        } else if (panelnum == 3) {
            router.push('/')
        }
        onClickFunction(panelnum + 1)
    }

    return (
        <Button
            onClick={handleClick}
            className={`flex bg-gradient-to-r ${isSecondButtonEnabled ? 'from-[#2BADFD] to-[#1570EF]' : 'from-[#ff5533] to-[#fc0303]'} border-x-2 h-10 mt-2`}
            disabled={!isSecondButtonEnabled}
        >
            {button_txt[panelnum - 1]}
        </Button>
    )
}

export { AttentionPart, CustomButton }