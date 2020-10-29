import React from "react"
import { H1, TitleWrapper } from "components/headings"
import { LoginFormContainer } from "containers"

const LoginView = () => {
  return (
    <div className="smallContentContainer">
      <TitleWrapper>
        <H1>Zaloguj się i zlecaj pracę!</H1>
      </TitleWrapper>
      <LoginFormContainer />
    </div>
  )
}

export default LoginView
