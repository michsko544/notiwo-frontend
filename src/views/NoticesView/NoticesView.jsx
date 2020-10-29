import React, { useEffect } from "react"
import ControlPanel from "components/ControlPanel"
import { CardContainer } from "containers"
import Store from "store"
import { getCategories, getNotices, useFetch } from "api"

const NoticesView = ({ match }) => {
  const store = Store.useStore()
  const { response: notices, getData: getNoticesData } = useFetch(getNotices, match.params.category)

  useEffect(() => {
    if (!notices.isLoading) getNoticesData()
  }, [match.params.category])

  useEffect(() => {
    var selectedCategoryId
    var categories = store.get("categoryOptions")
    const asyncCategories = async () => {
      try {
        const response = await getCategories()
        if (response.ok) {
          const categories = response.data.map((category) => ({ ...category }))
          selectedCategoryId = categories.find((elem) => elem.nameInUrl === match.params.category).id
          store.set("categoryOptions")(categories)
          store.set("selectedCategory")(selectedCategoryId)
        }
      } catch (error) {}
    }
    if (categories.length <= 0) {
      asyncCategories()
    } else {
      selectedCategoryId = categories.find((elem) => elem.nameInUrl === match.params.category).id
    }

    if (store.get("selectedCategory") !== selectedCategoryId) store.set("selectedCategory")(selectedCategoryId)
  }, [match.params.category])

  return (
    <>
      <ControlPanel />
      <CardContainer notices={notices.data} isLoading={notices.isLoading} />
    </>
  )
}

export default NoticesView
