import React, { useState } from "react"
import { H1, H2, H1Wrapper } from "components/headings"
import Store from "store"
import { OrdersContainer } from "containers"
import Modal from "components/Modal"
import { ReviewFormContainer } from "containers"

const ORDERS = [
  {
    id: 1,
    title: "Stworzę stylową stronę internetową dla twojego sklepu internetowego",
    status: "Złożone",
    rate: null,
    freelancer: { id: 1, name: "Michał Skorus", image: "", rate: { value: 3.42, quantity: 34 } },
  },
  {
    id: 2,
    title: "Stworzę responsywny serwis internetowy - darmowe hostowanie",
    status: "Zrealizowane",
    rate: 3.55,
    freelancer: { id: 2, name: "Michał Skorus", image: "", rate: { value: 4.14, quantity: 124 } },
  },
  {
    id: 3,
    title: "Stworzę stylową stronę internetową dla twojego sklepu internetowego",
    status: "W trakcie realizacji",
    rate: null,
    freelancer: { id: 1, name: "Michał Skorus", image: "", rate: { value: 2.14, quantity: 28 } },
  },
  {
    id: 4,
    title: "Stworzę strone w React",
    status: "Zrealizowane",
    rate: null,
    freelancer: { id: 2, name: "Michał Skorus", image: "", rate: { value: 4.24, quantity: 124 } },
  },
]

const OrdersView = () => {
  const store = Store.useStore()
  const [isReviewOpen, setReviewOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null)

  const handleReviewClick = (id) => {
    setSelectedOrder(ORDERS.find((order) => order.id === id))
    setReviewOpen(true)
  }

  return (
    <>
      <H1Wrapper>
        <H1>Twoje zamówienia</H1>
      </H1Wrapper>
      <OrdersContainer orders={ORDERS} isLoading={false} handleReviewClick={handleReviewClick} />
      <Modal isOpen={isReviewOpen} handleClose={() => setReviewOpen(false)}>
        <div className="smallContentContainer">
          <H2>Recenzja</H2>
          <div style={{ content: "", padding: 15 }} />
          <ReviewFormContainer order={selectedOrder} />
        </div>
      </Modal>
    </>
  )
}

export default OrdersView
