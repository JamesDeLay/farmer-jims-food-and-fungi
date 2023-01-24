import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Layout from '@/layouts/Layout'
import ContentWrapper from '@/layouts/ContentWrapper'
import { getCultivars } from '@/lib/api'
import { Cultivar } from '@/lib/types'
import Card from '@/components/Card'

type Props = {
  cultivar: Cultivar[]
}

export default function Home({ cultivar }: Props) {
  return (
    <Layout>
      <div className='posi'>
        <NavBar routes={[]} />
      </div>
      <div className='w-full'>
        <Hero title="Farmer Jim's" subTitle="Food and Fungi" />
      </div>
      <div>

      </div>
      <ContentWrapper title="About">
        <article className='prose-lg lg:prose-2xl m-auto'>
          <p>
            Sed velit dignissim sodales ut eu sem integer vitae justo. Ut eu sem integer vitae justo eget magna. Aenean et tortor at risus viverra adipiscing at. Fames ac turpis egestas integer eget aliquet nibh praesent. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Felis imperdiet proin fermentum leo. Enim lobortis scelerisque fermentum dui faucibus in ornare. Nunc congue nisi vitae suscipit tellus mauris. Augue lacus viverra vitae congue. Pellentesque nec nam aliquam sem.
          </p>
          <p>
            Sed velit dignissim sodales ut eu sem integer vitae justo. Ut eu sem integer vitae justo eget magna. Aenean et tortor at risus viverra adipiscing at. Fames ac turpis egestas integer eget aliquet nibh praesent. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Felis imperdiet proin fermentum leo. Enim lobortis scelerisque fermentum dui faucibus in ornare. Nunc congue nisi vitae suscipit tellus mauris. Augue lacus viverra vitae congue. Pellentesque nec nam aliquam sem.
          </p>
        </article>
      </ContentWrapper>
      {/* <h3 className='text-2xl'>Products</h3> */}

      <ContentWrapper title="Products">
      </ContentWrapper>
      <ContentWrapper title="Our Cultivar">
        <div className='grid grid-cols-1  md:grid-cols-3'>
          {
            cultivar.map((specimen: Cultivar, idx: Number) => {
              return (
                <Card
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
      <div className='mt-4 mb-12'>

      </div>
    </Layout>
  )
}


export const getStaticProps = async () => {
  const cultivar = getCultivars()
  console.log(cultivar)
  return {
    props: { cultivar },
  }
}
