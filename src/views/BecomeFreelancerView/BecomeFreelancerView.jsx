import React from "react"
import { H1, H2, TitleWrapper } from "components/headings"
import { UpgradeAccountFormContainer } from "containers"

const BecomeFreelancerView = () => {
  return (
    <div className="smallContentContainer">
      <TitleWrapper>
        <H1>Zostań freelancerem!</H1>
        <H2>Zacznij zarabiać już teraz</H2>
      </TitleWrapper>
      <UpgradeAccountFormContainer />
    </div>
  )
}

export default BecomeFreelancerView
