import Image from "next/image"
import ReactElasticCarousel from "react-elastic-carousel"
import organizeFiles from "./organizeFiles"
import { DividedImageWrapper, ImageContainer, Title } from "./styles"

const breakPoints = [
  { width: 1, itemsToShow: 1.3 },
  { width: 768, itemsToShow: 3.5 },
  { width: 1200, itemsToShow: 4.5 }
]

const Gallery = ({ gallery }) =>
  <section>
    <Title>Nos siga nas redes sociais</Title>
    <ReactElasticCarousel breakPoints={breakPoints} showArrows={false} pagination={false} itemsToScroll={1} itemPadding={[0, 6]}>
      {organizeFiles(gallery).map(image =>
        <>
          {
            image.length === 1 ?
              <ImageContainer key={image}>
                <Image alt="iCore" fill draggable={false} style={{ objectFit: 'cover' }} src={`/gallery/${image[0]}`} />
              </ImageContainer>
              :
              <ImageContainer key={image}>
                <DividedImageWrapper>
                  <Image alt="iCore" fill draggable={false} style={{ objectFit: 'cover' }} src={`/gallery/${image[0]}`} />
                </DividedImageWrapper>

                <DividedImageWrapper>
                  <Image alt="iCore" fill draggable={false} style={{ objectFit: 'cover' }} src={`/gallery/${image[1]}`} />
                </DividedImageWrapper>
              </ImageContainer>
          }
        </>
      )}
    </ReactElasticCarousel>
  </section>

export default Gallery