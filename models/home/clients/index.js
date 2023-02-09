import Image from "next/image"
import ReactElasticCarousel from "react-elastic-carousel"
import schema from './schema.json'
import { Card, Container, Title } from "./styles"

const Clients = () => {

  const breakPoints = [
    { showArrows: false, width: 1, itemsToShow: 1.3, pagination: false, itemPadding: [0, 8] },
    { width: 768, itemsToShow: 3, itemsToScroll: 1, pagination: false, itemPadding: [0, 12] }
  ]

  return (
    <Container>
      <div style={{ width: '100%' }}>
        <Title>O que dizem sobre nós?</Title>
        <ReactElasticCarousel breakPoints={breakPoints}>
          {schema.map(item =>
            <Card key={item.id}>
              <Image alt='iCore' style={{ minWidth: 115, borderRadius: 115, objectFit: 'cover' }} width={115} height={115} src={item.image} />
              <p>{item.about}</p>
            </Card>
          )}
        </ReactElasticCarousel>
      </div>
    </Container>
  )
}

export default Clients