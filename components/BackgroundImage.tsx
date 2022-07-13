import Image from "next/image"

interface BackgroundImageProps {
  objectPosition?: string
  src: StaticImageData
}

const BackgroundImage = ({
  objectPosition = "center",
  src,
}: BackgroundImageProps) => (
  <Image
    alt=""
    layout="fill"
    objectFit="cover"
    objectPosition={objectPosition}
    quality={100}
    src={src}
    style={{ zIndex: -1 }}
  />
)

export default BackgroundImage
