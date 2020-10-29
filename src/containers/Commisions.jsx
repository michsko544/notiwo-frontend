import OrderBox from "components/OrderBox"
import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import OrderBoxContainer from "./OrderBox"
import UserShortcutContainer from "./UserShortcut"
import { ThemeContext } from "contexts"
import { ReactComponent as ChatIcon } from "images/chat.svg"
import Loader from "components/Loader"

const CommisionsContainer = ({ orders, isLoading }) => {
  const { mode } = useContext(ThemeContext)
  const history = useHistory()

  const handleOrderClick = (id) => {
    history.push(`/notice/${id}`)
  }

  const handleButtonClick = (id) => {
    history.push(`/conversation/${id}`)
  }

  return (
    <OrderBox.Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {orders.map((order) => (
            <div>
              <OrderBoxContainer
                onOrderClick={() => handleOrderClick(order.id)}
                onButtonClick={() => handleButtonClick(order.id)}
                title={order.title}
                status={order.status}
                marked={order.status === "Złożone"}
                icon={<ChatIcon />}
              >
                <UserShortcutContainer freelancer={order.customer} />
              </OrderBoxContainer>
              {order.status === "Zrealizowane" && order.rate && <OrderBox.UnderBox mode={mode}>{`Oceniono na ${order.rate}`}</OrderBox.UnderBox>}
            </div>
          ))}
        </>
      )}
    </OrderBox.Container>
  )
}

export default CommisionsContainer
