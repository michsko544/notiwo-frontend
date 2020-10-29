import React from "react"
import { H1, H1Wrapper } from "components/headings"
import Store from "store"
import { OrdersContainer } from "containers"

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

  return (
    <>
      <H1Wrapper>
        <H1>Twoje zamówienia</H1>
      </H1Wrapper>
      <OrdersContainer orders={ORDERS} isLoading={false} />
    </>
  )
}

export default OrdersView
