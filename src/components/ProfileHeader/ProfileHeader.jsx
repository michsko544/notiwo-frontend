import React from "react"
import { Inner, Image, TextWrapper, Name, Rate } from "./ProfileHeader.style"

export default function ProfileHeader({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>
}

ProfileHeader.Image = function ProfileHeaderImage({ ...restProps }) {
  return <Image {...restProps} />
}

ProfileHeader.TextWrapper = function ProfileHeaderTextWrapper({ children, ...restProps }) {
  return <TextWrapper {...restProps}>{children}</TextWrapper>
}

ProfileHeader.Rate = function ProfileHeaderRate({ children, ...restProps }) {
  return <Rate {...restProps}>{children}</Rate>
}

ProfileHeader.Name = function ProfileHeaderName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>
}
