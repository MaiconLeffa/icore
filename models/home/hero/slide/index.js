
import Image from "next/image"
import { Container, TitleWrapper, Title, Description, Wrapper, Overlay, Content } from "./styles"

const Slide = ({ title, text, background, image }) =>
  <Container style={{ backgroundImage: background }}>

    <Overlay>

      <Content>

        <TitleWrapper>
          <Title>{title}</Title>
          <Description>{text}</Description>
        </TitleWrapper>

        {image ? <Wrapper>
          <Image priority laz draggable={false} alt="iCore" fill style={{ objectFit: 'contain' }} src={image} />
        </Wrapper>
          :
          <div style={{ width: '100%', aspectRatio: '16/9' }}></div>
        }

      </Content>

    </Overlay>

  </Container>

export default Slide