"use client"

import React, { ReactElement, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Button,
  Card,
  CardBody,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react"
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react"
import { BrowserProvider, Contract, ethers, toBeHex } from "ethers"
import toast from "react-hot-toast"
import { useTranslations } from "next-intl"

import GFEGovernor from "@/config/contract/GFEGovernor.json"

export default function TopicPublishModal({
  children,
  id,
  data,
}: {
  children: React.ReactNode
  id: string
  data: string
}) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()
  const [provider, setProvider] = useState<BrowserProvider | null>(null)
  const [signer, setSigner] = useState<any>(null)
  const [contract, setContract] = useState<Contract | null>(null)
  const [gasFee, setGasFee] = useState<number | null>(null)
  const t = useTranslations("main.forum.topic-publish-modal")

  const enhancedChild = React.cloneElement(children as ReactElement, {
    onPress: onOpen,
  })

  const createCalldata = async (address: any) => {
    // Example ABI and address
    const contractAbi = [
      {
        constant: false,
        inputs: [
          {
            name: "to",
            type: "address",
          },
          {
            name: "value",
            type: "uint256",
          },
        ],
        name: "mint",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ]
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "" // Contract address here

    const _contract = new ethers.Contract(contractAddress, contractAbi)

    const calldata = _contract.interface.encodeFunctionData("mint", [
      address,
      100,
    ])

    return calldata
  }

  const handlePublish = async (callback: () => void) => {
    if (!isConnected) {
      toast.error(t("have_to_connect_wallet"), {
        position: "top-right",
      })

      return
    }
    setLoading(true)

    try {
      const calldata = await createCalldata(address)

      const gasPrice = (await provider!.getFeeData()).gasPrice // Dynamic gas price based on network conditions
      const gasLimit = toBeHex(1000000) // An arbitrary gas limit - you might want to estimate this

      const tx = await contract!.propose(
        [process.env.NEXT_PUBLIC_CONTRACT_ADDRESS], // Target contract addresses
        [0], // Values in wei sent with the proposal, 0 if none
        [calldata], // Function calldata
        data, // Description of the proposal
        {
          gasPrice, // Ethers.js will automatically format this correctly
          gasLimit, // Same here, Ethers.js takes care of the formatting
        }
      )

      console.log("Proposal tx sent:", tx.hash, tx)

      const receipt = await tx.wait()
      console.log("Proposal tx confirmed:", receipt)

      toast.success(t("proposal_published_successfully"), {
        position: "top-right",
      })

      // await updateProposal(id, {
      //   blockHash: receipt.blockHash,
      // })

      callback()
    } catch (error) {
      console.log(error)

      toast.error(t("failed_to_publish_proposal"), {
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

      _provider.getFeeData().then((_feeData) => {
        console.log(_feeData.gasPrice)
      })

      _provider.getSigner().then((_signer) => {
        setSigner(_signer)
      })
    }
  }, [walletProvider])

  useEffect(() => {
    if (signer) {
      const _contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
        GFEGovernor.abi,
        signer
      )
      setContract(_contract)
    }
  }, [signer])

  useEffect(() => {
    if (provider) {
      provider.getFeeData().then((_feeData) => {
        setGasFee((Number(_feeData.gasPrice!) * 15e4) / 1e18)
      })
    }
  }, [provider])

  return (
    <>
      {enhancedChild}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("publish_proposal")}
              </ModalHeader>
              <ModalBody>
                <Card shadow="none" className="border">
                  <CardBody>
                    <div>
                      <Tooltip content="0.075151546481516 GFE">
                        <div className="flex w-full justify-between gap-1">
                          <p className="mr-4 whitespace-nowrap">
                            {t("estimated_gas_fee")}
                          </p>
                          <span className="ml-auto line-clamp-1">
                            {gasFee ? gasFee : ""}
                          </span>
                          <span>{t("gfe")}</span>
                        </div>
                      </Tooltip>
                      <Tooltip content="0.121654894351651 GFE">
                        <div className="flex w-full justify-between text-sm">
                          <p className="mr-4 whitespace-nowrap">{t("max_fee")}</p>
                          <span className="ml-auto line-clamp-1">
                            {gasFee ? gasFee : ""}
                          </span>
                          <span>{t("gfe")}</span>
                        </div>
                      </Tooltip>
                    </div>
                    <Divider className="my-3" />
                    <div>
                      <Tooltip content={`${gasFee} GFE`}>
                        <div className="flex w-full justify-between gap-1">
                          <p className="mr-4 whitespace-nowrap">{t("total_cost")}</p>
                          <span className="ml-auto line-clamp-1">
                            {gasFee ? gasFee : ""}
                          </span>
                          <span>{t("gfe")}</span>
                        </div>
                      </Tooltip>
                      <div className="flex w-full justify-end text-sm">
                        <p>{gasFee ? gasFee : ""}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t("cancel")}
                </Button>
                <Button
                  color="primary"
                  disabled={loading}
                  isLoading={loading}
                  onClick={() => handlePublish(onClose)}
                >
                  {t("confirm")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
