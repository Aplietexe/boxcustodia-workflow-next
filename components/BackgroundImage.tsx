import Image from "next/image"

interface BackgroundImageProps {
  src: StaticImageData
}

const BackgroundImage = ({ src }: BackgroundImageProps) => (
  <Image
    alt=""
    css={`
      z-index: -1;
      object-fit: cover;
      object-position: center;
    `}
    fill
    quality={100}
    sizes="100vw"
    src={src}
  />
)

export default BackgroundImage
