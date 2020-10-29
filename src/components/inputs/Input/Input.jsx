import React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "contexts"
import { InputStyled, Label } from "./Input.style"
import InputError from "../InputError"

const Input = ({ label, error, name, field, ...props }) => {
  const { mode } = React.useContext(ThemeContext)

  return (
    <>
      <Label htmlFor={name} color={mode.font}>
        {label}
      </Label>
      <InputStyled autoComplete="off" id={name} name={name} color={mode} {...field} {...props} />
      {error && <InputError error={error} color={mode.font} />}
    </>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default Input
