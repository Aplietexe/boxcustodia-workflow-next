import styled from "styled-components"

const StyledLink = styled.a`
  font-family: var(--font-poppins);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--accent-light);

  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--accent-dark);
  }

  display: inline-block;
  text-align: center;
`

export default StyledLink
