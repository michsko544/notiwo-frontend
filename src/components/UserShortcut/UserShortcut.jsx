import React from "react"
import { useHistory } from "react-router-dom"

import { Inner, Thumbnail, Name, Pane } from "./UserShortcut.style"

export default function UserShortcut({ children, to, ...restProps }) {
  const history = useHistory()
  return (
    <Inner {...restProps} onMouseDown={() => history.push(to)}>
      {children}
    </Inner>
  )
}

UserShortcut.Thumbnail = function UserShortcutThumbnail({ ...restProps }) {
  return <Thumbnail {...restProps} />
}

UserShortcut.Name = function UserShortcutName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>
}

UserShortcut.Pane = function UserShortcutPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}
