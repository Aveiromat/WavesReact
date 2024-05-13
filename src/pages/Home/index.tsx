import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

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
  const { data: onSaleClothes } = useGetOnSaleQuery()
  const { data: soonClothes } = useGetSoonQuery()

  if (onSaleClothes && soonClothes) {
    return (
      <>
        <Banner />
        <ProductsList
          clothes={onSaleClothes}
          title="Promoções"
          background="cor2"
        />
        <ProductsList
          clothes={soonClothes}
          title="Lançamentos"
          background="cor3"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
