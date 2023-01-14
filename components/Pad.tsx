import type { ReactNode } from "react"
import { useContext } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { SidePadding } from "lib/context/Home"

interface PadProps {
  children: ReactNode
}

const Pad = ({ children }: PadProps) => {
  const sidePadding = useContext(SidePadding)

  return (
    <Row>
      <Col
        css={`
          padding-inline: ${sidePadding};
        `}
      >
        {children}
      </Col>
    </Row>
  )
}

export default Pad
