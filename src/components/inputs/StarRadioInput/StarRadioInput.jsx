import React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "contexts"
import { Label, StarRadioInputStyled } from "./StarRadioInput.style"
import { ReactComponent as StarIcon } from "images/star.svg"
import { useEffect } from "react"

const StarRadioInput = ({ name, field, selectedValue, inputNumber, ...props }) => {
  const { mode, color } = React.useContext(ThemeContext)

  return (
    <Label>
      <StarRadioInputStyled autoComplete="off" id={name} name={name} color={mode} type="radio" {...field} {...props} />
      <StarIcon color={inputNumber <= selectedValue ? color.second : mode.font} />
    </Label>
  )
}

StarRadioInput.propTypes = {
  name: PropTypes.string,
}

export default StarRadioInput
