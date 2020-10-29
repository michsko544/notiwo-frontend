import React from "react"
import { Input, Button, InputWrapper, ButtonWrapper } from "components/inputs"
import { Formik, Form, Field } from "formik"
import FormLink, { LinkWrapper } from "components/FormLink"

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  }

  return (
    <>
      <Formik {...{ initialValues }}>
        <Form>
          <InputWrapper>
            <Field label={"Email"} type="email" name="email" placeholder={"tomek@example.com"} component={Input} />
          </InputWrapper>
          <InputWrapper>
            <Field label={"Hasło"} type="password" name="password" placeholder={"*************"} component={Input} />
          </InputWrapper>
          <ButtonWrapper>
            <Button text="Zaloguj" type="submit" />
          </ButtonWrapper>
        </Form>
      </Formik>
      <LinkWrapper>
        <FormLink to="/register">Nie masz konta?</FormLink>
      </LinkWrapper>
    </>
  )
}

export default LoginForm
