import Image from "next/image"
import { Col, Row } from "react-bootstrap"

import { BackgroundImage } from "components"
import Pad from "components/Pad"
import StyledH2 from "components/StyledH2"
import StyledP from "components/StyledP"
import backgroundImage from "public/Home/ContactForm/background.webp"
import header from "public/Home/ContactForm/header.png"

const ContactFormHeader = () => (
  <Row className="py-5 position-relative" id="contact-form">
    <BackgroundImage src={backgroundImage} />
    <Pad>
      <Col className="text-center py-4" xs={12}>
        <Image alt="Retratos" height={187} src={header} width={359} />
      </Col>
      <Col className="text-center py-4" xs={12}>
        <StyledH2 className="mb-4">¿Cómo podemos ayudarlo?</StyledH2>
        <StyledP>Llene el formulario</StyledP>
      </Col>
    </Pad>
  </Row>
)

export default ContactFormHeader
