import PortalToBody from "components/PortalToBody"
import React, { useRef } from "react"
import { useOutsideClick } from "hooks"

import { ModalContainer, ModalContent } from "./Modal.style"

export default function Modal({ isOpen, handleClose, children }) {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  useOutsideClick(wrapperRef, contentRef, handleClose)

  return (
    <PortalToBody isOpen={isOpen}>
      <ModalContainer ref={wrapperRef}>
        <ModalContent ref={contentRef} role="button">
          {children}
        </ModalContent>
      </ModalContainer>
    </PortalToBody>
  )
}
