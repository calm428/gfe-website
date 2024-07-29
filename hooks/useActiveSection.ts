import { useEffect, useRef, useState } from "react"

const useActiveSection = (
  sectionIds: string[]
): { activeSection: string; onHashLinkClick: (id: string) => void } => {
  const [activeSection, setActiveSection] = useState<string>("")
  const [triggeredByHashLink, setTriggeredByHashLink] = useState<boolean>(false)
  const timeout = useRef<NodeJS.Timeout | null>(null) // Using NodeJS.Timeout for the ref type if running in a Node environment; for browser, use number as type
  const lastScrollTop = useRef<number>(0) // Keep track of the last scroll position

  // Function to calculate the adaptive duration based on scroll distance
  const calculateDuration = (startPos: number, endPos: number): number => {
    const distance = Math.abs(startPos - endPos)
    const baseDuration = 300 // Base duration for small distances
    const additionalDuration = distance / 5 // Example ratio, adjust based on testing
    const maxDuration = 1000 // Maximum duration you'd want to apply
    return Math.min(baseDuration + additionalDuration, maxDuration)
  }

  const onHashLinkClick = (id: string): void => {
    const scrollTarget = document.getElementById(id)
    if (!scrollTarget) return

    const scrollPosBeforeClick = window.scrollY
    const scrollTargetPos = scrollTarget.offsetTop
    const adaptiveDuration = calculateDuration(
      scrollPosBeforeClick,
      scrollTargetPos
    )

    setActiveSection(id)
    setTriggeredByHashLink(true)
    if (timeout.current) clearTimeout(timeout.current) // Make sure to clear any existing timeout

    timeout.current = setTimeout(() => {
      setTriggeredByHashLink(false)
    }, adaptiveDuration)
  }

  useEffect(() => {
    const onScroll = (): void => {
      if (!triggeredByHashLink) {
        let foundSection = ""
        for (const id of sectionIds) {
          const element = document.getElementById(id)
          if (element) {
            const scrollPosition = window.scrollY + 15 // Adjust based on your header/nav size
            if (
              element.offsetTop <= scrollPosition &&
              element.offsetTop + element.offsetHeight >= scrollPosition
            ) {
              foundSection = id
              break
            }
          }
        }
        if (foundSection && foundSection !== activeSection) {
          setActiveSection(foundSection)
          lastScrollTop.current = window.scrollY // Update last scroll position
        }
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [triggeredByHashLink, sectionIds, activeSection])

  return { activeSection, onHashLinkClick }
}

export default useActiveSection
