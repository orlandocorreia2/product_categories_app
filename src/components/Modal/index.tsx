import { useCallback } from "react";
import {
  Close,
  Container,
  ContainerActions,
  ContainerModal,
  ContentHeader,
  ContentModal,
  Title,
} from "./styles";
import Button from "../Button";

type ModalProps = {
  title: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
  handleSave: () => void;
};

function Modal({ title, setIsOpen, children, handleSave }: ModalProps) {
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <Container>
      <ContainerModal>
        <ContentModal>
          <ContentHeader>
            <Title>{title}</Title>
            <Close onClick={handleClose}>&times;</Close>
          </ContentHeader>
          {children}
          <ContainerActions>
            <Button label="Salvar" onClick={handleSave} />
          </ContainerActions>
        </ContentModal>
      </ContainerModal>
    </Container>
  );
}

export default Modal;
