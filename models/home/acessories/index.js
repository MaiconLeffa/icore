import Image from "next/image"
import { themes } from "styles/themes"
import { Container, Description, Emphasis, ImageWrapper, Title, TitleWrapper } from "./styles"

const Acessories = () =>
  <Container>
    <TitleWrapper>
      <Title>Linha de <Emphasis>Acessórios</Emphasis></Title>
      <Description>Aqui você encontra todos os acessórios Apple, entre eles cases, carregadores, fonte e muito mais. Com a qualidade que seu produto merece.</Description>
    </TitleWrapper>

    <ImageWrapper>
      <Image alt="iCore" style={{ filter: `drop-shadow(0 0 82px ${themes.colors.brand})`, objectFit: 'contain' }} fill src='/acessories.png' />
    </ImageWrapper>
  </Container>

export default Acessories