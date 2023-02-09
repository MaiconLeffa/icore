import Image from "next/image"
import { Container, Description, Emphasis, ImageWrapper, Title, TitleWrapper } from "./styles"

const Acessories = () =>
  <Container>
    <TitleWrapper>
      <Title>Linha de <Emphasis>Acessórios</Emphasis></Title>
      <Description>Aqui você encontra todos os acessórios Apple, entre eles cases, carregadores, fonte e muito mais. Com a qualidade que seu produto merece.</Description>
    </TitleWrapper>

    <ImageWrapper>
      <Image alt="iCore" style={{ objectFit: 'contain' }} fill src='/acessories.png' />
    </ImageWrapper>
  </Container>

export default Acessories