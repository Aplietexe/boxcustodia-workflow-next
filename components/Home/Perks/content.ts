import image1 from "public/Home/Perks/1.svg"
import image2 from "public/Home/Perks/2.svg"
import image3 from "public/Home/Perks/3.svg"
import image4 from "public/Home/Perks/4.svg"
import image5 from "public/Home/Perks/5.svg"
import image6 from "public/Home/Perks/6.svg"
import image7 from "public/Home/Perks/7.svg"

const perksContent: {
  image: StaticImageData
  text: string
  title: string
}[] = [
  {
    image: image1,
    text: "Configuración de usuarios, perfiles, login roles y más",
    title: "User interface",
  },
  {
    image: image2,
    text: "Acceso desde cualquier dispositivo",
    title: "Multi dispositivo",
  },
  {
    image: image3,
    text: "Generación de reportes digitales",
    title: "Reportes",
  },
  {
    image: image4,
    text: "Máxima funcionalidad con experiencia de usuario",
    title: "UX Design",
  },
  {
    image: image5,
    text: "A medida del cliente.",
    title: "Customizable",
  },
  {
    image: image6,
    text: "Interoperatividad con otros sistemas.",
    title: "Integrable",
  },
  {
    image: image7,
    text: "Comunicación y consulta entra base datos.",
    title: "Web service",
  },
]

export default perksContent
