import { Col, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"

import StyledH2 from "../common/StyledH2"
import StyledP from "../common/StyledP"
import sideImage from "../../assets/Services/side.webp"

import Service from "./Service"
import content from "./content"

const StyledImage = styled(ImageComponent)`
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
        <StyledImage
          alt="Personas"
          fluid
          height={746}
          src={sideImage}
          width={748}
        />
      </Col>
    </Row>
  </>
)

export default Services
