import { Imagem, Titulo, Precos } from './styles'

import bannerImg from '../../assets/images/banner.png'
import Tag from '../Tag'
import Button from '../Button'
import { Clothing } from '../../pages/Home'
import { useEffect, useState } from 'react'

import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [clothing, setClothing] = useState<Clothing>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setClothing(res))
  }, [])

  if (!clothing) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${clothing.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{clothing.name}</Titulo>
          <Precos>
            De <span>{formataPreco(clothing.prices.old)}</span> <br />
            por apenas {formataPreco(clothing.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${clothing.id}`}
          title="Clique Aqui para aproveitar a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
