import React from "react"
import { Container, Message, MessageBox, MessageTime, Thumbnail, MessageText } from "./Conversation.style"

export default function Conversation({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Conversation.Message = function ConversationMessage({ children, ...restProps }) {
  return <Message {...restProps}>{children}</Message>
}

Conversation.MessageBox = function ConversationMessageBox({ children, ...restProps }) {
  return <MessageBox {...restProps}>{children}</MessageBox>
}

Conversation.MessageTime = function ConversationMessageTime({ children, ...restProps }) {
  return <MessageTime {...restProps}>{children}</MessageTime>
}

Conversation.Thumbnail = function ConversationThumbnail({ ...restProps }) {
  return <Thumbnail {...restProps} />
}

Conversation.MessageText = function ConversationMessageText({ children, ...restProps }) {
  return <MessageText {...restProps}>{children}</MessageText>
}
