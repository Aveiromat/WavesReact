import { Clothing } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { formataPreco } from '../ProductsList'

import { Banner, Infos } from './styles'

type Props = {
  clothing: Clothing
}

const Hero = ({ clothing }: Props) => (
  <Banner style={{ backgroundImage: `url(${clothing.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{clothing.details.category}</Tag>
        <Tag>{clothing.details.system}</Tag>
      </div>
      <Infos>
        <h2>{clothing.name}</h2>
        <p>
          {clothing.prices.discount && (
            <span>{formataPreco(clothing.prices.old)}</span>
          )}

          {clothing.prices.current && (
            <>Por {formataPreco(clothing.prices.current)}</>
          )}
        </p>
        {clothing.prices.current && (
          <Button
            type="button"
            title="Clique aqui para adicionar este produto ao carrinho"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
