import Image from "next/image"
import { themes } from "styles/themes"
import { Container, Description, Emphasis, ImageWrapper, Title, TitleWrapper } from "./styles"

const MacBook = () =>
  <Container>
    <TitleWrapper>
      <Title><Emphasis>Macbook</Emphasis> air</Title>
      <Description>O MacBook Air com chip M1 é um notebook extremamente portátil, versátil e rápido. Com uma linda tela de Retina, tecnologia silenciosa sem ventoinha, design fino e bateria que dura o dia todo, você vai conseguir fazer tudo na velocidade da luz.</Description>
    </TitleWrapper>

    <ImageWrapper>
      <Image alt="iCore" style={{ filter: `drop-shadow(0 0 82px ${themes.colors.brand})`, objectFit: 'contain' }} fill src='/macbooks.png' />
    </ImageWrapper>
  </Container>

export default MacBook