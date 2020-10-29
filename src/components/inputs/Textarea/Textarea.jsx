import React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "contexts"
import { Label, TextareaStyled } from "./Textarea.style"
import InputError from "../InputError"

const Textarea = ({ label, error, name, field, ...props }) => {
  const { mode } = React.useContext(ThemeContext)

  return (
    <>
      <Label htmlFor={name} color={mode.font}>
        {label}
      </Label>
      <TextareaStyled autoComplete="off" id={name} name={name} color={mode} {...field} {...props} />
      {error && <InputError error={error} color={mode.font} />}
    </>
  )
}

Textarea.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default Textarea
