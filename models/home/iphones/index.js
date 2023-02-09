import Image from "next/image"
import { Container, Description, Emphasis, ImageWrapper, Title, TitleWrapper } from "./styles"

const Iphones = () =>
  <Container>
    <ImageWrapper>
      <Image alt="iCore" style={{ objectFit: 'contain' }} fill src='/iphones.png' />
    </ImageWrapper>
    <TitleWrapper>
      <Title>Linha <Emphasis>Iphone</Emphasis></Title>
      <Description>Nas nossas lojas vocês encontram todos os modelos de iPhone, novos e seminovos, para todos os públicos.</Description>
    </TitleWrapper>
  </Container>

export default Iphones