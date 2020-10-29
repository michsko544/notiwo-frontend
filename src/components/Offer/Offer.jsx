import React from "react"
import { Inner, Text, Price, PriceLabel, PriceWrapper } from "./Offer.style"

export default function Offer({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>
}

Offer.Text = function OfferText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Offer.Price = function OfferPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>
}

Offer.PriceLabel = function OfferPriceLabel({ children, ...restProps }) {
  return <PriceLabel {...restProps}>{children}</PriceLabel>
}

Offer.PriceWrapper = function OfferPriceWrapper({ children, ...restProps }) {
  return <PriceWrapper {...restProps}>{children}</PriceWrapper>
}
