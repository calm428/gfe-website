import { ReactNode } from 'react'

import Navbar from '@/components/header/faucet/navbar'

type Props = {
    children: ReactNode
}

export default function FaucetPage({ children }: Props) {
    return (
        <>
            <Navbar />
            <main>{ children }</main>
        </>
    )
}