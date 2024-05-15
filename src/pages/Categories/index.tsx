import ProductsList from '../../components/ProductsList'

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
          id="action"
        />
        <ProductsList
          clothes={sportsClothes}
          title="Lançamentos"
          background="cor3"
          id="sports"
        />
        <ProductsList
          clothes={simulationClothes}
          title="Promoções"
          background="cor2"
          id="simulation"
        />
        <ProductsList
          clothes={fightClothes}
          title="Lançamentos"
          background="cor3"
          id="fight"
        />
        <ProductsList
          clothes={rpgClothes}
          title="Lançamentos"
          background="cor3"
          id="rpg"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Categories
