import { Container, ContainerLabel, InputStyled } from "./styles";

type InputProps = {
  label: string;
  value: any;
  handleChange: (event: any) => void;
};

function Input({ label, value, handleChange }: InputProps) {
  return (
    <Container>
      <ContainerLabel>{label}:</ContainerLabel>
      <InputStyled onChange={handleChange} value={value} />
    </Container>
  );
}

export default Input;
