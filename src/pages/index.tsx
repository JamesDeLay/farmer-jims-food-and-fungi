import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Layout from '@/layouts/Layout'
import ContentWrapper from '@/layouts/ContentWrapper'
import { getCultivar } from '@/lib/api'
import { Specimen } from '@/lib/types'
import Card from '@/components/Card'

type Props = {
  cultivar: Specimen[]
}

export default function Home({ cultivar }: Props) {
  return (
    <Layout isLandingPage>
      <ContentWrapper title="About" containerClasses='mt-4'>
        <article className='prose-lg lg:prose-2xl m-auto'>
          <p>
            Sed velit dignissim sodales ut eu sem integer vitae justo. Ut eu sem integer vitae justo eget magna. Aenean et tortor at risus viverra adipiscing at. Fames ac turpis egestas integer eget aliquet nibh praesent. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Felis imperdiet proin fermentum leo. Enim lobortis scelerisque fermentum dui faucibus in ornare. Nunc congue nisi vitae suscipit tellus mauris. Augue lacus viverra vitae congue. Pellentesque nec nam aliquam sem.
          </p>
          <p>
            Sed velit dignissim sodales ut eu sem integer vitae justo. Ut eu sem integer vitae justo eget magna. Aenean et tortor at risus viverra adipiscing at. Fames ac turpis egestas integer eget aliquet nibh praesent. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Felis imperdiet proin fermentum leo. Enim lobortis scelerisque fermentum dui faucibus in ornare. Nunc congue nisi vitae suscipit tellus mauris. Augue lacus viverra vitae congue. Pellentesque nec nam aliquam sem.
          </p>
        </article>
      </ContentWrapper>
      <ContentWrapper title="Products">
        <p>Products Placeholder...</p>
      </ContentWrapper>
      <ContentWrapper title="Our Cultivar" containerClasses='mb-4' >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {
            cultivar.map((specimen: Specimen, idx: Number) => {
              return (
                <Card
                  link={specimen.filePath}
                  key={`${idx}`}
                  title={specimen.commonName}
                  subTitle={specimen.scientificName}
                  imgURL={specimen.imgURL}
                />
              )
            })
          }
        </div>
      </ContentWrapper>
    </Layout>
  )
}


export const getStaticProps = async () => {
  const cultivar = getCultivar()
  return {
    props: { cultivar },
  }
}
