import React, { useContext } from "react"
import { ControlPanelItemStyled } from "../ControlPanel.style"
import { ThemeContext } from "contexts"

const ControlPanelItem = ({ children, ...restProps }) => {
  const { mode } = useContext(ThemeContext)
  return (
    <ControlPanelItemStyled color={mode.font} {...restProps}>
      {children}
    </ControlPanelItemStyled>
  )
}

export default ControlPanelItem
