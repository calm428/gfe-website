"use client"

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react"

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "9701a79b9f13a94015387e2dbc338efc"

// 2. Set chains
const mainnet = {
  chainId: 80002,
  name: "AMOY",
  currency: "MATIC",
  explorerUrl: "https://www.oklink.com/amoy",
  rpcUrl: "https://rpc-amoy.polygon.technology",
}

// 3. Create modal
const metadata = {
  name: "GFE Foundation",
  description:
    "GFE is a trailblazing initiative designed to tokenize green energy. Providing a unique investment opportunity that bridges the gap between environmental impact and economic incentive, while bringing the first global perspective to electrical costs.",
  url: "https://platform.gfe.foundation", // origin must match your domain & subdomain
  icons: ["https://www.gfe.foundation/GFE.svg"],
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
})

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return children
}
