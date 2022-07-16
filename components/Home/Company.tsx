import Image from "next/image"
import { useContext } from "react"
import styled from "styled-components"

import ArrowIcon from "components/ArrowIcon"
import Pad from "components/Pad"
import StyledLink from "components/StyledLink"
import { SidePadding } from "lib/context/Home"
import boxLogo from "public/Home/Company/box-logo.svg"

const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.75rem;
  font-weight: 300;
  color: var(--accent-dark);

  text-align: center;
  width: min(100%, 850px);
`

const Company = () => {
  const sidePadding = useContext(SidePadding)

  return (
    <Pad>
      <div className="d-flex flex-column align-items-center py-5" id="company">
        <div
          className="my-5"
          css={`
            width: min(455px, 100%);
            height: auto;
          `}
        >
          <Image
            alt="Box Custodia y gestión digital"
            layout="responsive"
            sizes={`(max-width:514px) calc(100vw - ${sidePadding} * 2),
                  455w`}
            src={boxLogo}
          />
        </div>
        <Paragraph className="mb-5">
          ¡Somos una compañía argentina apasionada por la innovación! Con más de
          25 años de experiencia y trayectoria, nuestra unidad de negocio
          “Software as a Service” revoluciona y simplifica la gestión de tus
          procesos de negocio a través de la digitalización.
        </Paragraph>
        <StyledLink className="mb-5" href="https://boxcustodia.com">
          Conocé nuestra empresa Box <ArrowIcon word="custodia" />
        </StyledLink>
      </div>
    </Pad>
  )
}

export default Company
