import Image from "next/image"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import StyledH2 from "components/StyledH2"
import StyledP from "components/StyledP"
import sideImage from "public/Home/Services/side.webp"

import content from "./content"
import Service from "./Service"

const ImageWrapper = styled.div`
  transform: translateX(13.5%);
`

const Services = () => (
  <>
    <Row className="pt-5" id="services">
      <Col className="pt-5 mb-4">
        <StyledH2 className="mb-3">
          Soluciones a medida de nuestros clientes
        </StyledH2>
        <StyledP>
          Elegí los microservicios que mejor se adapten a tu proceso de negocio.
        </StyledP>
      </Col>
    </Row>
    <Row>
      <Col xs={12} xxl={7}>
        <Row>
          {content.map((service) => (
            <Service {...service} key={service.text} />
          ))}
        </Row>
      </Col>
      <Col className="d-none d-xxl-flex align-items-center justify-content-end">
        <ImageWrapper>
          <Image alt="Personas" height={746} src={sideImage} width={748} />
        </ImageWrapper>
      </Col>
    </Row>
  </>
)

export default Services
