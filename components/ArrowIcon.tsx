import Image from "next/image"

import arrowIcon from "public/Home/arrow-icon.svg"

const ArrowIcon = () => (
  <div
    css={`
      display: inline-block;
      margin-left: 0.25rem;

      span {
        vertical-align: middle;
        top: -3px;
      }
    `}
  >
    <Image alt="Flecha" layout="fixed" src={arrowIcon} />
  </div>
)

export default ArrowIcon
