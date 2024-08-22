import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import CustomInput from "./check-wallet-address"
import React from "react"

const desc_txt1 = "If you are a developer looking to test the functionality of GFE network or setting up a node on testnet, setting up a node on the GFE test network, you can acquire test GFE tokens through this faucet."
const desc_txt3 = "2 tokens are successfully transferred. Check your wallet."
const button_txt = ["START", "CONTINUE", "FINISH"]
type panelState = {
    firstPanel: boolean,
    secondPanel: boolean,
    lastPanel: boolean
}


const AttentionPart = ({
    panelnum,
    setSecondButtonEnable,
    address,
    setAddress
}: {
    panelnum: number,
    setSecondButtonEnable: (checkState: boolean) => void,
    address: string,
    setAddress: (address: string) => void
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
                <CustomInput setSecondButtonEnable={setSecondButtonEnable} setAddress={setAddress} />
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
    setPanelEnabled,
    address
}: {
    isSecondButtonEnabled: boolean,
    panelnum: number,
    onClickFunction: (num: number) => void,
    setPanelEnabled: ((flag: panelState) => void),
    address: string
}) => {
    const router = useRouter();
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (panelnum == 2) {
            e.preventDefault();

            const dataToSend = { "Address": address }
            console.log("Hey adderss is here", address)

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