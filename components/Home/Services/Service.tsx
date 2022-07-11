import { Col, Image as ImageComponent } from "react-bootstrap"
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

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--accent-dark);
  }
`

type ServiceProps = Readonly<{
  image: string
  text: string
}>

const Service = ({ image, text }: ServiceProps) => (
  <Col lg={6} xs={12}>
    <ServiceWrapper>
      <ImageComponent alt="Icono" fluid height={78} src={image} width={78} />
      <p>{text}</p>
    </ServiceWrapper>
  </Col>
)

export default Service
