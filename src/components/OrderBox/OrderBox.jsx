import React from "react"
import { Inner, Icon, Title, Status, Container, Button, UnderBox } from "./OrderBox.style"

export default function OrderBox({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>
}

OrderBox.Icon = function OrderBoxIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>
}

OrderBox.Title = function OrderBoxTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

OrderBox.Status = function OrderBoxStatus({ children, ...restProps }) {
  return <Status {...restProps}>{children}</Status>
}

OrderBox.Container = function OrderBoxContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

OrderBox.UnderBox = function OrderBoxUnderBox({ children, ...restProps }) {
  return <UnderBox {...restProps}>{children}</UnderBox>
}

OrderBox.Button = function OrderBoxButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}
