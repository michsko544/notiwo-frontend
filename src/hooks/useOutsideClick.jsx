import { useEffect } from "react"

function useOutsideClick(outsideRef, insideRef, callback) {
  const handleClick = ({ target }) => {
    if (insideRef.current && !insideRef.current.contains(target) && outsideRef.current && outsideRef.current.contains(target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  })
}

export default useOutsideClick
