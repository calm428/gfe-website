import { useEffect, useRef, useState } from "react"

function useICOWebSocket(url: string) {
  const [status, setStatus] = useState<
    | "loading"
    | "connected"
    | "disconnected"
    | "failed"
    | "running"
    | "halted"
    | "not_started"
    | "ended"
  >("loading")
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
  const [startTime, setStartTime] = useState(0)
  const socket = useRef<WebSocket>()

  useEffect(() => {
    socket.current = new WebSocket(url)

    const onMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data)
        if (data.type === "initial_data") {
          setAddress({
            GFEContractAddress: data?.GFEContractAddress || "",
            GFEICOContractAddress: data?.GFEICOContractAddress || "",
          })

          data.price && setChainData({ ...chainData, ...data.price })

          setStartTime(Number(data.config.ICO_start_time || 0) * 1000)

          if (data.config.ICO_state === "Not Started") setStatus("not_started")
          else if (data.config.ICO_state === "Running") setStatus("running")
          else if (data.config.ICO_state === "Halted") setStatus("halted")
          else if (data.config.ICO_state === "End") {
            setStatus("ended")
            setStartTime(0)
          }
        } else if (data.type === "ICOstatus") {
          data.data && setChainData({ ...chainData, ...data.data })

          if (data.data.state === "Not Started") setStatus("not_started")
          else if (data.data.state === "Running") setStatus("running")
          else if (data.data.state === "Halted") setStatus("halted")
          else if (data.data.state === "End") {
            setStatus("ended")
            setStartTime(0)
          }
        }
      } catch (error) {
        console.log(error)
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

  return { status, chainData, address, startTime }
}

export default useICOWebSocket
