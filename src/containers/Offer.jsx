import ControlPanelRow from "components/ControlPanel/ControlPanelRow"
import { Button } from "components/inputs"
import React, { useContext, useEffect, useState } from "react"
import Store from "store"
import { ThemeContext } from "contexts"
import Offer from "components/Offer"

const OfferContainer = ({ offers }) => {
  const store = Store.useStore()
  const { mode, color } = useContext(ThemeContext)

  const [offer, setOffer] = useState({})

  useEffect(() => {
    setOffer(offers.find((elem) => elem.id === store.get("selectedOffer")))
  }, [store])

  return (
    <>
      <ControlPanelRow
        style={{ justifyContent: "space-between" }}
        options={offers.map((elem) => ({
          id: elem.id,
          name: elem.name,
        }))}
        selectedOption={{ id: store.get("selectedOffer"), type: "selectedOffer" }}
      />
      <Offer>
        <Offer.Text color={mode}>{offer.description}</Offer.Text>
        <Offer.Text color={mode}>{`Czas realizacji: ${offer.delivery} ${offer.delivery === 1 ? "dzień" : "dni"}`}</Offer.Text>
        <Offer.PriceWrapper>
          <Offer.PriceLabel color={mode}>Cena: </Offer.PriceLabel>
          <Offer.Price color={color}>200zł</Offer.Price>
        </Offer.PriceWrapper>
      </Offer>
      {store.get("authToken") && <Button text="Zleć" />}
    </>
  )
}

export default OfferContainer
