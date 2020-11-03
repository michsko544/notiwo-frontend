import React, { useContext } from "react"
import Conversation from "components/Conversation"
import { ThemeContext } from "contexts"
import defaultImg from "images/avatar-circle.png"

const ConversationContainer = () => {
  const { mode } = useContext(ThemeContext)

  return (
    <Conversation>
      <Conversation.Message me={true}>
        <Conversation.MessageBox mode={mode} me={true}>
          <Conversation.MessageText>Hej</Conversation.MessageText>
          <Conversation.Thumbnail src={defaultImg} alt="thumbnail" />
        </Conversation.MessageBox>
        <Conversation.MessageTime mode={mode} me={true}>
          42 minuty temu
        </Conversation.MessageTime>
      </Conversation.Message>
      <Conversation.Message me={false}>
        <Conversation.MessageBox mode={mode} me={false}>
          <Conversation.MessageText>Hej</Conversation.MessageText>
          <Conversation.Thumbnail src={defaultImg} alt="thumbnail" />
        </Conversation.MessageBox>
        <Conversation.MessageTime mode={mode} me={false}>
          22 minuty temu
        </Conversation.MessageTime>
      </Conversation.Message>
      <Conversation.Message me={true}>
        <Conversation.MessageBox mode={mode} me={true}>
          <Conversation.MessageText>Czy oferuje Pan również usługi utrzymywania oprogramowania?</Conversation.MessageText>
          <Conversation.Thumbnail src={defaultImg} alt="thumbnail" />
        </Conversation.MessageBox>
        <Conversation.MessageTime mode={mode} me={true}>
          2 minuty temu
        </Conversation.MessageTime>
      </Conversation.Message>
      <Conversation.Message me={false}>
        <Conversation.MessageBox mode={mode} me={false}>
          <Conversation.MessageText>
            Na obecną chwilę nie posiadam w swojej ofercie takich udogodnień. A jakie usługi by Pana interesowały konkretnie?
          </Conversation.MessageText>
          <Conversation.Thumbnail src={defaultImg} alt="thumbnail" />
        </Conversation.MessageBox>
        <Conversation.MessageTime mode={mode} me={false}>
          1 minuty temu
        </Conversation.MessageTime>
      </Conversation.Message>
      <Conversation.Message me={false}>
        <Conversation.MessageBox mode={mode} me={false}>
          <Conversation.MessageText>
            Na obecną chwilę nie posiadam w swojej ofercie takich udogodnień. A jakie usługi by Pana interesowały konkretnie?
          </Conversation.MessageText>
          <Conversation.Thumbnail src={defaultImg} alt="thumbnail" />
        </Conversation.MessageBox>
        <Conversation.MessageTime mode={mode} me={false}>
          1 minuty temu
        </Conversation.MessageTime>
      </Conversation.Message>
    </Conversation>
  )
}

export default ConversationContainer
