import { Col, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"

import image from "../assets/Header/image.webp"
import useBreakpoints from "../hooks/useBreakpoints"

import AccentButton from "./common/AccentButton"
import Pad from "./common/Pad"
import StyledH2 from "./common/StyledH2"

const Paragraph = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1.563rem;
  font-weight: 400;
  color: var(--gray-dark);
`

const Header = () => {
  const imageCol = (
    <Col xl={{ order: 2, span: 6 }} xs={12}>
      <ImageComponent
        alt="Imagen del encabezado"
        fluid
        height={677}
        src={image}
        width={973}
      />
    </Col>
  )

  const textCol = (
    <Col
      className="align-items-xl-center d-xl-flex"
      xl={{ order: 1, span: 6 }}
      xs={12}
    >
      <Row>
        <Col xs={12}>
          <StyledH2 className="pb-3">
            Modernizar tu negocio puede ser fácil
          </StyledH2>
        </Col>
        <Col className="mb-4" xs={12}>
          <Paragraph>
            A través de esta herramienta podrás aumentar la productividad de tu
            negocio eliminando la gestión manual de documentos, tareas o
            información que va pasando de persona a persona.
          </Paragraph>
        </Col>
        <Col xs={6}>
          <AccentButton href="#contact-form">Solicitar cotización</AccentButton>
        </Col>
      </Row>
    </Col>
  )

  const large = (
    <Pad>
      <Row className="my-4 pt-xl-4">
        {imageCol}
        {textCol}
      </Row>
    </Pad>
  )

  const small = (
    <Row className="my-4 pt-xl-4">
      {imageCol}
      <Pad>{textCol}</Pad>
    </Row>
  )

  const breakpoints = useBreakpoints()

  return breakpoints.lg ? large : small
}

export default Header
