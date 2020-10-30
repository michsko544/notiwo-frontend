import React from "react"
import ReactDOM from "react-dom"

import { PortalToBodyStyled } from "./PortalToBody.style"

export default function PortalToBody({ isOpen, children }) {
  const PortalToBody = document.getElementById("body-portal")

  return ReactDOM.createPortal(<React.Fragment>{isOpen ? <PortalToBodyStyled>{children}</PortalToBodyStyled> : null}</React.Fragment>, PortalToBody)
}
