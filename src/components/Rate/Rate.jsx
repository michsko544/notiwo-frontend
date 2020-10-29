import React, { useContext } from "react"
import { Inner, Icon, Number, Elements } from "./Rate.style"
import { ThemeContext } from "contexts"

export default function Rate({ children, ...restProps }) {
  const { mode, color } = useContext(ThemeContext)

  return (
    <Inner {...restProps} mode={mode} color={color}>
      {children}
    </Inner>
  )
}

Rate.Icon = function RateIcon({ ...restProps }) {
  return <Icon {...restProps} />
}

Rate.Number = function RateNumber({ children, ...restProps }) {
  return <Number {...restProps}>{children}</Number>
}

Rate.Elements = function RateElements({ children, ...restProps }) {
  return <Elements {...restProps}>{children}</Elements>
}
