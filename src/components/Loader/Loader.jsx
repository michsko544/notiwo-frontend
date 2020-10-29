import React from "react"
import { Container, Inner } from "./Loader.style"
import { ThemeContext } from "contexts"

const Loader = () => {
  const { mode } = React.useContext(ThemeContext)

  return (
    <Container>
      <Inner color={mode} />
    </Container>
  )
}

export default Loader
