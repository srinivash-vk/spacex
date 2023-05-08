import { useEffect, useState } from "react"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  const [isMedium, setIsMedium] = useState(false)

  useEffect(() => {
    if (windowDimensions.width <= 760) {
      setIsMedium(true)
    } else {
      setIsMedium(false)
    }
  }, [windowDimensions])

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { windowDimensions, isMedium }
}
