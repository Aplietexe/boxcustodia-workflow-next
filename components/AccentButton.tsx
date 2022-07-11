import type { ReactNode } from "react"
import styled from "styled-components"

import type { DeepReadonly } from "../../types"

const StyledButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.3125rem;
  color: #fff;

  border-radius: var(--border-radius);
  border: none;

  background-color: var(--accent-light);
  width: 100%;
  padding: 0.88em 1em;
  transition: all 0.4s;

  &:hover {
    background-color: var(--accent-dark);
    transform: scale(1.05);
  }
`

type AccentButtonProps = DeepReadonly<{
  children: ReactNode
  href?: string
}>

const AccentButton = ({ children, href }: AccentButtonProps) => {
  const button = <StyledButton type="button">{children}</StyledButton>

  return href ? <a href={href}>{button}</a> : button
}

export default AccentButton
