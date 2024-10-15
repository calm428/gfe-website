"use client"
import { useTranslations } from "next-intl"

export default function WalletConnectButton() {
  const t = useTranslations("main")
  return <w3m-button 
    balance="hide" 
    label={t("header.wallet_label")}
    loadingLabel={t("header.wallet_loading_label")}
    size="sm"
  />
}
