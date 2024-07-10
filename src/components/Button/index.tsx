import { ButtonStyled, Container } from "./styles";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: ButtonProps) {
  return (
    <Container>
      <ButtonStyled onClick={onClick}>{label}</ButtonStyled>
    </Container>
  );
}

export default Button;
