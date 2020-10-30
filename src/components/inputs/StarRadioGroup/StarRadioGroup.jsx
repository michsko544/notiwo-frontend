import React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "contexts"
import { Label, StarRadioGroupStyled } from "./StarRadioGroup.style"
import InputError from "../InputError"

const StarRadioGroup = ({ label, error, name, children, ...props }) => {
  const { mode } = React.useContext(ThemeContext)

  return (
    <>
      <Label htmlFor={name} color={mode.font}>
        {label}
      </Label>
      <StarRadioGroupStyled id={name} name={name} {...props}>
        {children}
      </StarRadioGroupStyled>
      {error && <InputError error={error} color={mode.font} />}
    </>
  )
}

StarRadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default StarRadioGroup
