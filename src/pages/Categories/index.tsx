import ProductsList from '../../components/ProductsList'

import bagvans from '../../assets/images/vans.webp'
import { Clothing } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [clothesAcao, setClothesAcao] = useState<Clothing[]>([])
  const [clothesEsportes, setClothesEsportes] = useState<Clothing[]>([])
  const [clothesSimulacao, setClothesSimulacao] = useState<Clothing[]>([])
  const [clothesLuta, setClothesLuta] = useState<Clothing[]>([])
  const [clothesRpg, setClothesRpg] = useState<Clothing[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setClothesAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setClothesEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setClothesSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setClothesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setClothesRpg(res))
  }, [])
  return (
    <>
      <ProductsList clothes={clothesAcao} title="Promoções" background="cor2" />
      <ProductsList
        clothes={clothesEsportes}
        title="Lançamentos"
        background="cor3"
      />
      <ProductsList
        clothes={clothesSimulacao}
        title="Promoções"
        background="cor2"
      />
      <ProductsList
        clothes={clothesLuta}
        title="Lançamentos"
        background="cor3"
      />
      <ProductsList
        clothes={clothesRpg}
        title="Lançamentos"
        background="cor3"
      />
    </>
  )
}
export default Categories
