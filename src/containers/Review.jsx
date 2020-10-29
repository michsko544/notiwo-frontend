import Review from "components/Review"
import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "contexts"
import { Button } from "components/inputs"
import { displayRate } from "utils"
import { H2 } from "components/headings"
import Loader from "components/Loader"
import star from "images/star.svg"

const ReviewContainer = ({ reviews, isLoading }) => {
  const { mode, color } = useContext(ThemeContext)
  const [review, setReview] = useState(null)

  useEffect(() => {
    if (!isLoading && reviews !== null) {
      setReview(reviews[0])
    }
  }, [isLoading])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {review ? (
            <Review>
              <Review.Header>
                <Review.Paragraph mode={mode}>{`Ogłoszenie: ${review.title}`}</Review.Paragraph>
                <Review.Paragraph mode={mode}>{`Typ oferty: ${review.type}`}</Review.Paragraph>
                <Review.Paragraph mode={mode}>{`Koszt usługi: ${review.price} zł`}</Review.Paragraph>
                <Review.Paragraph mode={mode}>{`Data recenzji: ${review.createdAt}`}</Review.Paragraph>
                <Review.LineWithRate mode={mode}>
                  Jakość usługi:
                  <Review.Icon color={color} src={star} alt="star-icon" />
                  <Review.Subrate color={color}>{`${review.serviceQuality}/5`}</Review.Subrate>
                </Review.LineWithRate>
                <Review.LineWithRate mode={mode}>
                  Komunikacja:
                  <Review.Icon color={color} src={star} alt="star-icon" />
                  <Review.Subrate color={color}>{`${review.communication}/5`}</Review.Subrate>
                </Review.LineWithRate>
                <Review.LineWithRate mode={mode}>
                  Zgodność z opisem:
                  <Review.Icon color={color} src={star} alt="star-icon" />
                  <Review.Subrate color={color}>{`${review.compatibility}/5`}</Review.Subrate>
                </Review.LineWithRate>
                <Review.RateWrapper>
                  <Review.RateTitle mode={mode}>Ocena:</Review.RateTitle>
                  <Review.Rate color={color}>{displayRate(review.rate)}</Review.Rate>
                </Review.RateWrapper>
              </Review.Header>
              <Review.Paragraph mode={mode} style={{ marginBottom: 20, textAlign: "justify" }}>
                {review.review}
              </Review.Paragraph>
              {reviews.length > 0 && <Button text="Zobacz więcej" />}
            </Review>
          ) : (
            <H2 style={{ fontWeight: 600, margin: " 50px 0", width: "fit-content" }}>Brak recenzji</H2>
          )}
        </>
      )}
    </>
  )
}

export default ReviewContainer
