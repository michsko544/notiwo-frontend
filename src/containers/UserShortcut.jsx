import React, { useContext } from "react"
import UserShortcut from "components/UserShortcut"
import { ThemeContext } from "contexts"
import defaultImage from "images/avatar-circle.png"

const UserShortcutContainer = ({ children, freelancer }) => {
  const { mode } = useContext(ThemeContext)

  return (
    <UserShortcut to={`/user/${freelancer.id}`}>
      <UserShortcut.Thumbnail src={freelancer.thumbnail || defaultImage} alt={"avatar"} />
      <UserShortcut.Pane>
        <UserShortcut.Name color={mode}>{freelancer.name}</UserShortcut.Name>
        {children}
      </UserShortcut.Pane>
    </UserShortcut>
  )
}

export default UserShortcutContainer
