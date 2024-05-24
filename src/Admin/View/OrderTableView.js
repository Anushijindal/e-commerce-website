import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliverOrder,
  getAllOrder,
  shipOrder,
} from "../../State/AdminOrder/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrderTableView = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event,index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };
  const { adminOrder } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getAllOrder());
  }, [
    adminOrder.shipped,
    adminOrder.delivered,
    adminOrder.confirmed,
    adminOrder.deleted,
  ]);
  console.log(adminOrder);
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };
  const handleShippOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };
  const handleConfirmOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };
  const handleDeliverOrder = (orderId) => {
    dispatch(deliverOrder(orderId));
    handleClose();
  };
  return (
    <Card sx={{ bgcolor: "#333945", color: "white", p: 2, boxShadow:8,height: '100%', }}>
      <CardHeader title="Recent Orders" />
      <TableContainer
        component={Paper}
        sx={{
          bgcolor: "#333945",
          color: "white",
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <Table sx={{ minWidth: 650, color: "white" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Image</TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Title
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Order Id
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Price
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Total items
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Status
              </TableCell>
              {/* <TableCell sx={{ color: "white" }} align="left">
                Update Status
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Delete
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {adminOrder?.orders?.map((row,index) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  color: "white",
                }}
              >
                <TableCell sx={{ color: "white" }} align="left">
                  <AvatarGroup sx={{ justifyContent: "start" }}>
                    {row?.orderItems?.slice(0,5)?.map((item) => (
                      <Avatar
                        src={
                          Array.isArray(item?.product)
                            ? item.product[0]?.imgURL
                            : item?.product?.imgURL
                        }
                      ></Avatar>
                    ))}
                  </AvatarGroup>
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {row?.orderItems?.map((item) => (
                    <p>
                      {Array.isArray(item?.product)
                        ? item.product[0]?.title
                        : item?.product?.title}
                    </p>
                  ))}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {row._id}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {row.totalDiscountedPrice}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  {row.totalItem}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  <span
                    className={`${
                      row.OrderStatus === "PLACED"
                        ? "bg-amber-600"
                        : row.OrderStatus === "CONFIRMED"
                        ? "bg-green-600"
                        : row.OrderStatus === "SHIPPED"
                        ? "bg-orange-600"
                        : row.OrderStatus === "DELIVERED"
                        ? "bg-teal-600"
                        : "bg-red-600"
                    } px-4 py-1 rounded-full`}
                  >
                    {row.OrderStatus}
                  </span>
                </TableCell>
                {/* <TableCell align="left">
                  <Button
                    id="basic-button"
                    aria-controls={`basic-menu-${row._id}`}
                    aria-haspopup="true"
                    aria-expanded={Boolean(anchorEl[index])}
                    onClick={(event)=>handleClick(event,index)}
                  >
                    Order Status
                  </Button>
                  <Menu
                    id={`basic-menu-${row._id}`}
                    anchorEl={anchorEl[index]}
                    open={Boolean(anchorEl[index])}
                    onClose={()=>handleClose(index)}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={() => handleConfirmOrder(row._id)}>
                      Confirm Order
                    </MenuItem>
                    <MenuItem onClick={() => handleShippOrder(row._id)}>
                      Shipped Order
                    </MenuItem>
                    <MenuItem onClick={() => handleDeliverOrder(row._id)}>
                      Delivered Order
                    </MenuItem>
                  </Menu>
                </TableCell> */}
                {/* <TableCell align="left">
                  <Button
                    onClick={() => handleDeleteOrder(row._id)}
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

export default OrderTableView;
