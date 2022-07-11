import type { ReactNode } from "react"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import type { DeepReadonly } from "../../types"

type StyledRowProps = Readonly<{
  color: string
}>

const StyledRow = styled(Row)<StyledRowProps>`
  background-color: ${({ color }) => color};
`

type BackgroundColorProps = DeepReadonly<{
  children: ReactNode
  className?: string
  color: string
  isSingleRow?: boolean
}>

const BackgroundColor = ({
  children,
  className,
  color,
  isSingleRow,
}: BackgroundColorProps) => (
  <StyledRow className={className} color={color}>
    {
      // False positive, ternary operator prevents leaks
      // eslint-disable-next-line react/jsx-no-leaked-render
      isSingleRow ? children : <Col>{children}</Col>
    }
  </StyledRow>
)

export default BackgroundColor
