import Article from "components/Article"
import { CardContainer, ReviewContainer, ProfileHeaderContainer } from "containers"
import React, { useEffect } from "react"
import { getUserNotices, getUserReviews, useFetch } from "api"
import { ProfileViewGrid } from "./ProfileView.style"
import { PhoneNumberContainer } from "containers"

const FREELANCER = { name: "Michał Skorus", image: "", rate: { value: 3.42, quantity: 124 } }

const ProfileView = ({ match }) => {
  const { response: notices, getData: getNotices } = useFetch(getUserNotices, match.params.id)
  const { response: reviews, getData: getReviews } = useFetch(getUserReviews, match.params.id)

  useEffect(() => {
    if (!notices.isLoading) getNotices()
    if (!reviews.isLoading) getReviews()
  }, [match.params.id])

  return (
    <ProfileViewGrid>
      <div>
        <ProfileHeaderContainer freelancer={FREELANCER} />
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
      <Article title="Ogłoszenia:" style={{ gridColumn: "1/-1" }}>
        <CardContainer notices={notices.data} isLoading={notices.isLoading} />
      </Article>
    </ProfileViewGrid>
  )
}

export default ProfileView
