import Image from "next/image"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import Pad from "components/Pad"
import StyledH4 from "components/StyledH4"
import StyledP from "components/StyledP"
import { useBreakpoints } from "lib/hooks"
import tabletsImage from "public/Home/Perks/tablets.webp"

import content from "./content"

const StyledRow = styled(Row)`
  background-image: url(${tabletsImage});
  background-position: bottom right;
  background-size: 70% auto;
  background-repeat: no-repeat;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`

const Perks = () => {
  const grid = (
    <Col className="py-5">
      <Pad>
        <Row>
          <Col xs={12} xxl={7}>
            <Grid>
              {content.map(({ height, image, title, text, width }) => (
                <div key={title}>
                  <Image
                    alt={title}
                    height={height}
                    src={image}
                    width={width}
                  />
                  <StyledH4 className="pt-3 mb-2">{title}</StyledH4>
                  <StyledP>{text}</StyledP>
                </div>
              ))}
            </Grid>
          </Col>
        </Row>
      </Pad>
    </Col>
  )

  const breakpoints = useBreakpoints()

  return breakpoints.xxl ? (
    <StyledRow className="py-5">{grid}</StyledRow>
  ) : (
    <Row className="py-5">{grid}</Row>
  )
}

export default Perks
