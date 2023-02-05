import Image from "next/image"
import { themes } from "styles/themes"

const Footer = () =>
  <footer style={{ boxShadow: '0px 0px 50px rgba(0, 193, 222,0.2)' }}>

    <div style={{ padding: '0 24px', height: 500, maxWidth: 1200, margin: '0 auto', alignItems: 'center', display: 'flex' }}>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Image alt='iCore' width={206} height={54} src='/logo.svg' />
        <p style={{ color: '#fff', marginTop: 'auto' }}>© 2023 iCore Todos os direitos reservados.</p>
      </div>


      <div style={{ marginLeft: 'auto' }}>
        <strong style={{ color: '#fff' }}>MATRIZ</strong>
        <p style={{ color: '#fff' }}>R. Manoel Lima Pôrto, 15 - Sala 03 - Torres, RS, 95560-000</p>

        <strong style={{ color: '#fff' }}>FILIAL</strong>
        <p style={{ color: '#fff' }}>R. Manoel Lima Pôrto, 15 - Sala 03 - Torres, RS, 95560-000</p>

      </div>

    </div>


    <div style={{ height: 14, backgroundColor: themes.colors.brand, width: '100%' }}></div>
  </footer>

export default Footer