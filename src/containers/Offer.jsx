import ControlPanelRow from "components/ControlPanel/ControlPanelRow"
import { Button } from "components/inputs"
import React, { useContext, useEffect, useState } from "react"
import Store from "store"
import { ThemeContext } from "contexts"
import Offer from "components/Offer"
import Modal from "components/Modal"
import { OrderFormContainer } from "containers"
import { H2 } from "components/headings"

const OfferContainer = ({ offers, freelancer, notice }) => {
  const store = Store.useStore()
  const { mode, color } = useContext(ThemeContext)

  const [offer, setOffer] = useState({})
  const [isBuyModalOpen, setBuyModalOpen] = useState(false)

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
          <Offer.Price color={color}>{`${offer.price} zł`}</Offer.Price>
        </Offer.PriceWrapper>
      </Offer>
      {store.get("authToken") && <Button text="Zleć" onClick={() => setBuyModalOpen(true)} />}
      <Modal isOpen={isBuyModalOpen} handleClose={() => setBuyModalOpen(false)}>
        <div className="smallContentContainer">
          <H2>Tylko krok dzieli Cię od złożenia zamówienia</H2>
          <div style={{ content: "", padding: 15 }} />
          <OrderFormContainer freelancer={freelancer} notice={notice} offer={offer} />
        </div>
      </Modal>
    </>
  )
}

export default OfferContainer
