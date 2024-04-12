import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos, Imagem } from './styles'

type Props = {
  title: string
  category: string
  type: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  type,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <Imagem src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{type}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
