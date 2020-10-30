import PhoneNumber from "components/PhoneNumber"
import React, { useState } from "react"
import { ReactComponent as ArrowIcon } from "images/arrow.svg"
import { ThemeContext } from "contexts"
import { useContext } from "react"

const PhoneNumberContainer = ({ number }) => {
  const [isShowed, setShowed] = useState(false)
  const { mode, color } = useContext(ThemeContext)

  return (
    <PhoneNumber>
      {!isShowed && (
        <PhoneNumber.Button onClick={() => setShowed(true)} mode={mode}>
          Pokaż numer telefonu <ArrowIcon style={{ marginLeft: 10 }} />
        </PhoneNumber.Button>
      )}
      {isShowed && <PhoneNumber.Number color={color}>{number}</PhoneNumber.Number>}
    </PhoneNumber>
  )
}

export default PhoneNumberContainer
