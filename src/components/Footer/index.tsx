import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">action</Link>
          </li>
          <li>
            <Link to="/categories#sports">sports</Link>
          </li>
          <li>
            <Link to="/categories#simulation">simulation</Link>
          </li>
          <li>
            <Link to="/categories#fight">fight</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Lançamentos</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; WAVES Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
