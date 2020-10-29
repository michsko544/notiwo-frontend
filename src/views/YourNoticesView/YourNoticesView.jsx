import React from "react"
import { H1, H1Wrapper } from "components/headings"
import Store from "store"
import { NoticeTilesContainer } from "containers"

const NOTICES = [
  {
    id: 1,
    title: "Stworzę stylową stronę internetową dla twojego sklepu internetowego",
    isActive: true,
  },
  {
    id: 2,
    title: "Stworzę responsywny serwis internetowy - darmowe hostowanie",
    isActive: true,
  },
  {
    id: 3,
    title: "Stworzę stylową stronę internetową dla twojego sklepu internetowego",
    isActive: true,
  },
  {
    id: 4,
    title: "Stworzę strone w React",
    isActive: true,
  },
]

const YourNoticesView = () => {
  const store = Store.useStore()

  return (
    <>
      <H1Wrapper>
        <H1>Twoje ogłoszenia</H1>
      </H1Wrapper>
      <NoticeTilesContainer notices={NOTICES} isLoading={false} />
    </>
  )
}

export default YourNoticesView
