import React from "react"
import { Input, Button, InputWrapper, ButtonWrapper } from "components/inputs"
import { Formik, Form, Field } from "formik"
import FormLink, { LinkWrapper } from "components/FormLink"

const RegisterForm = () => {
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    firstPassword: "",
    secondPassword: "",
  }

  return (
    <>
      <Formik {...{ initialValues }}>
        <Form>
          <InputWrapper>
            <Field label={"Email"} type="email" name="email" placeholder={"tomek@example.com"} component={Input} />
          </InputWrapper>
          <InputWrapper>
            <Field label={"Imię"} type="text" name="firstName" placeholder={"Tomek"} component={Input} />
          </InputWrapper>
          <InputWrapper>
            <Field label={"Nazwisko"} type="text" name="lastName" placeholder={"Kowalski"} component={Input} />
          </InputWrapper>
          <InputWrapper>
            <Field label={"Hasło"} type="password" name="firstPassword" placeholder={"*************"} component={Input} />
          </InputWrapper>
          <InputWrapper>
            <Field label={"Powtórz hasło"} type="password" name="secondPassword" placeholder={"*************"} component={Input} />
          </InputWrapper>
          <ButtonWrapper>
            <Button text="Zarejestruj" type="submit" />
          </ButtonWrapper>
        </Form>
      </Formik>
      <LinkWrapper>
        <FormLink to="/Login">Masz już konto?</FormLink>
      </LinkWrapper>
    </>
  )
}

export default RegisterForm
