import ProfileHeader from "components/ProfileHeader"
import React, { useContext } from "react"
import defaultImg from "images/avatar-circle.png"
import RateContainer from "./Rate"
import { ThemeContext } from "contexts"

const ProfileHeaderContainer = ({ freelancer }) => {
  const { mode } = useContext(ThemeContext)

  return (
    <ProfileHeader>
      <ProfileHeader.Image src={freelancer.image || defaultImg} alt="thumbnail-image" />
      <ProfileHeader.TextWrapper>
        <ProfileHeader.Name mode={mode}>{freelancer.name}</ProfileHeader.Name>
        <ProfileHeader.Rate>
          <RateContainer rate={freelancer.rate} />
        </ProfileHeader.Rate>
      </ProfileHeader.TextWrapper>
    </ProfileHeader>
  )
}

export default ProfileHeaderContainer
