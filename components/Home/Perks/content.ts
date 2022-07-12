import image1 from "public/Home/Perks/1.svg"
import image2 from "public/Home/Perks/2.svg"
import image3 from "public/Home/Perks/3.svg"
import image4 from "public/Home/Perks/4.svg"
import image5 from "public/Home/Perks/5.svg"
import image6 from "public/Home/Perks/6.svg"
import image7 from "public/Home/Perks/7.svg"

const perksContent: {
  height: number
  image: string
  text: string
  title: string
  width: number
}[] = [
  {
    height: 57,
    image: image1,
    text: "Configuración de usuarios, perfiles, login roles y más",
    title: "User interface",
    width: 57,
  },
  {
    height: 49,
    image: image2,
    text: "Acceso desde cualquier dispositivo",
    title: "Multi dispositivo",
    width: 49,
  },
  {
    height: 47,
    image: image3,
    text: "Generación de reportes digitales",
    title: "Reportes",
    width: 50,
  },
  {
    height: 57,
    image: image4,
    text: "Máxima funcionalidad con experiencia de usuario",
    title: "UX Design",
    width: 57,
  },
  {
    height: 59,
    image: image5,
    text: "A medida del cliente.",
    title: "Customizable",
    width: 59,
  },
  {
    height: 52,
    image: image6,
    text: "Interoperatividad con otros sistemas.",
    title: "Integrable",
    width: 45,
  },
  {
    height: 51,
    image: image7,
    text: "Comunicación y consulta entra base datos.",
    title: "Web service",
    width: 51,
  },
]

export default perksContent
