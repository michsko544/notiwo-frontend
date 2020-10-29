import React from "react"
import PropTypes from "prop-types"
import { LinkStyled, LinkWrapper, IconStyle } from "./Link.style"
import Dropdown from "./Dropdown"
import { RouterLink, CustomLink } from "./Link.style"

const Link = ({ children, dropdown = false, color, links, to, handleMenuClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  const handleLinkMouseDown = () => {
    if (dropdown) toggleDropdown(isDropdownOpen)
  }

  const toggleDropdown = (isDropdownOpen) => setIsDropdownOpen(!isDropdownOpen)

  return (
    <LinkStyled color={color.font} style={{ marginBottom: !isDropdownOpen && 28 }}>
      <LinkWrapper onClick={handleLinkMouseDown}>
        {!dropdown ? (
          <RouterLink onClick={handleMenuClose} to={to} color={color.font}>
            {children}
          </RouterLink>
        ) : (
          <>
            <CustomLink color={color.font}>{children}</CustomLink>
            <IconStyle rotate={isDropdownOpen.toString()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </IconStyle>
          </>
        )}
      </LinkWrapper>
      {dropdown && isDropdownOpen && (
        <Dropdown color={color.main} links={links} handleMenuClose={handleMenuClose} handleDropdownClose={() => setIsDropdownOpen(false)} />
      )}
    </LinkStyled>
  )
}

Link.propTypes = {
  children: PropTypes.any.isRequired,
  dropdown: PropTypes.bool,
  color: PropTypes.object,
  links: PropTypes.array,
}

export default Link
