import Image from "next/image"
import { Container, Description, Emphasis, ImageWrapper, Title, TitleWrapper } from "./styles"

const Acessories = () =>
  <Container>
    <TitleWrapper>
      <Title>Linha de <Emphasis>acessórios</Emphasis></Title>
      <Description>Sed suscipit placerat quam id pellentesque. Quisque id erat quis eros facilisis volutpat. Vivamus mattis eget tortor at pharetra. Nam ornare mi vitae diam pharetra aliquam. Nulla sed ultrices tellus. Sed non dolor gravida, mollis dolor vitae, eleifend lectus. Aliquam aliquet mattis libero eget aliquam.</Description>
    </TitleWrapper>

    <ImageWrapper>
      <Image alt="iCore" style={{ objectFit: 'contain' }} fill src='/acessories.png' />
    </ImageWrapper>
  </Container>

export default Acessories