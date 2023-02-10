import { useRef } from "react"
import ReactElasticCarousel from "react-elastic-carousel"
import { CarroselContainer, Emphasis } from "./styles"
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import Slide from "./slide"

const Slide3 = () =>
  <Slide
    image='/watch.png'
    background='url(/slide3.jpg)'
    title={<>Apple <Emphasis>Watch Ultra</Emphasis></>}
    text={<>Conheça o Apple Watch mais versátil e duro na queda já criado. O Apple Watch Ultra é o relógio esportivo definitivo, com uma caixa de titânio robusta, GPS de precisão e dupla frequência, até 36 horas de bateria, conexão celular e três pulseiras especializadas feitas para atletas e para quem não vive sem adrenalina.</>}
  />

const Slide2 = () =>
  <Slide
    image='/iphone14.png'
    background='url(/slide2.png)'
    title={<> iPhone 14 < Emphasis > chegou!</Emphasis ></>}
    text={<> Aqui na < Emphasis > iCore</Emphasis > o iPhone 14 já chegou! < br ></br > Com a nova câmera grande‑angular de nível profissional e melhorias no processamento de imagem, você faz fotos ainda mais espetaculares em qualquer cenário.Prepare‑se para ver a magia acontecer em pouca luz.</>}
  />

const Slide1 = () =>
  <Slide
    background='url(/exchange.jpg)'
    title={<>Pegamos o <Emphasis>seu iPhone</Emphasis>  na compra de um <Emphasis>novo!</Emphasis></>}
    text={<>Na <Emphasis>iCore</Emphasis> você deixa o seu iPhone antigo na troca!<br></br>e sai de iPhone novo.</>}
  />

const Hero = () => {
  const carouselRef = useRef(null);
  const arr = [Slide1, Slide2, Slide3]
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

  const breakPoints = [
    { showArrows: false, width: 1 },
    { width: 768 }
  ]

  return (
    <CarroselContainer>
      <ReactElasticCarousel
        renderArrow={({ type, onClick, isEdge }) =>



          <button

            style={
              {
                width: 100,
                zIndex: 1,
                left: type === 'PREV' ? 0 : 'unset',
                right: type === 'NEXT' ? 0 : 'unset',
                position: 'absolute',
                height: '100%',
                background: 'transparent',
                border: 0
              }}
            onClick={onClick} disabled={isEdge}>

            {
              type === 'PREV'
                ? <BsArrowLeftShort fill="#fff" size={50} />
                : <BsArrowRightShort fill="#fff" size={50} />
            }


          </button>

        }
        itemPadding={[0, 0]}
        breakPoints={breakPoints}
        //autoPlaySpeed={timer}
        ref={carouselRef}
        //enableAutoPlay
        pagination={false}
        onNextEnd={onNextEnd}
      >
        {arr.map((Slide, index) => <Slide key={index} />)}
      </ReactElasticCarousel>
    </CarroselContainer>
  )
}

export default Hero