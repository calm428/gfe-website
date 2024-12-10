"use client"

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react"

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "9701a79b9f13a94015387e2dbc338efc"

// 2. Set chains
const testnet = {
  chainId: 9000,
  name: "GFE",
  currency: "GFE",
  explorerUrl: process.env.NEXT_PUBLIC_EXPLORER_URL,
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL,
}

// 3. Create modal
const metadata = {
  name: "GFE Foundation",
  description:
    "GFE is a trailblazing initiative designed to tokenize green energy. Providing a unique investment opportunity that bridges the gap between environmental impact and economic incentive, while bringing the first global perspective to electrical costs.",
  url: process.env.NEXT_PUBLIC_DEFAULT_WEBSITE_URL, // origin must match your domain & subdomain
  icons: [process.env.NEXTAUTH_URL + "/GFE.svg"],
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [testnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  themeVariables: {
    '--w3m-font-family': 'Roboto, sans-serif',
    '--w3m-accent': '#2BADFD',
    '--w3m-color-mix': '#1570EF',
    '--w3m-color-mix-strength': 50,
    '--w3m-border-radius-master': '3px'
  }
})

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return children
}
