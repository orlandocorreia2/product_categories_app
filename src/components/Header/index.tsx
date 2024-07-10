import { Container, UL, LI, Link } from "./styles";

function Header() {
  return (
    <Container>
      <UL>
        <LI>
          <Link to="/categories">Categorias</Link>
          <Link to="/products">Produtos</Link>
        </LI>
      </UL>
    </Container>
  );
}

export default Header;
