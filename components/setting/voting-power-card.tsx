"use client"

import { useEffect, useState } from "react"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Tab,
  Tabs,
} from "@nextui-org/react"
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react"
import { BrowserProvider, Contract, ethers, toBeHex, toBigInt } from "ethers"
import toast from "react-hot-toast"
import { PiWarningDuotone } from "react-icons/pi"

import GFE from "@/config/contract/GFE.json"
import GFEGovernor from "@/config/contract/GFEGovernor.json"
import { useTranslations } from "next-intl"

export default function VotingPowerCard() {
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()
  const [loading, setLoading] = useState<boolean>(false)
  const [isDelegated, setIsDelegated] = useState<boolean>(false)
  const [provider, setProvider] = useState<BrowserProvider | null>(null)
  const [signer, setSigner] = useState<any>(null)
  const [governorContract, setGovernorContract] = useState<Contract | null>(
    null
  )
  const [gfeContract, setGFEContract] = useState<Contract | null>(null)
  const [balance, setBalance] = useState<number>(0)
  const t = useTranslations("main.platform.setting.voting_power")

  const handleDelegate = async () => {
    if (!governorContract) return

    setLoading(true)

    try {
      const tx = await governorContract.delegate(address)
      await tx.wait()

      toast.success(
        `You successfully delegated with transaction hash: ${tx.hash}`,
        {
          position: "top-right",
        }
      )
    } catch (error) {
      console.log(error)

      toast.error("Something went wrong", {
        position: "top-right",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (walletProvider) {
      const _provider = new BrowserProvider(walletProvider)
      setProvider(_provider)

      _provider.getSigner().then((_signer) => {
        setSigner(_signer)
      })
    }
  }, [walletProvider])

  useEffect(() => {
    if (signer) {
      const _governorContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_GOVERNOR_CONTRACT_ADDRESS || "",
        GFEGovernor.abi,
        signer
      )
      setGovernorContract(_governorContract)

      const _gfeContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_GFE_CONTRACT_ADDRESS || "",
        GFE.abi,
        signer
      )
      setGFEContract(_gfeContract)
    }
  }, [signer])

  useEffect(() => {
    async function getBalance(
      provider: BrowserProvider,
      governorContract: Contract
    ) {
      console.log("octa")
      const currentHeight = await provider!.getBlockNumber()
      console.log(currentHeight)

      const votingPower = await governorContract!.getVotes(
        address,
        currentHeight - 5
      )

      console.log(votingPower, "votingPower")

      setBalance(Number(votingPower) / 1e18)
    }

    if (provider && governorContract) {
      getBalance(provider, governorContract)
    }
  }, [provider, governorContract])

  useEffect(() => {
    if (gfeContract) {
      gfeContract
        .delegates(address)
        .then((delegatedTo: string) => {
          setIsDelegated(delegatedTo !== ethers.ZeroAddress)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [gfeContract])

  return (
    <Card className="py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <h4 className="text-large font-bold">{t("title")}</h4>
        <small className="text-default-500">{t("manage")}</small>
      </CardHeader>
      <CardBody>
        <Tabs variant="underlined" aria-label="Tabs variants">
          <Tab key="delegated" title={t("delegated_to")}>
            {isConnected ? (
              <div className="grid items-start gap-4 md:grid-cols-2">
                <Card shadow="none" className="border">
                  <CardBody>
                    <p className="text-lg font-medium text-gray-500">
                      {t("title")}
                    </p>
                    <p>{balance}</p>
                  </CardBody>
                </Card>
                {!isDelegated && (
                  <Card shadow="none" className="border">
                    <CardBody>
                      <p>
                        <PiWarningDuotone className="mr-2 inline-flex size-5 text-orange-500" />
                          {t("delegated")}
                      </p>
                      <p className="my-4 text-sm">
                        {t("description")}
                      </p>
                      <Button
                        disabled={loading}
                        isLoading={loading}
                        onClick={handleDelegate}
                      >
                          {t("delegate")}
                      </Button>
                    </CardBody>
                  </Card>
                )}
              </div>
            ) : (
              <Card shadow="none" className="border">
                <CardBody className="flex !flex-row items-center justify-start gap-2 py-4">
                  <PiWarningDuotone className="size-5 text-orange-500" />
                  <p>{t("connect")}</p>
                </CardBody>
              </Card>
            )}
          </Tab>
          <Tab key="received" title={t("received_delegations")} />
        </Tabs>
      </CardBody>
    </Card>
  )
}
