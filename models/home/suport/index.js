import Image from "next/image"
import { Container, Crop, Description, Emphasis, ImageWrapper, Title, TitleWrapper } from "./styles"

const Suport = () =>
  <Container>
    <ImageWrapper>
      <Crop>
        <Image alt="iCore"
          style={{ objectFit: 'contain' }} fill src='/fix.gif' />
      </Crop>
    </ImageWrapper>

    <TitleWrapper>
      <Title><Emphasis>Menutenção</Emphasis> para <Emphasis>Iphones</Emphasis></Title>
      <Description>Sed suscipit placerat quam id pellentesque. Quisque id erat quis eros facilisis volutpat. Vivamus mattis eget tortor at pharetra. Nam ornare mi vitae diam pharetra aliquam. Nulla sed ultrices tellus. Sed non dolor gravida, mollis dolor vitae, eleifend lectus. Aliquam aliquet mattis libero eget aliquam.</Description>
    </TitleWrapper>
  </Container>

export default Suport