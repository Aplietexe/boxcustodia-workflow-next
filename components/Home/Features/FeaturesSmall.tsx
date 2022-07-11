import { Row, Image as ImageComponent, Col } from "react-bootstrap"

import StyledH3 from "../common/StyledH3"
import StyledP from "../common/StyledP"

import content from "./content"

const FeaturesSmall = () => (
  <>
    {content.map(({ image, title, text }) => (
      <Row className="my-5" key={title}>
        <Col xs={12}>
          <ImageComponent
            alt={title}
            fluid
            height={140}
            src={image}
            width={140}
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
