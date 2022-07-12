import type { ReactNode } from "react"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import type { DeepReadonly } from "lib/types"

const StyledCol = styled(Col)`
  padding-inline: 5.8vw;
`

type PadProps = DeepReadonly<{
  children: ReactNode
}>

const Pad = ({ children }: PadProps) => (
  <Row>
    <StyledCol>{children}</StyledCol>
  </Row>
)

export default Pad
