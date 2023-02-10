import Image from "next/image"
import { themes } from "styles/themes"
import { Container, Description, Emphasis, ImageWrapper, Title, TitleWrapper } from "./styles"

const Jbl = () =>
  <Container>
    <ImageWrapper>
      <Image alt="iCore" style={{ filter: `drop-shadow(0 0 82px ${themes.colors.brand})`, objectFit: 'contain' }} fill src='/jbl.png' />
    </ImageWrapper>

    <TitleWrapper>
      <Title>Produtos <Emphasis>JBL</Emphasis></Title>
      <Description>Possuímos também produtos originais JBL, para você que gosta de curtir uma boa música com uma excelente qualidade que só as caixas de som JBL possuem.</Description>
    </TitleWrapper>
  </Container>

export default Jbl