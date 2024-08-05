import { ReactNode } from 'react'

import Navbar from '@/components/header/faucet/navbar'

type Props = {
    children: ReactNode
}

export default function ProtectedLayout({ children }: Props) {
    return (
        <div className="relative lex flex-col">
            <Navbar />
            <main className="container mx-auto">{ children }</main>
        </div>
    )
}