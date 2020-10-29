import React from "react"
import { H1, H1Wrapper } from "components/headings"
import Store from "store"
import { CommisionsContainer } from "containers"

const ORDERS = [
  {
    id: 1,
    title: "Stworzę stylową stronę internetową dla twojego sklepu internetowego",
    status: "Złożone",
    rate: null,
    customer: { id: 1, name: "Grzegorz Schetyn", image: "" },
  },
  {
    id: 2,
    title: "Stworzę responsywny serwis internetowy - darmowe hostowanie",
    status: "Zrealizowane",
    rate: 3.55,
    customer: { id: 2, name: "Sławomir Napieralski", image: "" },
  },
  {
    id: 3,
    title: "Stworzę stylową stronę internetową dla twojego sklepu internetowego",
    status: "W trakcie realizacji",
    rate: null,
    customer: { id: 1, name: "Anna Mysz", image: "" },
  },
  {
    id: 4,
    title: "Stworzę strone w React",
    status: "Zrealizowane",
    rate: null,
    customer: { id: 2, name: "Piter Kot", image: "" },
  },
]

const CommisionsView = () => {
  const store = Store.useStore()

  return (
    <>
      <H1Wrapper>
        <H1>Twoje zlecenia</H1>
      </H1Wrapper>
      <CommisionsContainer orders={ORDERS} isLoading={false} />
    </>
  )
}

export default CommisionsView
