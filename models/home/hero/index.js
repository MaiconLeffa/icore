import Image from "next/image"
import { Component, useRef } from "react"
import ReactElasticCarousel from "react-elastic-carousel"
import { Container, Description, Emphasis, Title, TitleWrapper, Wrapper } from "./styles"

const Slide2 = () =>
  <Container>
    <TitleWrapper>
      <Title>Toda a linha <Emphasis>Apple!</Emphasis></Title>
      <Description>Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.</Description>
    </TitleWrapper>
    <Wrapper>
      <Image draggable={false} alt="iCore" fill style={{ objectFit: 'contain' }} src='/watch.png' />
    </Wrapper>
  </Container>

const Slide1 = () =>
  <Container>
    <TitleWrapper>
      <Title>iPhone 14 <Emphasis>chegou!</Emphasis></Title>
      <Description>Aqui na <Emphasis>iCore</Emphasis> o iPhone 14 já chegou!</Description>
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
      <ReactElasticCarousel ref={carouselRef} enableAutoPlay autoPlaySpeed={timer} showArrows={false} pagination={false} onNextEnd={onNextEnd}>
        {arr.map((Slide, index) => <Slide key={index} />)}
      </ReactElasticCarousel>
    </section>
  )
}

export default Hero