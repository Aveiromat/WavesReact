import ProductsList from '../../components/ProductsList'

import bagvans from '../../assets/images/vans.webp'
import { Clothing } from '../Home'
import { useEffect, useState } from 'react'

import {
  useGetActionClothesQuery,
  useGetFightClothesQuery,
  useGetRpgClothesQuery,
  useGetSimulationClothesQuery,
  useGetSportClothesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionClothes } = useGetActionClothesQuery()
  const { data: fightClothes } = useGetFightClothesQuery()
  const { data: rpgClothes } = useGetRpgClothesQuery()
  const { data: simulationClothes } = useGetSimulationClothesQuery()
  const { data: sportsClothes } = useGetSportClothesQuery()

  if (
    actionClothes &&
    fightClothes &&
    rpgClothes &&
    simulationClothes &&
    sportsClothes
  ) {
    return (
      <>
        <ProductsList
          clothes={actionClothes}
          title="Promoções"
          background="cor2"
        />
        <ProductsList
          clothes={sportsClothes}
          title="Lançamentos"
          background="cor3"
        />
        <ProductsList
          clothes={simulationClothes}
          title="Promoções"
          background="cor2"
        />
        <ProductsList
          clothes={fightClothes}
          title="Lançamentos"
          background="cor3"
        />
        <ProductsList
          clothes={rpgClothes}
          title="Lançamentos"
          background="cor3"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Categories
