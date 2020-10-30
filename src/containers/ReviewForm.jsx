import React from "react"
import { Button, ButtonWrapper, Textarea, InputWrapper, StarRadioInput, StarRadioGroup } from "components/inputs"
import { Formik, Form, Field } from "formik"
import UserShortcutContainer from "./UserShortcut"
import RateContainer from "./Rate"
import Offer from "components/Offer"
import { ThemeContext } from "contexts"
import { useContext } from "react"

const ReviewForm = ({ order }) => {
  const { mode, color } = useContext(ThemeContext)

  const initialValues = {
    review: "",
    order,
    serviceQuality: "",
    communication: "",
    compatibility: "",
  }

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values)
  }

  return (
    <>
      {order && (
        <Formik {...{ initialValues, onSubmit }}>
          {({ values }) => (
            <Form>
              <InputWrapper>
                <Offer.Text color={mode} style={{ marginBottom: 5 }}>{`Zamówienie: ${order.title}`}</Offer.Text>
              </InputWrapper>
              <InputWrapper>
                <UserShortcutContainer freelancer={order.freelancer}>
                  <RateContainer rate={order.freelancer.rate} />
                </UserShortcutContainer>
              </InputWrapper>

              <StarRadioGroup label="Jakość usługi:">
                {[...Array(5)].map((input, i) => (
                  <Field name="serviceQuality" value={i + 1} inputNumber={i + 1} selectedValue={values.serviceQuality} component={StarRadioInput} />
                ))}
              </StarRadioGroup>

              <StarRadioGroup label="Komunikacja:">
                {[...Array(5)].map((input, i) => (
                  <Field name="communication" value={i + 1} inputNumber={i + 1} selectedValue={values.communication} component={StarRadioInput} />
                ))}
              </StarRadioGroup>

              <StarRadioGroup label="Zgodność z opisem:">
                {[...Array(5)].map((input, i) => (
                  <Field name="compatibility" value={i + 1} inputNumber={i + 1} selectedValue={values.compatibility} component={StarRadioInput} />
                ))}
              </StarRadioGroup>

              <InputWrapper>
                <Field
                  label={"Recenzja"}
                  name="review"
                  placeholder={"Bardzo podoba mi się efekt współpracy, polecam wszystkim tego Pana! :D"}
                  component={Textarea}
                />
              </InputWrapper>
              <ButtonWrapper>
                <Button text="Zrecenzuj" type="submit" />
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      )}
    </>
  )
}

export default ReviewForm
