import type { ReactNode } from "react"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

const StyledCol = styled(Col)`
  padding-inline: 5.8vw;
`

interface PadProps {
  children: ReactNode
}

const Pad = ({ children }: PadProps) => (
  <Row>
    <StyledCol>{children}</StyledCol>
  </Row>
)

export default Pad
