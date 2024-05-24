import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  console.log("products : ", products);
  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      stock: "",
      pageSize: 100000,
    };
    dispatch(findProducts(data));
  }, [products.deleteProduct,products.products]);
  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };
  return (
    <Card sx={{ bgcolor: "#333945", color: "white", p: 2 }}>
      <CardHeader title="All Products" />
      <TableContainer
        component={Paper}
        sx={{ bgcolor: "#333945", color: "white" }}
      >
        <Table sx={{ minWidth: 650, color: "white" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Image</TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Title
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Brand
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Price
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Category
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Quantity
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.products?.content?.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  color: "white",
                }}
              >
                <TableCell sx={{ color: "white" }} align="left">
                  <Avatar src={row.imgURL} alt="img"></Avatar>
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {row.title}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {row.brand}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {row.discountedPrice}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {row?.category[0]?.name}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {row.quantity}
                </TableCell>
                <TableCell align="left">
                  <Button
                    onClick={() => handleProductDelete(row._id)}
                    variant="outlined"
                    sx={{ color: "#E71C23", borderColor: "#E71C23" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default ProductsTable;
