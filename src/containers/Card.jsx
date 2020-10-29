import React from "react"
import Card from "components/Card"
import { ThemeContext } from "contexts"
import defaultImg from "images/computer_image.png"
import { displayPrice } from "utils"
import Loader from "components/Loader"
import UserShortcut from "./UserShortcut"
import Rate from "./Rate"
import { H2 } from "components/headings"

const CardContainer = ({ notices, isLoading }) => {
  const { mode, color } = React.useContext(ThemeContext)

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {notices?.length !== 0 ? (
            <Card.Container>
              {notices?.map((notice) => (
                <Card key={notice.id} color={mode} to={`/notice/${notice.id}`}>
                  <Card.Image src={notice.image || defaultImg} alt="computer" />
                  <Card.Pane>
                    <Card.Title color={mode}>{notice.title}</Card.Title>
                    <Card.Break />
                    <Card.Bottom>
                      <UserShortcut freelancer={notice.freelancer}>
                        <Rate rate={{ value: notice.freelancer.rate, quantity: 1 }} />
                      </UserShortcut>
                      <Card.Price color={color}>{`${displayPrice(notice.price)} zł`}</Card.Price>
                    </Card.Bottom>
                  </Card.Pane>
                </Card>
              ))}
            </Card.Container>
          ) : (
            <H2 style={{ fontSize: 25, fontWeight: 600, margin: " 50px auto", width: "fit-content" }}>Brak ogłoszeń</H2>
          )}
        </>
      )}
    </>
  )
}

export default CardContainer
