import Pad from "components/Pad"
import StyledH2 from "components/StyledH2"
import { useBreakpoints } from "lib/hooks"

import FeaturesHexagon from "./FeaturesHexagon"
import FeaturesSmall from "./FeaturesSmall"

const Features = () => {
  const breakpoints = useBreakpoints()

  return (
    <Pad>
      <StyledH2 className="py-5 my-5 text-xxl-center">
        Automatizá tu proceso de negocio
      </StyledH2>
      {breakpoints.xxl ? (
        <div className="pt-4 pb-5 mb-5">
          <FeaturesHexagon />
        </div>
      ) : (
        <FeaturesSmall />
      )}
    </Pad>
  )
}

export default Features
