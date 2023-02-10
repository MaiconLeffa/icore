import Menu from "components/menu"
import Acessories from "./acessories"
import Clients from "./clients"
import Gallery from "./gallery"
import Hero from "./hero"
import Iphones from "./iphones"
import Jbl from "./jbl"
import MacBook from "./macbook"
import { Divisor, Main } from "./styles"
import Suport from "./suport"
import Visit from "./visit"

const HomeModel = ({ gallery }) =>
  <>
    <Hero />

    <Main>

      <Divisor />
      <Iphones />
      <Divisor />
      <MacBook />
      <Divisor />
      <Jbl />
      <Divisor />
      <Acessories />
      <Divisor />
      <Suport />
      <Divisor />
      <Clients />
      <Divisor />
      <Gallery gallery={gallery} />
      <Divisor />
      <Visit />
    </Main>
  </>
export default HomeModel