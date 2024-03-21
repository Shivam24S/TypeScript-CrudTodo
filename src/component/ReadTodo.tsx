// import { Todos } from "../../model";

// interface Props {
//   todo: Todos[];
//   onEdit: (id: number) => void;
//   onDelete: (id: number) => void;
// }

// const ReadTodo: React.FC<Props> = ({ todo, onEdit, onDelete }) => {
//   const handleEdit = (id: number) => {
//     onEdit(id);
//   };

//   const handleDelete = (id: number) => {
//     onDelete(id);
//   };

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>task</th>
//             <th>description</th>
//             <th colSpan={2}>action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todo.map((item) => (
//             <tr key={item.id}>
//               <td>{item.task}</td>
//               <td>{item.description}</td>
//               <td>
//                 <button onClick={() => handleEdit(item.id)}>Edit</button>
//               </td>
//               <td>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };
// export default ReadTodo;

import { Todos } from "../../model";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from "@mui/material";

interface Props {
  todo: Todos[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const ReadTodo: React.FC<Props> = ({ todo, onEdit, onDelete }) => {
  const handleEdit = (id: number) => {
    onEdit(id);
  };

  const handleDelete = (id: number) => {
    onDelete(id);
  };

  return (
    <>
      {todo.length > 0 && (
        <>
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              borderRadius: "10px",
              width: "70%",
              margin: "auto",
              padding: "20px",
            }}
          >
            <Box sx={{ width: "100%", overflowX: "auto" }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Task</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Action</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {todo.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.task}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleEdit(item.id)}
                          >
                            Edit
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default ReadTodo;
