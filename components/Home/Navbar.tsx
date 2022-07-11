import { Col, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"
import { useCallback } from "react"

import workflowLogo from "../assets/Navbar/workflow-logo.svg"
import loginIcon from "../assets/Navbar/login-icon.svg"
import burgerIcon from "../assets/Navbar/burger-icon.svg"
import type { SetState } from "../types"

import Pad from "./common/Pad"

const StyledImage = styled(ImageComponent)`
  width: 2rem;
  cursor: pointer;
`

const NavLinks = styled(Col)`
  justify-content: end;
  align-items: center;
  gap: 2rem;

  padding-inline: 2rem;

  a {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-color, var(--accent-dark));

    text-decoration: none;

    transition: all 0.4s;

    &:hover {
      transform: scale(1.05);
    }
  }
`

const ContactLink = styled.a`
  border-radius: var(--border-radius);
  background-color: var(--accent-light);
  --text-color: #fff;

  padding: 0.75rem 2rem;

  &:hover {
    background-color: var(--accent-dark);
  }
`

type NavbarProps = Readonly<{
  setIsSidebarOpen: SetState<boolean>
}>

const Navbar = ({ setIsSidebarOpen }: NavbarProps) => {
  const handleBurgerClick = useCallback(() => {
    setIsSidebarOpen(true)
  }, [setIsSidebarOpen])

  return (
    <Pad>
      <Row className="pt-5">
        <Col className="d-flex align-items-end fs-1 ps-4 pb-2 d-xl-none" xs={2}>
          <ImageComponent
            alt="Abrir menú"
            fluid
            height={22}
            onClick={handleBurgerClick}
            role="button"
            src={burgerIcon}
            width={37}
          />
        </Col>
        <Col
          className="d-flex justify-content-center justify-content-xl-start"
          xl={5}
          xs={8}
        >
          <a href="#root">
            <ImageComponent
              alt="Workflow"
              fluid
              height={83}
              src={workflowLogo}
              width={342}
            />
          </a>
        </Col>
        <Col
          className="d-flex align-items-end justify-content-end pe-4 pb-2 d-xl-none"
          xs={2}
        >
          <StyledImage
            alt="Ícono"
            fluid
            height={32}
            src={loginIcon}
            width={32}
          />
        </Col>
        <NavLinks className="d-none d-xl-flex" xl={7}>
          <a href="#root">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#company">Nosotros</a>
          <ContactLink href="#contact-form">Contacto</ContactLink>
        </NavLinks>
      </Row>
    </Pad>
  )
}

export default Navbar
