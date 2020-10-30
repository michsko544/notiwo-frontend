import React from "react"
import { Inner, Button, Number } from "./PhoneNumber.style"

export default function PhoneNumber({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>
}

PhoneNumber.Button = function PhoneNumberButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}

PhoneNumber.Number = function PhoneNumberNumber({ children, ...restProps }) {
  return <Number {...restProps}>{children}</Number>
}
