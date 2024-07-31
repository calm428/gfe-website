"use client"

import React, { ReactElement, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Button,
  Card,
  CardBody,
  cn,
  Divider,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  RadioProps,
  Tooltip,
  useDisclosure,
  useRadio,
  VisuallyHidden,
} from "@nextui-org/react"
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react"
import { Addreth, AddrethConfig } from "addreth"
import { BrowserProvider, Contract, ethers, toBeHex, toBigInt } from "ethers"
import toast from "react-hot-toast"
import { HiArrowLongRight } from "react-icons/hi2"

import "addreth/styles.css"

import GFEGovernor from "@/config/contract/GFEGovernor.json"

export const CustomRadio = (props: RadioProps & { state: string }) => {
  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props)

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex flex-row-reverse items-center justify-between hover:bg-content2",
        "w-full cursor-pointer gap-4 rounded-lg border-2 border-transparent p-4",
        { "data-[selected=true]:border-green-500": props.state === "for" },
        {
          "data-[selected=true]:border-danger-500": props.state === "against",
        },
        { "data-[selected=true]:border-default-500": props.state === "abstain" }
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span
        {...getWrapperProps()}
        className={cn(getWrapperProps().className, {
          "!border-green-500": props.state === "for",
          "!border-danger-500": props.state === "against",
          "!border-default-500": props.state === "abstain",
        })}
      >
        <span
          {...getControlProps()}
          className={cn(getControlProps().className, {
            "!bg-green-500": props.state === "for",
            "!bg-danger-500": props.state === "against",
            "!bg-default-500": props.state === "abstain",
          })}
        />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">
            {description}
          </span>
        )}
      </div>
    </Component>
  )
}

export default function VoteModal({
  children,
  proposalId,
}: {
  children: React.ReactNode
  proposalId: string
}) {
  const router = useRouter()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [loading, setLoading] = useState<boolean>(false)
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()
  const [provider, setProvider] = useState<BrowserProvider | null>(null)
  const [signer, setSigner] = useState<any>(null)
  const [contract, setContract] = useState<Contract | null>(null)
  const [balance, setBalance] = useState<number>(0)
  const [voteState, setVoteState] = useState<"for" | "against" | "abstain">(
    "for"
  )

  const enhancedChild = React.cloneElement(children as ReactElement, {
    onPress: () => {
      if (!isConnected) {
        toast.error("Please connect your wallet", {
          position: "top-right",
        })
        return
      } else onOpen()
    },
  })

  const handleVote = async () => {
    setLoading(true)

    try {
      // const tx = await contract!.castVoteWithReason(proposalId, voteState, "")
      console.log(proposalId, voteState, balance)
      const tx = await contract!.castVote(
        toBigInt(proposalId),
        voteState === "for" ? 1 : voteState === "against" ? 2 : 0
      )

      // Wait for the transaction to be mined
      const receipt = await tx.wait()

      toast.success(`You successfully voted`, {
        position: "top-right",
      })

      router.refresh()
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
      const _contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_GOVERNOR_CONTRACT_ADDRESS || "",
        GFEGovernor.abi,
        signer
      )
      setContract(_contract)
    }
  }, [signer])

  useEffect(() => {
    async function getBalance(provider: BrowserProvider, contract: Contract) {
      console.log("octa")
      const currentHeight = await provider!.getBlockNumber()
      console.log(currentHeight)

      const votingPower = await contract!.getVotes(address, currentHeight - 5)

      console.log(votingPower, "votingPower")

      setBalance(Number(votingPower) / 1e18)
    }

    if (provider && contract) {
      getBalance(provider, contract)
    }
  }, [provider, contract])

  return (
    <>
      {enhancedChild}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">
                Voting
              </ModalHeader>
              <ModalBody>
                <Card shadow="none" className="border">
                  <CardBody>
                    <div className="my-8 flex w-full items-center justify-center">
                      <AddrethConfig
                        theme="simple-light"
                        ens={false}
                        explorer={(address) => ({
                          name: "Amoy",
                          accountUrl: `https://www.oklink.com/amoy/address/${address}`,
                        })}
                      >
                        <Addreth address={address || "0x..."} />
                      </AddrethConfig>
                    </div>
                    <Card shadow="none" className="border">
                      <CardBody>
                        <p className="text-lg font-medium text-gray-500">
                          Voting power
                        </p>
                        <p>{balance}</p>
                        <Link
                          size="sm"
                          href="/setting?tab=voting-power"
                          showAnchorIcon
                          anchorIcon={<HiArrowLongRight className="ml-1" />}
                          className="ml-auto"
                        >
                          My voting power
                        </Link>
                      </CardBody>
                    </Card>
                    <RadioGroup
                      label="Vote"
                      value={voteState}
                      onValueChange={(value) =>
                        setVoteState(value as "for" | "against" | "abstain")
                      }
                      className="mt-4"
                    >
                      <CustomRadio value="for" state="for">
                        <div className="flex items-center gap-1 text-green-500">
                          <div className="size-4 rounded-md bg-green-500"></div>
                          <span>For</span>
                        </div>
                      </CustomRadio>
                      <CustomRadio value="against" state="against">
                        <div className="flex items-center gap-1 text-danger-500">
                          <div className="size-4 rounded-md bg-danger-500"></div>
                          <span>Against</span>
                        </div>
                      </CustomRadio>
                      <CustomRadio value="abstain" state="abstain">
                        <div className="flex items-center gap-1 text-default-500">
                          <div className="size-4 rounded-md bg-default-500"></div>
                          <span>Abstain</span>
                        </div>
                      </CustomRadio>
                    </RadioGroup>
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  disabled={loading}
                  isLoading={loading}
                  onClick={handleVote}
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
