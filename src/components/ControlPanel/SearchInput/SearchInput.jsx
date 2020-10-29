import React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "contexts"
import { InputStyled, Label } from "./SearchInput.style"

const SearchInput = ({ label, name, field, ...props }) => {
  const { mode } = React.useContext(ThemeContext)

  return (
    <>
      <Label htmlFor={name} color={mode.font}>
        {label}
      </Label>
      <InputStyled autoComplete="off" id={name} name={name} color={mode} {...field} {...props} placeholder={"Wpisz czego szukasz.."} />
    </>
  )
}

SearchInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default SearchInput
