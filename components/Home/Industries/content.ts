import image1 from "public/Home/Industries/1.svg"
import image2 from "public/Home/Industries/2.svg"
import image3 from "public/Home/Industries/3.svg"
import image4 from "public/Home/Industries/4.svg"
import image5 from "public/Home/Industries/5.svg"

const industriesContent: {
  height: number
  image: StaticImageData
  title: string
  width: number
}[] = [
  {
    height: 60,
    image: image1,
    title: "Recursos Humanos",
    width: 54,
  },
  {
    height: 70,
    image: image2,
    title: "Bancos Seguros",
    width: 70,
  },
  {
    height: 69,
    image: image3,
    title: "Sector público",
    width: 69,
  },
  {
    height: 61,
    image: image4,
    title: "Sistema de Salud",
    width: 72,
  },
  {
    height: 73,
    image: image5,
    title: "Sistema Educativo",
    width: 94,
  },
]

export default industriesContent
