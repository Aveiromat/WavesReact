import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import bagvans from '../../assets/images/vans.webp'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Clothing = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Clothing[]>([])
  const [lancamentos, setEmBreve] = useState<Clothing[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList clothes={promocoes} title="Promoções" background="cor2" />
      <ProductsList
        clothes={lancamentos}
        title="Lançamentos"
        background="cor3"
      />
    </>
  )
}

export default Home
