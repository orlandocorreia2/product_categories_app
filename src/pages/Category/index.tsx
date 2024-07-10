import Header from "../../components/Header";
import { Container } from "./styles";
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import Table from "../../components/Table";
import TableActions from "../../components/Table/Actions";
import Input from "../../components/Input";
import Select from "../../components/Select";

type CategoryProps = {
  id: string;
  description: string;
  status: string;
};

function Category() {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [category, setCategory] = useState<CategoryProps>({} as CategoryProps);
  const [rows, setRows] = useState<CategoryProps[]>([]);

  const handleChangeCategory = useCallback(
    (event: any, key: "description" | "status") => {
      setCategory((category) => ({ ...category, [key]: event.target.value }));
    },
    []
  );

  const handleEditCategory = async (id: string) => {
    setShowModalEdit(true);
    setRows((oldRows) => {
      const categoryFind = oldRows.find((oldRow) => oldRow.id === id);
      if (categoryFind) {
        setCategory(categoryFind);
      }
      return oldRows;
    });
  };

  const handleDeleteCategory = async (id: string) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Press a button!\nEither OK or Cancel.") === true) {
      await api.delete(`/categories/${id}`);
      setRows((oldRows) => oldRows.filter((oldRow) => oldRow.id !== id));
    }
  };

  const handleSaveCategory = useCallback(async () => {
    const { data } = await api.post("/categories", {
      ...category,
      status: category.status === "active",
    });
    if (data) {
      setRows((oldRows) => [
        {
          id: data.id,
          description: data.description,
          status: data.status,
          created_at: data.created_at,
          updated_at: data.updated_at,
          actions: (
            <TableActions
              handleEdit={() => handleEditCategory(data.id)}
              handleDelete={() => handleDeleteCategory(data.id)}
            />
          ),
        },
        ...oldRows,
      ]);
    }
  }, [category]);

  const init = useCallback(async () => {
    try {
      const { data: pagination } = await api.get("/categories");
      if (pagination.data.length) {
        setRows(
          pagination.data.map(
            (item: {
              id: any;
              description: any;
              status: any;
              created_at: any;
              updated_at: any;
            }) => ({
              id: item.id,
              description: item.description,
              status: item.status,
              created_at: item.created_at,
              updated_at: item.updated_at,
              actions: (
                <TableActions
                  handleEdit={() => handleEditCategory(item.id)}
                  handleDelete={() => handleDeleteCategory(item.id)}
                />
              ),
            })
          )
        );
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);
  return (
    <>
      <Header />
      <Container>
        <Table
          title="Categories"
          columns={[
            "ID",
            "Descrição",
            "Status",
            "Criado em",
            "Atualizado em",
            "Ações",
          ]}
          rows={rows}
          modalContent={
            <>
              <Input
                label="Descrição"
                value={category.description}
                handleChange={(event) =>
                  handleChangeCategory(event, "description")
                }
              />
              <Select
                label="Status"
                options={[
                  {
                    label: "Ativo",
                    value: true,
                    selected: category.status === "active",
                  },
                  {
                    label: "Inativo",
                    value: false,
                    selected: category.status === "inactive",
                  },
                ]}
                handleChange={(event) => handleChangeCategory(event, "status")}
              />
            </>
          }
          modalHandleSave={handleSaveCategory}
          showModalEdit={showModalEdit}
        />
      </Container>
    </>
  );
}

export default Category;
