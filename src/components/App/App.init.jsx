import { useEffect, useContext } from "react"
import Store from "store"
import { ThemeContext } from "contexts"
import { useLogout } from "hooks"
import axios from "axios"

const AppInit = () => {
  const store = Store.useStore()
  const { mode } = useContext(ThemeContext)
  const forceLogout = useLogout()

  // useEffect(() => {
  //   const log = console.log
  //   const warn = console.warn
  //   const error = console.error

  //   console.log = (...args) => {
  //     console.debug("[LOG] ", ...args)
  //   }

  //   console.warn = (...args) => {
  //     console.debug("[WARN] ", ...args)
  //   }

  //   console.error = (...args) => {
  //     console.debug("[ERROR] ", ...args)
  //   }

  //   return () => {
  //     console.log = log
  //     console.warn = warn
  //     console.error = error
  //   }
  // }, []) // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Init theme once from localStorage
   */
  useEffect(() => {
    const mode = localStorage.getItem("mode") || "light"
    store.set("mode")(mode)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Style body background
   */
  useEffect(() => {
    window.document.body.style.background = mode.main
  }, [store, mode.main])

  /**
   * Handle logout when unauthorized
   */
  axios.interceptors.response.use(undefined, (error) => {
    const response = error.response
    if (!response.config.url?.includes("auth") && response.status === 401) {
      forceLogout()
    }
  })

  return null
}

export default AppInit
