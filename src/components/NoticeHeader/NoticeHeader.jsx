import React from "react"
import { Inner, Image, Break } from "./NoticeHeader.style"

export default function NoticeHeader({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>
}

NoticeHeader.Image = function NoticeHeaderImage({ ...restProps }) {
  return <Image {...restProps} />
}

NoticeHeader.Break = function NoticeHeaderBreak({ ...restProps }) {
  return <Break {...restProps} />
}
