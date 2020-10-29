import React from "react"
import { SpecialLink as LinkStyled, RouterSpecialLink } from "./Link.style"

const SpecialLink = ({ to, children, ...restProps }) => {
  return (
    <LinkStyled>
      <RouterSpecialLink to={to} {...restProps}>
        {children}
      </RouterSpecialLink>
    </LinkStyled>
  )
}

export default SpecialLink
