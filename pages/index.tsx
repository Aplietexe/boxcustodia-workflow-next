import type { NextPage } from "next"
import { useState } from "react"
import { Container } from "react-bootstrap"

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
import { SidePadding } from "lib/context/Home"
import HomeStyles from "styles/HomeStyles"

const Home: NextPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <HomeStyles />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <SidePadding.Provider value="5.8vw">
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
      </SidePadding.Provider>
    </>
  )
}

export default Home
