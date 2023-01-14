import Image from "next/image"
import { useContext } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import StyledH2 from "components/StyledH2"
import StyledP from "components/StyledP"
import { SidePadding } from "lib/context/Home"
import { useBreakpoints } from "lib/hooks"
import sideImage from "public/Home/Services/side.webp"

import content from "./content"
import Service from "./Service"

const Services = () => {
  const breakpoints = useBreakpoints()
  const sidePadding = useContext(SidePadding)

  return (
    <>
      <Row className="pt-5" id="services">
        <Col className="pt-5 mb-4">
          <StyledH2 className="mb-3">
            Soluciones a medida de nuestros clientes
          </StyledH2>
          <StyledP>
            Elegí los microservicios que mejor se adapten a tu proceso de
            negocio.
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
        {breakpoints.xxl && (
          <Col className="d-flex align-items-center">
            <div
              css={`
                width: 100%;

                & > span {
                  transform: translateX(min(13.5%, ${sidePadding}*0.75));
                }
              `}
            >
              <Image
                alt="Personas"
                css={`
                  width: 100%;
                  height: auto;
                `}
                sizes={`calc((100vw - ${sidePadding} * 2) * (5/12))`}
                src={sideImage}
              />
            </div>
          </Col>
        )}
      </Row>
    </>
  )
}

export default Services
