import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>RPG</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Lançamentos</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; WAVES Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
