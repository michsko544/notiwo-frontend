import React from "react"
import { DropdownStyled, DropdownLink } from "./Dropdown.style"

const Dropdown = ({ color, links, handleMenuClose, handleDropdownClose }) => {
  return (
    <DropdownStyled color={color}>
      {links.map((link) => (
        <DropdownLink key={link.id} to={link.path} onClick={handleDropdownClose} onMouseDown={handleMenuClose}>
          {link.name}
        </DropdownLink>
      ))}
    </DropdownStyled>
  )
}

export default Dropdown
