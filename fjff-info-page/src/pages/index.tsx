import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Layout from '@/layouts/Layout'
import ContentWrapper from '@/layouts/ContentWrapper'
import { getCultivars } from '@/lib/api'

type Props = {
  cultivar: any
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
        {
          cultivar.map((specimen: any) => {
            return (<p key={specimen}>{specimen.test}</p>)
          })
        }
      </ContentWrapper>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const cultivar = getCultivars()
  return {
    props: { cultivar },
  }
}
