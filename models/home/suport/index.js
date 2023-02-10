import Image from "next/image"
import { themes } from "styles/themes"
import { Container, Crop, Description, Emphasis, ImageWrapper, Title, TitleWrapper } from "./styles"

const Suport = () =>
  <Container>
    <ImageWrapper>
      <Crop>
        <Image alt="iCore"
          style={{ filter: `drop-shadow(0 0 82px ${themes.colors.brand})`, objectFit: 'contain' }} fill src='/fix.gif' />
      </Crop>
    </ImageWrapper>

    <TitleWrapper>
      <Title><Emphasis>Assistência</Emphasis> Técnica</Title>
      <Description>Seu telefone quebrou? Molhou? Nossa loja possui assistência técnica especializada em iPhones. Traga até nós e lhe passamos o orçamento.</Description>
    </TitleWrapper>
  </Container>

export default Suport