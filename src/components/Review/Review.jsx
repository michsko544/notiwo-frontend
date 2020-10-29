import React from "react"
import { Inner, Container, Header, Paragraph, LineWithRate, Subrate, Rate, RateWrapper, RateTitle, Icon } from "./Review.style"

export default function Review({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>
}

Review.Container = function ReviewContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Review.Header = function ReviewHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}

Review.Paragraph = function ReviewParagraph({ children, ...restProps }) {
  return <Paragraph {...restProps}>{children}</Paragraph>
}

Review.LineWithRate = function ReviewLineWithRate({ children, ...restProps }) {
  return <LineWithRate {...restProps}>{children}</LineWithRate>
}

Review.Subrate = function ReviewSubrate({ children, ...restProps }) {
  return <Subrate {...restProps}>{children}</Subrate>
}

Review.RateWrapper = function ReviewRateWrapper({ children, ...restProps }) {
  return <RateWrapper {...restProps}>{children}</RateWrapper>
}

Review.Rate = function ReviewRate({ children, ...restProps }) {
  return <Rate {...restProps}>{children}</Rate>
}

Review.RateTitle = function ReviewRateTitle({ children, ...restProps }) {
  return <RateTitle {...restProps}>{children}</RateTitle>
}

Review.Icon = function ReviewIcon({ ...restProps }) {
  return <Icon {...restProps} />
}
