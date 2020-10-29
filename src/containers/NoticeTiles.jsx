import OrderBox from "components/OrderBox"
import React from "react"
import OrderBoxContainer from "./OrderBox"
import Loader from "components/Loader"
import { ReactComponent as EditIcon } from "images/edit.svg"

const NoticeTilesContainer = ({ notices, isLoading }) => {
  const handleButtonClick = (id) => {
    alert("handle edit")
  }

  return (
    <OrderBox.Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {notices.map((notice) => (
            <div>
              <OrderBoxContainer onButtonClick={() => handleButtonClick(notice.id)} title={notice.title} icon={<EditIcon />} />
            </div>
          ))}
        </>
      )}
    </OrderBox.Container>
  )
}

export default NoticeTilesContainer
