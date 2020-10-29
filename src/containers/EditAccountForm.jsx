import React from "react"
import { Input, Button, InputWrapper, ButtonWrapper } from "components/inputs"
import { Formik, Form, Field } from "formik"

const EditAccountForm = () => {
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    oldPassword: "",
    newPassword: "",
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
            <Field label={"Stare Hasło"} type="password" name="oldPassword" placeholder={"*************"} component={Input} />
          </InputWrapper>
          <InputWrapper>
            <Field label={"Nowe hasło"} type="password" name="newPassword" placeholder={"*************"} component={Input} />
          </InputWrapper>
          <ButtonWrapper>
            <Button text="Edytuj" type="submit" />
          </ButtonWrapper>
        </Form>
      </Formik>
    </>
  )
}

export default EditAccountForm
