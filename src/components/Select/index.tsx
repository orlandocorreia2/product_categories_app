import { Container, SelectStyled, Option, ContainerLabel } from "./styles";

type SelectProps = {
  label: string;
  options: { label: string; value: any; selected?: boolean }[];
  handleChange: (event: any) => void;
};

function Select({ label, options, handleChange }: SelectProps) {
  return (
    <Container>
      <ContainerLabel>{label}</ContainerLabel>

      <SelectStyled onChange={handleChange}>
        {options.map((option) => {
          if (option.selected && option.selected === true) {
            return (
              <Option key={option.value} value={option.value} selected>
                {option.label}
              </Option>
            );
          }
          return (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          );
        })}
      </SelectStyled>
    </Container>
  );
}

export default Select;
