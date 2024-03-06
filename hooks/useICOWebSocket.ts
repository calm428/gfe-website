import { useCallback, useEffect, useRef, useState } from "react"

function useICOWebSocket(url: string) {
  const [status, setStatus] = useState<"connected" | "disconnected" | "failed">(
    "disconnected"
  )
  const [chainData, setChainData] = useState<{
    price: number
    totalSupply: number
    tokenPerMatic: number
    totalToken: number
  }>({
    price: 0,
    totalSupply: 0,
    tokenPerMatic: 0,
    totalToken: 3500 * 360 * 10,
  })
  const [address, setAddress] = useState<{
    GFEContractAddress: string
    GFEICOContractAddress: string
  }>({
    GFEContractAddress: "",
    GFEICOContractAddress: "",
  })
  const socket = useRef<WebSocket>()

  useEffect(() => {
    socket.current = new WebSocket(url)

    const onMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data)
        console.log(data)

        if (data.type === "initial_data") {
          setAddress({
            GFEContractAddress: data?.GFEContractAddress || "",
            GFEICOContractAddress: data?.GFEICOContractAddress || "",
          })

          data.data && setChainData({ ...chainData, ...data.data })
        } else if (data.type === "ICOstatus") {
          data.data && setChainData({ ...chainData, ...data.data })
        }
      } catch (e) {
        console.log(e)
      }
    }

    const onOpen = () => {
      setStatus("connected")
      socket.current?.send(JSON.stringify({ type: "get_initial_data" }))
    }

    const onClose = () => {
      setStatus("disconnected")
    }

    const onError = () => {
      setStatus("failed")
    }

    socket.current.addEventListener("message", onMessage)
    socket.current.addEventListener("open", onOpen)
    socket.current.addEventListener("close", onClose)
    socket.current.addEventListener("error", onError)

    return () => {
      socket.current?.removeEventListener("message", onMessage)
      socket.current?.removeEventListener("open", onOpen)
      socket.current?.removeEventListener("close", onClose)
      socket.current?.removeEventListener("error", onError)

      socket.current?.close()
    }
  }, [url])

  return { status, chainData, address }
}

export default useICOWebSocket
