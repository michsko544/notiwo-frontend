import React from "react"
import { H1, TitleWrapper } from "components/headings"
import { RegisterFormContainer } from "containers"

const RegisterView = () => {
  return (
    <div className="smallContentContainer">
      <TitleWrapper>
        <H1>Zarejestruj się, aby zlecać lub ogłaszać się!</H1>
      </TitleWrapper>
      <RegisterFormContainer />
    </div>
  )
}

export default RegisterView
