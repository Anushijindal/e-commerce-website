import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../State/User/Action";
import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const CustomerTableView = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  console.log("users", users);
  return (
    <Card sx={{ bgcolor: "#333945", color: "white", p: 2,boxShadow:8 }}>
      <CardHeader title="Recent Customers" />
      <TableContainer
        component={Paper}
        sx={{ bgcolor: "#333945", color: "white" }}
      >
        <Table sx={{ minWidth: 650, color: "white" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Image</TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Name
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                User ID
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Email Id
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Role
              </TableCell>
              {/* <TableCell sx={{ color: "white" }} align="left">
                Update Role
              </TableCell> */}
              {/* <TableCell sx={{ color: "white" }} align="left">
                Delete
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.users?.slice(0,5)?.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  color: "white",
                }}
              >
                <TableCell sx={{ color: "white" }} align="left">
                  <Avatar sx={{bgcolor:"deeppink"}}>{row?.firstName[0].toUpperCase()}</Avatar>
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {row.firstName+" "+row.lastName}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {row._id}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {row.email}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {row.role}
                </TableCell>
                {/* <TableCell sx={{ color: "white" }} align="left">
                  {row.quantity}
                </TableCell> */}
                {/* <TableCell align="left">
                  <Button
                    // onClick={() => handleProductDelete(row._id)}
                    variant="outlined"
                    sx={{ color: "#E71C23", borderColor: "#E71C23" }}
                  >
                    Delete
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default CustomerTableView;
