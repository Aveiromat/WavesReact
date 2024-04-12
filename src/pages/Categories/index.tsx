import Clothing from '../../models/Clothing'
import ProductsList from '../../components/ProductsList'

import bagvans from '../../assets/images/vans.webp'

const promocoes: Clothing[] = [
  {
    id: 1,
    category: 'like',
    description: 'teste32131',
    title: 'bag vans',
    type: 'bag',
    infos: ['10%', 'R$ 250,00'],
    image: bagvans
  },
  {
    id: 2,
    category: 'like',
    description: 'teste32131',
    title: 'bag vans2',
    type: 'bag',
    infos: ['10%', 'R$ 250,00'],
    image: bagvans
  },
  {
    id: 3,
    category: 'like',
    description: 'teste32131',
    title: 'bag vans3',
    type: 'bag',
    infos: ['10%', 'R$ 250,00'],
    image: bagvans
  },
  {
    id: 4,
    category: 'like',
    description: 'teste32131',
    title: 'bag vans4',
    type: 'bag',
    infos: ['10%', 'R$ 250,00'],
    image: bagvans
  }
]

const lancamentos: Clothing[] = [
  {
    id: 1,
    category: 'like',
    description: 'teste32131',
    title: 'bag vans',
    type: 'bag',
    infos: ['10%', 'R$ 250,00'],
    image: bagvans
  },
  {
    id: 2,
    category: 'like',
    description: 'teste32131',
    title: 'bag vans2',
    type: 'bag',
    infos: ['10%', 'R$ 250,00'],
    image: bagvans
  },
  {
    id: 3,
    category: 'like',
    description: 'teste32131',
    title: 'bag vans3',
    type: 'bag',
    infos: ['10%', 'R$ 250,00'],
    image: bagvans
  },
  {
    id: 4,
    category: 'like',
    description: 'teste32131',
    title: 'bag vans4',
    type: 'bag',
    infos: ['10%', 'R$ 250,00'],
    image: bagvans
  }
]

const Categories = () => (
  <>
    <ProductsList clothes={promocoes} title="Promoções" background="cor2" />
    <ProductsList clothes={lancamentos} title="Lançamentos" background="cor3" />
    <ProductsList clothes={promocoes} title="Promoções" background="cor2" />
    <ProductsList clothes={lancamentos} title="Lançamentos" background="cor3" />
  </>
)

export default Categories
