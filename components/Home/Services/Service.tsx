import Image from "next/image"
import { Col } from "react-bootstrap"
import styled from "styled-components"

const ServiceWrapper = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  padding: 1rem;
  height: calc(100% - 1.2rem);
  margin-bottom: 1.2rem;

  display: flex;
  gap: 10px;
  align-items: center;

  div {
    min-height: 78px;
    min-width: 78px;
    max-height: 78px;
    max-width: 78px;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--accent-dark);
  }
`

interface ServiceProps {
  image: StaticImageData
  text: string
}

const Service = ({ image, text }: ServiceProps) => (
  <Col lg={6} xs={12}>
    <ServiceWrapper>
      <div>
        <Image alt="Icono" height={78} src={image} width={78} />
      </div>
      <p>{text}</p>
    </ServiceWrapper>
  </Col>
)

export default Service
