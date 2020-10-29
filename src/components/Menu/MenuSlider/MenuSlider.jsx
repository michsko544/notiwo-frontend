import React from "react"
import { NavPanel, ProfileLink, UserShortcutWrapper } from "./MenuSlider.style"
import { IconPosition } from "../Menu.style"
import CloseBtn from "../CloseBtn"
import { UserShortcutContainer } from "containers"
import Store from "store"

const freelancer = { name: "Michał Skorus", image: "", rate: { value: 3.42, quantity: 124 } }

const MenuSlider = ({ mode, color, visibility, toggleMenu, children }) => {
  const store = Store.useStore()

  return (
    <NavPanel visible={visibility} color={mode.alternative}>
      <IconPosition>
        <CloseBtn handleMouseDown={toggleMenu} color={mode.font} />
      </IconPosition>
      {children}
      {store.get("authToken") && (
        <UserShortcutWrapper onClick={toggleMenu}>
          <UserShortcutContainer freelancer={freelancer}>
            <ProfileLink to={`/user/${freelancer.id}`} color={color} onClick={toggleMenu}>
              Zobacz profil
            </ProfileLink>
          </UserShortcutContainer>
        </UserShortcutWrapper>
      )}
    </NavPanel>
  )
}

export default MenuSlider
