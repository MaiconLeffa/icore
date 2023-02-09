import Image from "next/image"
import { themes } from "styles/themes"
import { Container, Rights, Wrapper } from "./styles"
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

const Footer = () =>
  <Container>

    <Wrapper>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Image alt='iCore' width={206} height={54} src='/logo.svg' />

        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 24 }}>
          <BsFacebook size={26} fill="#fff" />
          <BsInstagram size={26} fill="#fff" />
          <BsWhatsapp size={26} fill="#fff" />
        </div>

      </div>

      <div style={{ marginLeft: 'auto' }}>




        <strong style={{ color: '#fff' }}>MATRIZ</strong>
        <p style={{ color: '#fff' }}>R. Manoel Lima Pôrto, 15 - Sala 03 - Torres, RS, 95560-000</p>

        <strong style={{ color: '#fff' }}>FILIAL</strong>
        <p style={{ color: '#fff' }}>R. Manoel Lima Pôrto, 15 - Sala 03 - Torres, RS, 95560-000</p>

      </div>

    </Wrapper>

    <Rights>© 2023 iCore Todos os direitos reservados.</Rights>
    <div style={{ height: 14, backgroundColor: themes.colors.brand, width: '100%' }}></div>
  </Container>

export default Footer