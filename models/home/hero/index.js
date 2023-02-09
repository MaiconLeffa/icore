import Image from "next/image"
import { useRef } from "react"
import ReactElasticCarousel from "react-elastic-carousel"
import { Container, Description, Emphasis, Title, TitleWrapper, Wrapper } from "./styles"

const Slide2 = () =>
  <Container>
    <TitleWrapper>
      <Title>Apple <Emphasis>Watch Ultra</Emphasis></Title>
      <Description>Conheça o Apple Watch mais versátil e duro na queda já criado. O Apple Watch Ultra é o relógio esportivo definitivo, com uma caixa de titânio robusta, GPS de precisão e dupla frequência, até 36 horas de bateria, conexão celular e três pulseiras especializadas feitas para atletas e para quem não vive sem adrenalina.</Description>
    </TitleWrapper>
    <Wrapper>
      <Image draggable={false} alt="iCore" fill style={{ objectFit: 'contain' }} src='/watch.png' />
    </Wrapper>
  </Container>

const Slide1 = () =>
  <Container>
    <TitleWrapper>
      <Title>iPhone 14 <Emphasis>chegou!</Emphasis></Title>
      <Description>Aqui na <Emphasis>iCore</Emphasis> o iPhone 14 já chegou!<br></br>Com a nova câmera grande‑angular de nível profissional e melhorias no processamento de imagem, você faz fotos ainda mais espetaculares em qualquer cenário. Prepare‑se para ver a magia acontecer em pouca luz.
      </Description>
    </TitleWrapper>
    <Wrapper>
      <Image draggable={false} alt="iCore" fill style={{ objectFit: 'contain' }} src='/iphone14.png' />
    </Wrapper>
  </Container>

const Hero = () => {
  const carouselRef = useRef(null);
  const arr = [Slide1, Slide2]
  const timer = 10000
  let resetTimeout;

  const onNextEnd = ({ index }) => {
    if (index === arr.length - 1) {
      clearTimeout(resetTimeout);
      resetTimeout = setTimeout(() => {
        carouselRef?.current?.goTo(0);
      }, timer);
    }
  }

  return (
    <section style={{ padding: 24 }}>
      <ReactElasticCarousel ref={carouselRef} enableAutoPlay autoPlaySpeed={timer} pagination={false} onNextEnd={onNextEnd}>
        {arr.map((Slide, index) => <Slide key={index} />)}
      </ReactElasticCarousel>
    </section>
  )
}

export default Hero