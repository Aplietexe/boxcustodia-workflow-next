import { useCallback } from "react"
import { stack as Menu } from "react-burger-menu"
import styled from "styled-components"

import type { SetState } from "lib/types"

import "./defaultStyles.css"

const Styles = styled.div`
  .bm-burger-button {
    display: none;
  }

  .bm-menu {
    overflow: hidden;
    background-color: var(--accent-dark);
  }

  .bm-cross {
    background-color: var(--gray-light);
  }

  .bm-item {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-color, var(--gray-light));

    text-decoration: none;
    margin-block: 0.75rem;
    padding: 0.25rem;

    &:hover {
      color: var(--accent-light);
    }
  }
`

const InvertedLink = styled.a`
  background-color: var(--gray-light);
  --text-color: var(--accent-dark);
`

type SidebarProps = Readonly<{
  isSidebarOpen: boolean
  setIsSidebarOpen: SetState<boolean>
}>

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const handleClose = useCallback(() => {
    setIsSidebarOpen(false)
  }, [setIsSidebarOpen])

  return (
    <Styles>
      <Menu isOpen={isSidebarOpen} onClose={handleClose}>
        <a href="#root" onClick={handleClose}>
          Inicio
        </a>
        <a href="#services" onClick={handleClose}>
          Servicios
        </a>
        <a href="#company" onClick={handleClose}>
          Nosotros
        </a>
        <InvertedLink href="#contact-form" onClick={handleClose}>
          Contacto
        </InvertedLink>
      </Menu>
    </Styles>
  )
}
export default Sidebar
