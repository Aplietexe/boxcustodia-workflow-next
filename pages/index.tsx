import type { NextPage } from "next"
import { useState } from "react"
import { Container } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.css"
import { BackgroundColor, Pad } from "components"
import {
  Company,
  ContactForm,
  Features,
  Footer,
  Header,
  Industries,
  Navbar,
  Perks,
  Services,
  Sidebar,
} from "components/Home"
import HomeStyles from "styles/HomeStyles"

const Home: NextPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div>
      <HomeStyles />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Container fluid>
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <Header />
        <Features />
        <BackgroundColor className="mt-5" color="var(--gray-light)">
          <Pad>
            <Services />
          </Pad>
          <Perks />
        </BackgroundColor>
        <Industries />
        <Company />
        <ContactForm />
        <Footer />
      </Container>
    </div>
  )
}

export default Home
