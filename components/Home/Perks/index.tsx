import Image from "next/image"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import BackgroundImage from "components/BackgroundImage"
import Pad from "components/Pad"
import StyledH4 from "components/StyledH4"
import StyledP from "components/StyledP"
import { useBreakpoints } from "lib/hooks"
import tabletsImage from "public/Home/Perks/tablets.webp"

import content from "./content"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`

const Perks = () => {
  const breakpoints = useBreakpoints()

  return (
    <Row className="py-5 position-relative">
      {breakpoints.xxl && (
        <BackgroundImage objectPosition="bottom right" src={tabletsImage} />
      )}
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
    </Row>
  )
}

export default Perks
