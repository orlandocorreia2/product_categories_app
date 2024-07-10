import { Container, Editar, Excluir } from "./styles";

type TableActionsProps = {
  handleEdit: () => void;
  handleDelete: () => void;
};

function TableActions({ handleEdit, handleDelete }: TableActionsProps) {
  return (
    <Container>
      <Editar onClick={handleEdit}>[Editar]</Editar>
      <Excluir onClick={handleDelete}>[Excluir]</Excluir>
    </Container>
  );
}

export default TableActions;
