import { Clothing } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'cor3' | 'cor2'
  clothes: Clothing[]
  id?: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ background, title, clothes, id }: Props) => {
  const getClothingTags = (clothing: Clothing) => {
    const tags = []

    if (clothing.release_date) {
      tags.push(clothing.release_date)
    }

    if (clothing.prices.discount) {
      tags.push(`${clothing.prices.discount}%`)
    }

    if (clothing.prices.current) {
      tags.push(formataPreco(clothing.prices.current))
    }

    return tags
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {clothes.map((clothing) => (
            <li key={clothing.id}>
              <Product
                id={clothing.id}
                category={clothing.details.category}
                description={clothing.description}
                image={clothing.media.thumbnail}
                infos={getClothingTags(clothing)}
                type={clothing.details.system}
                title={clothing.name}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
