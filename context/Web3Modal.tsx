"use client"

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react"

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "9701a79b9f13a94015387e2dbc338efc"

// 2. Set chains
const testnet = {
  chainId: 9000,
  name: "GFE",
  currency: "GFE",
  explorerUrl: "https://explorer.gfe.foundation",
  rpcUrl: "http://65.108.65.169:8545",
}

// 3. Create modal
const metadata = {
  name: "GFE Foundation",
  description:
    "GFE is a trailblazing initiative designed to tokenize green energy. Providing a unique investment opportunity that bridges the gap between environmental impact and economic incentive, while bringing the first global perspective to electrical costs.",
  url: "https://gfe.foundation/platform", // origin must match your domain & subdomain
  icons: ["https://www.gfe.foundation/GFE.svg"],
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [testnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
})

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return children
}
