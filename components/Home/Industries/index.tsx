import Image from "next/image"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import Pad from "components/Pad"
import StyledH2 from "components/StyledH2"
import backgroundImage from "public/Home/Industries/background.webp"

import content from "./content"

const Invert = styled.span`
  background-color: white;
  color: var(--accent-dark);
  font-weight: 700;
  line-height: 2;
`

const IndustryStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 170px;

  img {
    height: 70px;
    margin-bottom: 2rem;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--gray-light);
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 5rem 1rem;
  justify-items: center;
`

const StyledRow = styled(Row)`
  background-image: url(${backgroundImage});
  background-position: bottom right;
  background-size: cover;
  background-repeat: no-repeat;
`

const Industries = () => (
  <StyledRow className="py-5">
    <Col>
      <Pad>
        <Row>
          <Col
            className="py-5 d-xl-flex align-items-center"
            xl={4}
            xs={12}
            xxl={5}
          >
            <StyledH2 className="text-white">
              Una solución para cada <Invert> industria </Invert>
            </StyledH2>
          </Col>
          <Col className="py-5" xl={8} xs={12} xxl={7}>
            <Grid>
              {content.map(({ height, image, title, width }) => (
                <IndustryStyles key={title}>
                  <Image
                    alt={title}
                    height={height}
                    src={image}
                    width={width}
                  />
                  <p className="text-center text-white">{title}</p>
                </IndustryStyles>
              ))}
            </Grid>
          </Col>
        </Row>
      </Pad>
    </Col>
  </StyledRow>
)

export default Industries
