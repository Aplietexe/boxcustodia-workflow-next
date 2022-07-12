import image1 from "public/Home/Features/1.svg"
import image2 from "public/Home/Features/2.svg"
import image3 from "public/Home/Features/3.svg"
import image4 from "public/Home/Features/4.svg"
import image5 from "public/Home/Features/5.svg"
import image6 from "public/Home/Features/6.svg"

const featuresContent: {
  image: StaticImageData
  text: string
  title: string
}[] = [
  {
    image: image1,
    text: "Diagrama tu flujo de proceso identificando los intervinientes, tareas y las líneas de conexión.",
    title: "Diagramá tus procesos",
  },
  {
    image: image2,
    text: "Determiná las características y propiedades de cada uno de los objetos previamente definidos.",
    title: "Definí los atributos",
  },
  {
    image: image3,
    text: "Corroborá y ratificá conjuntamente los pasos previos con las personas y áreas intervinientes dentro del flujo de procesos.",
    title: "Validación conjunta",
  },
  {
    image: image4,
    text: "Una vez realizada la aprobación conjunta Box ejecutará la programación de códigos y algoritmos para lograr la automatización del proceso de negocio.",
    title: "Ejecución y programación",
  },
  {
    image: image5,
    text: "Se realizaran las pruebas y capacitación necesarias previamente a salir en producción.",
    title: "Prueba y capacitación",
  },
  {
    image: image6,
    text: "Coordinar día y hora de implementación y lanzamiento",
    title: "Lanzamiento",
  },
]

export default featuresContent
