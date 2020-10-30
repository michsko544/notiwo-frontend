import React from "react"
import { Button } from "components/inputs"
import { Formik, Form } from "formik"
import UserShortcutContainer from "./UserShortcut"
import RateContainer from "./Rate"
import Offer from "components/Offer"
import Article from "components/Article"
import { ThemeContext } from "contexts"
import { useContext } from "react"

const OrderForm = ({ freelancer, notice, offer }) => {
  const { mode, color } = useContext(ThemeContext)

  const initialValues = {
    freelancer,
    notice,
    offer,
  }

  return (
    <>
      <Formik {...{ initialValues }}>
        <Form>
          <Article title="Podsumowanie:">
            <UserShortcutContainer freelancer={freelancer}>
              <RateContainer rate={freelancer.rate} />
            </UserShortcutContainer>
            <div style={{ content: "", padding: 10 }} />
            <Offer.Text color={mode} style={{ marginBottom: 5 }}>{`Ogłoszenie: ${notice.title}`}</Offer.Text>
            <Offer.Text color={mode} style={{ marginBottom: 5 }}>{`Typ oferty: ${offer.name}`}</Offer.Text>
            <Offer.Text color={mode} style={{ marginBottom: 5 }}>
              {offer.description}
            </Offer.Text>
            <Offer.Text color={mode} style={{ marginBottom: 5 }}>{`Czas realizacji: ${offer.delivery} ${
              offer.delivery === 1 ? "dzień" : "dni"
            }`}</Offer.Text>
            <Offer.PriceWrapper>
              <Offer.PriceLabel color={mode}>Cena: </Offer.PriceLabel>
              <Offer.Price color={color}>{`${offer.price} zł`}</Offer.Price>
            </Offer.PriceWrapper>
          </Article>
          <Button text="Zamów" type="submit" onClick={() => alert("Implement post method")} />
        </Form>
      </Formik>
    </>
  )
}

export default OrderForm
