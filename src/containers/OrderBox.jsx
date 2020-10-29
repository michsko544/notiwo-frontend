import React, { useContext } from "react"
import OrderBox from "components/OrderBox"
import { ThemeContext } from "contexts"

const OrderBoxContainer = ({ title, status, marked, onOrderClick, onButtonClick, icon, children, ...restProps }) => {
  const { mode, color } = useContext(ThemeContext)

  return (
    <>
      <OrderBox {...restProps} mode={mode} color={color} marked={marked} onClick={onOrderClick}>
        <OrderBox.Title mode={mode}>{title}</OrderBox.Title>
        {status && <OrderBox.Status mode={mode}>{`Status zamówienia: ${status}`}</OrderBox.Status>}
        <div style={{ width: "fit-content" }}>{children}</div>
        <OrderBox.Icon color={mode.font} onMouseDown={onButtonClick}>
          {icon}
        </OrderBox.Icon>
      </OrderBox>
    </>
  )
}

export default OrderBoxContainer
