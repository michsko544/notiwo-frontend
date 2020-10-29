import React from "react"
import NoticeHeader from "components/NoticeHeader"
import defaultImg from "images/computer_image.png"
import { H2 } from "components/headings"

const NoticeHeaderContainer = ({ header }) => {
  return (
    <NoticeHeader>
      <NoticeHeader.Image src={header.image || defaultImg} alt={"display-image"} />
      <NoticeHeader.Break />
      <H2>{header.title}</H2>
    </NoticeHeader>
  )
}

export default NoticeHeaderContainer
