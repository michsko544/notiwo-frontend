import React, { useContext } from "react"
import { H2 } from "components/headings"
import { ConversationViewContainer, TextLine, Break } from "./ConversationView.style"
import { ThemeContext } from "contexts"
import { ConversationContainer } from "containers"
import { Input } from "components/inputs"

const ConversationView = () => {
  const { mode } = useContext(ThemeContext)
  return (
    <ConversationViewContainer>
      <H2>Konwersacja</H2>
      <Break />
      <TextLine mode={mode}>Telefon: 600 600 600</TextLine>
      <TextLine mode={mode}>Zamówienie: Stworzę darmowy serwis do sprzedawania ciuchów</TextLine>
      <Break />
      <ConversationContainer />
      <Input label={"Napisz wiadomość:"} placeholder={"Cześć"} />
    </ConversationViewContainer>
  )
}

export default ConversationView
