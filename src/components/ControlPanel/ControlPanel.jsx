import React from "react"
import { ControlPanelStyled } from "./ControlPanel.style"
import ControlPanelRow from "./ControlPanelRow"
import { Field, Form, Formik } from "formik"
import Store from "store"
import SearchInput from "./SearchInput"

const SORT = [
  { id: 1, name: "wg popularności" },
  { id: 2, name: "wg najnowszego" },
  { id: 3, name: "wg najstarszego" },
  { id: 4, name: "wg najdroższego" },
  { id: 5, name: "wg najtańszego" },
]

const OPTION_GROUPS = [
  { id: 0, name: "Kategorie" },
  { id: 1, name: "Sortowanie" },
  { id: 2, name: "Szukanie" },
]

const ControlPanel = ({ ...restProps }) => {
  const store = Store.useStore()

  const optionsSelector = (optionGroup) => {
    switch (optionGroup) {
      case OPTION_GROUPS[0].id:
        return (
          <ControlPanelRow options={store.get("categoryOptions")} selectedOption={{ id: store.get("selectedCategory"), type: "selectedCategory" }} />
        )
      case OPTION_GROUPS[1].id:
        return <ControlPanelRow options={SORT} selectedOption={{ id: store.get("selectedSort"), type: "selectedSort" }} isTogglable={true} />
      case OPTION_GROUPS[2].id:
        return (
          <Formik initialValues={{ search: "" }}>
            <Form>
              <Field name="search" label="Szukaj" component={SearchInput} />
            </Form>
          </Formik>
        )
      default:
        return <></>
    }
  }

  return (
    <ControlPanelStyled {...restProps}>
      <ControlPanelRow options={OPTION_GROUPS} selectedOption={{ id: store.get("selectedOptionGroup"), type: "selectedOptionGroup" }} />
      {optionsSelector(store.get("selectedOptionGroup"))}
    </ControlPanelStyled>
  )
}

export default ControlPanel
