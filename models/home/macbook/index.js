import Image from "next/image"
import { Container, Description, Emphasis, ImageWrapper, Title, TitleWrapper } from "./styles"

const MacBook = () =>
  <Container>
    <TitleWrapper>
      <Title><Emphasis>Macbook</Emphasis> air</Title>
      <Description>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</Description>
    </TitleWrapper>

    <ImageWrapper>
      <Image alt="iCore" style={{ objectFit: 'contain' }} fill src='/macbooks.png' />
    </ImageWrapper>
  </Container>

export default MacBook