import React, { useContext } from "react"
import Rate from "components/Rate"
import { ThemeContext } from "contexts"
import star from "images/star.svg"
import { ReactComponent as StarIcon } from "images/star.svg"

const RateContainer = ({ rate }) => {
  const { color, mode } = useContext(ThemeContext)

  return (
    <Rate>
      <Rate.Icon color={color} src={star}>
        <StarIcon />
      </Rate.Icon>
      <Rate.Number color={color}>{rate.value}</Rate.Number> <Rate.Elements mode={mode}> {rate.quantity ? `(${rate.quantity})` : ""}</Rate.Elements>
    </Rate>
  )
}

export default RateContainer
