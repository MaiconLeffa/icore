import Image from "next/image"
import { Container, Description, Emphasis, ImageWrapper, Title, TitleWrapper } from "./styles"

const Jbl = () =>
  <Container>
    <ImageWrapper>
      <Image alt="iCore" style={{ objectFit: 'contain' }} fill src='/jbl.png' />
    </ImageWrapper>

    <TitleWrapper>
      <Title>Produtos <Emphasis>JBL</Emphasis></Title>
      <Description>Sed suscipit placerat quam id pellentesque. Quisque id erat quis eros facilisis volutpat. Vivamus mattis eget tortor at pharetra. Nam ornare mi vitae diam pharetra aliquam. Nulla sed ultrices tellus. Sed non dolor gravida, mollis dolor vitae, eleifend lectus. Aliquam aliquet mattis libero eget aliquam.</Description>
    </TitleWrapper>
  </Container>

export default Jbl