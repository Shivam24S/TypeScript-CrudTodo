// import { useEffect, useState } from "react";

// interface Props {
//   onAdd: (input: { task: string; description: string }) => void;
//   editData: {
//     task: string;
//     description: string;
//   };
// }

// const AddTodo: React.FC<Props> = ({ onAdd, editData }) => {
//   const [input, setInput] = useState<{ task: string; description: string }>({
//     task: "",
//     description: "",
//   });

//   useEffect(() => {
//     editData ? setInput(editData) : "";
//   }, [editData]);

//   const handleChange = (identifier: string, newValue: string) => {
//     setInput((prevInput) => {
//       return {
//         ...prevInput,
//         [identifier]: newValue,
//       };
//     });
//   };

//   console.log("input check", input);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onAdd(input);

//     setInput({ task: "", description: "" });
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="task"
//           placeholder="task"
//           value={input.task}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//             handleChange("task", e.target.value);
//           }}
//         />
//         <br />
//         <input
//           type="text"
//           name="description"
//           placeholder="description"
//           value={input.description}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//             handleChange("description", e.target.value);
//           }}
//         />
//         <br />
//         <button>Add</button>
//       </form>
//     </>
//   );
// };
// export default AddTodo;

import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

interface Props {
  onAdd: (input: { task: string; description: string }) => void;
  editData: {
    task: string;
    description: string;
  };
}

const AddTodo: React.FC<Props> = ({ onAdd, editData }) => {
  const [input, setInput] = useState<{ task: string; description: string }>({
    task: "",
    description: "",
  });

  useEffect(() => {
    if (editData) {
      setInput(editData);
    } else {
      setInput({ task: "", description: "" });
    }
  }, [editData]);

  const handleChange = (identifier: string, newValue: string) => {
    setInput((prevInput) => ({
      ...prevInput,
      [identifier]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(input);
    setInput({ task: "", description: "" });
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "70%",
        margin: "auto",
        padding: "20px",
        backgroundSize: "auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <TextField
              sx={{ width: "400px" }}
              fullWidth
              label="Task"
              name="task"
              value={input.task}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange("task", e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ width: "400px" }}
              fullWidth
              label="Description"
              name="description"
              value={input.description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange("description", e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              {editData.task ? "update" : "add"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddTodo;
