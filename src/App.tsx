import { useState } from "react";
import AddTodo from "./component/AddTodo";
import ReadTodo from "./component/ReadTodo";
import { Todos } from "../model";

const App: React.FC = () => {
  const [todoData, setTodoData] = useState<Todos[]>([]);
  const [isEdit, setIsEdit] = useState<number | null>();
  const [editData, setEditData] = useState<{
    task: string;
    description: string;
  }>({
    task: "",
    description: "",
  });

  const handleAdd = (input: { task: string; description: string }) => {
    if (!input.task || !input.description) {
      alert("Please fill data for a task and description");
    } else if (isEdit) {
      setTodoData((prevData) =>
        prevData.map((todo) =>
          todo.id === isEdit
            ? {
                task: input.task,
                description: input.description,
              }
            : todo
        )
      );
      setIsEdit(null);
    } else {
      const newData = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
      };
      setTodoData((prevData) => [newData, ...prevData]);
    }
  };

  const handleUpdate = (id: number) => {
    const newUpdateData = todoData.find((item) => item.id === id);
    if (newUpdateData) {
      setEditData(newUpdateData);
      setIsEdit(id);
    }
  };

  const handleDelete = (id: number) => {
    const updatedData = todoData.filter((item) => item.id !== id);
    setTodoData(updatedData);
  };

  return (
    <>
      <AddTodo onAdd={handleAdd} editData={editData} />
      <br />
      <ReadTodo todo={todoData} onEdit={handleUpdate} onDelete={handleDelete} />
    </>
  );
};

export default App;
