import Image from "next/image"
import { Container, Description, Emphasis, ImageWrapper, Title, TitleWrapper } from "./styles"

const Iphones = () =>
  <Container>
    <ImageWrapper>
      <Image alt="iCore" style={{ objectFit: 'contain' }} fill src='/iphones.png' />
    </ImageWrapper>
    <TitleWrapper>
      <Title>Linha <Emphasis>Iphone</Emphasis></Title>
      <Description>Modelos novos e usados de diversas gerações para todos os publicos.</Description>
    </TitleWrapper>
  </Container>

export default Iphones