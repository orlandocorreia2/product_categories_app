import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "../Modal";
import {
  Container,
  ContainerTitle,
  BtnAdd,
  TableStyled,
  TD,
  TH,
  Title,
  TR,
} from "./styles";

type TableProps = {
  title: string;
  columns: string[];
  rows: any[];
  modalContent: any;
  modalHandleSave: () => void;
  showModalEdit: boolean;
};

function Table({
  title,
  columns,
  rows,
  modalContent,
  modalHandleSave,
  showModalEdit,
}: TableProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAddRegister = useCallback(() => {
    setModalIsOpen(true);
  }, []);

  const handleSave = useCallback(() => {
    setModalIsOpen(false);
    modalHandleSave();
  }, [modalHandleSave]);

  useEffect(() => {
    setModalIsOpen(showModalEdit);
  }, [showModalEdit]);

  return (
    <Container>
      {modalIsOpen && (
        <Modal
          title="Salvar Categoria"
          setIsOpen={setModalIsOpen}
          handleSave={handleSave}
        >
          {modalContent}
        </Modal>
      )}
      <ContainerTitle>
        <Title>{title}</Title>
        <BtnAdd onClick={handleAddRegister}>Adicionar Registro</BtnAdd>
      </ContainerTitle>
      <TableStyled>
        <TR key={uuidv4()}>
          {columns.map((column) => (
            <TH key={uuidv4()}>{column}</TH>
          ))}
        </TR>
        {rows.map((row) => {
          const rowColumns = Object.keys(row).map((rowKey) => (
            <TD key={uuidv4()}>{row[rowKey]}</TD>
          ));
          return <TR key={uuidv4()}>{rowColumns}</TR>;
        })}
      </TableStyled>
    </Container>
  );
}

export default Table;
