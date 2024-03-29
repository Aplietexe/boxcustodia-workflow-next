import Image from "next/image"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import StyledH3 from "components/StyledH3"
import StyledP from "components/StyledP"

import content from "./content"

const FeaturesSmall = () => (
  <>
    {content.map(({ image, title, text }) => (
      <Row className="my-5" key={title}>
        <Col xs={12}>
          <Image
            alt={title}
            css={`
              max-width: 100%;
              height: auto;
            `}
            src={image}
          />
        </Col>
        <Col className="my-3" xs={12}>
          <StyledH3>{title}</StyledH3>
        </Col>
        <Col xs={12}>
          <StyledP>{text}</StyledP>
        </Col>
      </Row>
    ))}
  </>
)

export default FeaturesSmall
