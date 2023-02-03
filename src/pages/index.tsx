import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Layout from '@/layouts/Layout'
import ContentWrapper from '@/layouts/ContentWrapper'
import { getCompanyAbout, getCultivar } from '@/lib/api'
import { CompanyAbout, Specimen } from '@/lib/types'
import Card from '@/components/Card'
import MarkdownContent from '@/components/MarkdownContent'

type Props = {
  cultivar: Specimen[]
  companyAbout: CompanyAbout
}

export default function Home({ cultivar, companyAbout }: Props) {
  const { content } = companyAbout
  return (
    <Layout isLandingPage>
      <ContentWrapper title="About" containerClasses='mt-4'>
        <MarkdownContent content={content} />
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
  const companyAbout = getCompanyAbout()
  return {
    props: { cultivar, companyAbout },
  }
}
