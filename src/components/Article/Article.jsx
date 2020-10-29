import { H3 } from "components/headings"
import React, { useContext } from "react"
import { Text, Inner } from "./Article.style"
import { ThemeContext } from "contexts"

export default function Article({ children, title, ...restProps }) {
  const { mode } = useContext(ThemeContext)

  return (
    <Inner {...restProps}>
      <H3>{title}</H3>
      <Text color={mode}>{children}</Text>
    </Inner>
  )
}
