import React, { useEffect } from "react"
import Article from "components/Article"
import { UserShortcutContainer, RateContainer, ReviewContainer, OfferContainer, NoticeHeaderContainer } from "containers"
import { NoticeViewGrid, Break } from "./NoticeView.style"
import { getNoticeReviews, useFetch } from "api"

const NoticeView = ({ match }) => {
  const FREELANCER = { id: 1, name: "Michał Skorus", rate: 1.3, thumbnail: "" }
  const OFFERS = [
    {
      id: 0,
      name: "Podstawowa",
      description:
        "Lorem Ipsum HIHIH simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.",

      delivery: 30,
    },
    {
      id: 1,
      name: "Standardowa",
      description:
        "Lorem Ipsum SIMPL simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.",
      delivery: 1,
    },
    {
      id: 2,
      name: "Premium",
      description:
        "Lorem Ipsum NOR simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.",
      delivery: 20,
    },
  ]

  const { response: reviews, getData: getReviews } = useFetch(getNoticeReviews, match.params.id)

  useEffect(() => {
    if (!reviews.isLoading) getReviews()
  }, [match.params.id])

  return (
    <NoticeViewGrid>
      <NoticeHeaderContainer header={{ title: "Hello world of notices", image: "" }} />
      <Article title="Oferta:">
        <OfferContainer offers={OFFERS} />
      </Article>
      <div>
        <UserShortcutContainer freelancer={FREELANCER}>
          <RateContainer rate={{ value: FREELANCER.rate, quantity: 1 }} />
        </UserShortcutContainer>
        <Break />
        <Article title="O mnie:">
          Vivamus ut dolor quis nunc porta condimentum id et nisi. Fusce pretium, nulla faucibus bibendum semper, erat tellus tempus turpis, vitae
          interdum purus diam sit amet nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lacinia
          felis non augue malesuada consectetur. Aenean a diam est. In vel porta arcu. Nam metus nisi, mattis at velit non, pretium scelerisque
          lectus. Donec et pharetra dui.
        </Article>
      </div>
      <Article title="Recenzje:">
        <ReviewContainer reviews={reviews.data} isLoading={reviews.isLoading} />
      </Article>
    </NoticeViewGrid>
  )
}

export default NoticeView
