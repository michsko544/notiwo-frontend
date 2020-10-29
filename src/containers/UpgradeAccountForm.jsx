import React from "react"
import { Input, Textarea, Button, InputWrapper, ButtonWrapper } from "components/inputs"
import { Formik, Form, Field } from "formik"

const UpgradeAccountForm = () => {
  const initialValues = {
    description: "",
    phoneNumber: "",
  }

  return (
    <>
      <Formik {...{ initialValues }}>
        <Form>
          <InputWrapper>
            <Field
              label={"Opisz siebie"}
              name="description"
              placeholder={"Jestem Frontend developerem do 10 lat. Pracowałem w takich firmach jak Google, Nokia czy nawet Netflix. "}
              component={Textarea}
            />
          </InputWrapper>
          <InputWrapper>
            <Field label={"Numer telefonu"} type="text" name="phoneNumber" placeholder={"600 700 800"} component={Input} />
          </InputWrapper>
          <ButtonWrapper>
            <Button text="Ulepsz konto" type="submit" />
          </ButtonWrapper>
        </Form>
      </Formik>
    </>
  )
}

export default UpgradeAccountForm
