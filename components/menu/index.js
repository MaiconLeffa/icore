import Image from "next/image"
import Link from "next/link"
import { Header } from "./styles"
import { BsWhatsapp } from 'react-icons/bs';

const Menu = () =>
  <Header>
    <Link href='https://api.whatsapp.com/send?phone=5551936191086' style={{ zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#25D366', borderRadius: 70, height: 70, width: 70, position: 'fixed', bottom: 20, right: 20 }}>
      <BsWhatsapp size={30} fill="#fff"
      />
    </Link>
    <Link href='/'>
      <Image alt='iCore' height={70} width={200} src='/logo.svg' />
    </Link>
  </Header>

export default Menu