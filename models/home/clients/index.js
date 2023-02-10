import Image from "next/image"
import ReactElasticCarousel from "react-elastic-carousel"
import schema from './schema.json'
import { Card, Container, Title } from "./styles"

const Clients = () => {

  const breakPoints = [
    { showArrows: false, width: 1, itemsToShow: 1.3, pagination: false, itemPadding: [0, 8] },
    { width: 768, itemsToShow: 3, itemsToScroll: 1, pagination: false, itemPadding: [0, 12] }
  ]



  function getAbreviation(string) {
    var names = string.split(' '),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  return (
    <Container>
      <div style={{ width: '100%' }}>
        <Title>O que dizem sobre nós?</Title>
        <ReactElasticCarousel breakPoints={breakPoints}>
          {schema.map(item =>
            <Card key={item.id}>


              {
                item.image ?
                  <Image alt='iCore' draggable={false} style={{ minWidth: 80, borderRadius: 80, objectFit: 'cover' }} width={80} height={80} src={item.image} />
                  :
                  <div style={{
                    borderRadius: 80,
                    minWidth: 80,
                    width: 80,
                    height: 80,
                    backgroundColor: '#7b1fa2',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24
                  }}>{getAbreviation(item.name)}</div>
              }

              <div>
                <p style={{ margin: 0, marginBottom: 10, fontWeight: 'bold' }}>{item.name}</p>
                <p style={{ margin: 0 }}>{item.about}</p>
              </div>

            </Card>
          )}
        </ReactElasticCarousel>
      </div>
    </Container>
  )
}

export default Clients