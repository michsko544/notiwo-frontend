import Article from "components/Article"
import React, { useContext } from "react"
import { H1, H1Wrapper } from "components/headings"
import { EditAccountFormContainer } from "containers"
import { Line, Switch, SwitchElement, ArticleContainer } from "./SettingsView.style"
import { ThemeContext } from "contexts"
import Store from "store"
import { useLogout } from "hooks"

const SettingsView = () => {
  const { mode } = useContext(ThemeContext)
  const store = Store.useStore()
  const forceLogout = useLogout()

  const setMode = (mode) => {
    store.set("mode")(mode)
    localStorage.setItem("mode", mode)
  }

  return (
    <>
      <H1Wrapper>
        <H1>Ustawienia</H1>
      </H1Wrapper>
      <ArticleContainer>
        <Article title="Ogólne:">
          <Line mode={mode}>
            Tryb nocny:{" "}
            <Switch mode={mode}>
              <SwitchElement mode={mode} selected={store.get("mode") === "dark"} onClick={() => setMode("dark")}>
                On
              </SwitchElement>
              /
              <SwitchElement mode={mode} selected={store.get("mode") === "light"} onClick={() => setMode("light")}>
                Off
              </SwitchElement>
            </Switch>
          </Line>
          <Line mode={mode} style={{ cursor: "pointer" }} onClick={forceLogout}>
            Wyloguj się
          </Line>
          <div style={{ content: "", padding: 8 }} />
        </Article>
        <Article title="Konta:">
          <EditAccountFormContainer />
        </Article>
      </ArticleContainer>
    </>
  )
}

export default SettingsView
