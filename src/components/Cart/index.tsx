import Button from '../Button'

import starWars from '../../assets/images/star_wars.png'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={starWars} />
          <div>
            <h3>nome da roupa</h3>
            <Tag>RPG</Tag>
            <Tag>ps5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={starWars} />
          <div>
            <h3>nome da roupa</h3>
            <Tag>RPG</Tag>
            <Tag>ps5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>2 roupa(s) no carrinho</Quantity>
      <Prices>
        Total de R$ 250 <span>Em até 6x sem juros</span>
      </Prices>
      <Button title="clique aqui para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
