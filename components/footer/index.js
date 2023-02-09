import Image from "next/image"
import { themes } from "styles/themes"
import { Container, Rights, Wrapper } from "./styles"
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import Link from "next/link"

const Footer = () =>
  <Container>

    <Wrapper>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Image alt='iCore' width={206} height={54} src='/logo.svg' />

        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 24 }}>
          <Link target='_blank' href='https://www.facebook.com/icore.solutions.torres'>
            <BsFacebook size={26} fill="#fff" />
          </Link>

          <Link target='_blank' href="https://www.instagram.com/icore.solutions/">
            <BsInstagram size={26} fill="#fff" />
          </Link>

          <Link target='_blank' passHref href="https://api.whatsapp.com/send?phone=5551936191086">
            <BsWhatsapp size={26} fill="#fff" />
          </Link>
        </div>

      </div>

      <div style={{ marginLeft: 'auto' }}>
        <strong style={{ color: '#fff' }}>MATRIZ</strong>
        <p style={{ color: '#fff' }}>R. Manoel Lima Pôrto, 15 - Sala 03 - Torres, RS, 95560-000</p>

        <strong style={{ color: '#fff' }}>FILIAL</strong>
        <p style={{ color: '#fff' }}>Av. Barão do Rio Branco, 10 - Sala 03 - Torres, RS, 95560-000</p>
      </div>

    </Wrapper>

    <Rights>© 2023 iCore Todos os direitos reservados.</Rights>
    <div style={{ height: 14, backgroundColor: themes.colors.brand, width: '100%' }}></div>
  </Container>

export default Footer