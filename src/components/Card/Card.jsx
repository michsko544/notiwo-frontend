import React from "react"
import { Inner, Container, Title, Image, Break, Price, Bottom, Pane } from "./Card.style"

export default function Card({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>
}

Card.Container = function CardContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Card.Break = function CardBreak({ ...restProps }) {
  return <Break {...restProps} />
}

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />
}

Card.Price = function CardPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>
}

Card.Bottom = function CardBottom({ children, ...restProps }) {
  return <Bottom {...restProps}>{children}</Bottom>
}

Card.Pane = function CardPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}
