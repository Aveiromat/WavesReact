import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos, Imagem } from './styles'

type Props = {
  title: string
  category: string
  type: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  type,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <Card to={`/product/${id}`}>
      <Imagem src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{type}</Tag>
      <Descricao>{getDescricao(description)}</Descricao>
    </Card>
  )
}

export default Product
