import OrderBox from "components/OrderBox"
import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import OrderBoxContainer from "./OrderBox"
import RateContainer from "./Rate"
import UserShortcutContainer from "./UserShortcut"
import { ThemeContext } from "contexts"
import { ReactComponent as ArrowIcon } from "images/arrow.svg"
import { ReactComponent as ChatIcon } from "images/chat.svg"
import Loader from "components/Loader"

const OrdersContainer = ({ orders, isLoading }) => {
  const { mode } = useContext(ThemeContext)
  const history = useHistory()

  const handleOrderClick = (id) => {
    history.push(`/notice/${id}`)
  }

  const handleButtonClick = (id) => {
    history.push(`/conversation/${id}`)
  }

  const handleReviewClick = (id) => {
    alert("handle add review")
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
                <UserShortcutContainer freelancer={order.freelancer}>
                  <RateContainer rate={order.freelancer.rate} />
                </UserShortcutContainer>
              </OrderBoxContainer>
              {order.status === "Zrealizowane" &&
                (order.rate ? (
                  <OrderBox.UnderBox mode={mode}>{`Oceniono na ${order.rate}`}</OrderBox.UnderBox>
                ) : (
                  <OrderBox.UnderBox mode={mode}>
                    <OrderBox.Button mode={mode} onClick={handleReviewClick}>
                      {"Oceń zamówienie"} <ArrowIcon />
                    </OrderBox.Button>
                  </OrderBox.UnderBox>
                ))}
            </div>
          ))}
        </>
      )}
    </OrderBox.Container>
  )
}

export default OrdersContainer
