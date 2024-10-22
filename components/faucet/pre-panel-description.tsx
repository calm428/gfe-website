import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import CustomInput from "./check-wallet-address"
import React from "react"
import { useTranslations } from "next-intl" 

type panelState = {
    firstPanel: boolean,
    secondPanel: boolean,
    lastPanel: boolean
}

type ApiRes = {
    id: number,
    message: string
}

const desc_txt1 = "If you're a developer testing the GFE network or setting up a node on the testnet, you can obtain test GFE tokens through this faucet."
const button_txt = ["START", "CONTINUE", "FINISH"]
let desc_txt3:ApiRes = {
    id: -1,
    message: "Apologies, but we're unable to connect to the faucet server at the moment. Please try reconnecting after a short while."
}

const isApiRes = (res: any) => {
    return typeof res.id === 'number' && typeof res.message === 'string' && Object.keys(res).length === 2
}

const AttentionPart = ({
    panelnum,
    setSecondButtonEnable,
    setAddress
}: {
    panelnum: number,
    setSecondButtonEnable: (checkState: boolean) => void,
    setAddress: (address: string) => void
}) => {
    const t = useTranslations("main")
    switch (panelnum) {
        case 1:
            return (
                <h4 className="text-center">
                    {t("faucet.description1")}
                </h4>
            )
        case 2:
            return (
                <CustomInput setSecondButtonEnable={setSecondButtonEnable} setAddress={setAddress} />
            )
        case 3:
            return (
                <h4 className="text-center">
                    {t("faucet.description3")}
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
    setPanelEnabled: (flag: panelState) => void,
    address: string
}) => {
    const router = useRouter();
    const t = useTranslations("main")

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (panelnum == 2) {
            e.preventDefault();

            const dataToSend = { "Address": address }

            try {
                const response = await fetch(`${'ADFAF'}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataToSend)
                });
                if (!response.ok)
                    throw new Error('Network response was not ok');
                const result = await response.json()
                isApiRes(result) ? desc_txt3 = result : console.log("Response has wrong format.")
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

    const buttonText = 
        panelnum == 1 ? t("faucet.button_text1") : 
        panelnum == 2 ? t("faucet.button_text2") : 
        t("faucet.button_text3")

    return (
        <Button
            onClick={handleClick}
            className={`flex bg-gradient-to-r ${isSecondButtonEnabled ? 'from-[#2BADFD] to-[#1570EF]' : 'from-[#ff5533] to-[#fc0303]'} border-x-2 h-10 mt-2`}
            disabled={!isSecondButtonEnabled}
        >
            {buttonText}
        </Button>
    )
}

export { AttentionPart, CustomButton }