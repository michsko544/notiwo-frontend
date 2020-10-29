import React from "react"
import { Link } from "react-router-dom"
import { ControlPanelRowStyled } from "../ControlPanel.style"
import ControlPanelItem from "../ControlPanelItem"
import Store from "store"

const ControlPanelRow = ({ options, selectedOption, isTogglable, ...restProps }) => {
  const store = Store.useStore()

  const handleSelect = (value) => {
    if (selectedOption.id === value) {
      if (isTogglable) {
        store.set(selectedOption.type)(0)
      }
    } else {
      store.set(selectedOption.type)(value)
    }
  }

  return (
    <ControlPanelRowStyled {...restProps}>
      {options.map((option) => (
        <div key={option.id}>
          {selectedOption.type === "selectedCategory" ? (
            <Link to={`/notices/${options.find((elem) => elem.id === option.id)?.nameInUrl}`}>
              <ControlPanelItem onClick={() => handleSelect(option.id)} selected={selectedOption.id === option.id ? true : false}>
                {option.name}
              </ControlPanelItem>
            </Link>
          ) : (
            <ControlPanelItem onClick={() => handleSelect(option.id)} selected={selectedOption.id === option.id ? true : false}>
              {option.name}
            </ControlPanelItem>
          )}
        </div>
      ))}
    </ControlPanelRowStyled>
  )
}

export default ControlPanelRow
