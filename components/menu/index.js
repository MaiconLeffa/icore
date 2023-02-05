import Image from "next/image"
import Link from "next/link"
import { Header } from "./styles"

const Menu = () =>
  <Header>
    <Link href='/'>
      <Image alt='iCore' height={70} width={200} src='/logo.svg' />
    </Link>
  </Header>

export default Menu