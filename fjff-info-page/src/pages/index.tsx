import Head from 'next/head'
import Image from 'next/image'
import { Sofadi_One } from '@next/font/google'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Layout from '@/layouts/Layout'

const font = Sofadi_One({ weight: ['400'], subsets: ['latin'] })

export default function Home() {
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
      <h3 className='text-2xl'>About</h3>
      <h3 className='text-2xl'>Products</h3>
      <h3 className='text-2xl'>Our Cultivar</h3>
    </Layout>
  )
}
