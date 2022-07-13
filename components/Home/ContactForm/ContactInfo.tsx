import Image from "next/image"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import ArrowIcon from "components/ArrowIcon"
import StyledLink from "components/StyledLink"
import StyledP from "components/StyledP"
import mailIcon from "public/Home/ContactForm/mail.svg"
import phone1Icon from "public/Home/ContactForm/phone-1.svg"
import phone2Icon from "public/Home/ContactForm/phone-2.svg"

const contactOptions: {
  alt: string
  height: number
  image: StaticImageData
  text: string
  width: number
}[] = [
  {
    alt: "Teléfono",
    height: 24,
    image: phone1Icon,
    text: "(+54 011) 5032 2355 Int. 2002",
    width: 27,
  },
  {
    alt: "Teléfono",
    height: 22,
    image: phone2Icon,
    text: "(+54 011) 15 - 37886510",
    width: 22,
  },
  {
    alt: "mail",
    height: 18,
    image: mailIcon,
    text: "agarcia@boxcustodia.com",
    width: 23,
  },
]

const OptionStyles = styled(Col)`
  display: flex;
  gap: 10px;
  align-items: center;

  img {
    width: 1.25em;
  }
`

const NoWrap = styled.span`
  white-space: nowrap;
`

const ContactInfo = () => (
  <Row className="mb-5 pb-5 p-lg-0 m-lg-0">
    <Col className="d-flex justify-content-center">
      <div>
        {contactOptions.map(({ alt, height, image, text, width }) => (
          <OptionStyles className="mb-3" key={text}>
            <Image alt={alt} height={height} src={image} width={width} />
            <StyledP className="m-0">{text}</StyledP>
          </OptionStyles>
        ))}
        <StyledLink className="mt-3">
          Ponerse en contacto con{" "}
          <NoWrap>
            comercial
            <ArrowIcon />
          </NoWrap>
        </StyledLink>
      </div>
    </Col>
  </Row>
)

export default ContactInfo
